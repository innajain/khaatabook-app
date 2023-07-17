import { Link } from "react-router-dom";
import styles from "./Savings.module.css"
export function BankAccount(){
    return (
        <>
        <Link to={"/vite-khaatabook-app"} style={{textDecoration:"underline", color: "blue"}}>Home</Link>
        <div className={styles.container}></div>
            Bank Account
        </>
    )
}