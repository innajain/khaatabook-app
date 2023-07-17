import { useEffect, useState } from "react";

import "./TransactionTile.css";

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
        className="card"
        onMouseEnter={() => handleMouse("enter")}
        onMouseLeave={() => handleMouse("leave")}
        onClick={() => handleMouse("click")}
      >
        {!isHovered ? item.title : item.amount}
        {isFocused && (
          <>
            <div className="overlay"></div>
            <div className="full-container">
              <div className="big">
                <div>{item.title}</div>
                <div>{item.amount}</div>
                <div>{item.date}</div>
                <div>{item.type}</div>
              </div>
            </div>
            <div className="close"></div>
          </>
        )}
      </div>
    </>
  );
}
