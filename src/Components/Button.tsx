import { Link } from "react-router-dom";
import "./Button.css";
type ButtonProps = {
  link: string;
  icon: string;
  title: string;
  color: string;
};

export function Button({ link = "", icon = "", title="", color=""}: ButtonProps) {
  return (
    <>
      <Link to={"/" + link}>
        <button style={{borderColor:color, "--given-color":color}as React.CSSProperties}>
          <span className="material-symbols-outlined icon">{icon}</span>
          <div className="title">{title}</div>
        </button>
      </Link>
    </>
  );
}
