import { useEffect, useState } from "react";
import styles from "./TransactionTile.module.css"
import { Icon } from "../Utils/Icon";

type TransactionTilePropTypes = {
  item: {
    title: string;
    amount: number;
    type: string;
    date: string;
  };
};

export function TransactionTile({ item }: TransactionTilePropTypes) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsFocused(false);
    }
  };
  const handleEscape = () => {
    setIsFocused(false)
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  const handleMouse = (action: string) => {
    if (action == "enter") setIsHovered(true);
    else if (action == "leave") setIsHovered(false);
    else if (action == "click") {
      setIsHovered(false);
      setIsFocused(true);
    }
  };

  return (
    <>
      <div
        className= {styles.card}
        onMouseEnter={() => handleMouse("enter")}
        onMouseLeave={() => handleMouse("leave")}
        onClick={() => handleMouse("click")}
      >
        {!isHovered ? item.title : item.amount}
        {isFocused && (
          <>
            <div className={styles.overlay}></div>
            <div className={styles["full-container"]}>
              <div className={styles.big}>
                <div>{item.title}</div>
                <div>{item.amount}</div>
                <div>{item.date}</div>
                <div>{item.type}</div>
              </div>
            <div className={styles.close}>
              <Icon val="close" onClick={handleEscape}></Icon>
            </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
