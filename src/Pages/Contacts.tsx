import styles from "./Savings.module.css"
import { Link } from "react-router-dom";

export function Contacts(){
    return (
        <>
            <Link to={"/vite-khaatabook-app"} style={{textDecoration:"underline", color: "blue"}}>Home</Link>
            <div className={styles.container}>
                <div>Mummy 8010032509</div>
                <div>Papa 9899945802</div>
                <div>Inna 9268165849</div>
                <div>Siddhu ##########</div>
                <div>Babaji 9313121618</div>
                <div>Tauji 7042099313</div>
                <div>Sanyam Bhaiya 9654553982</div>
                <div>Ishu 9953693307</div>
                <div>Amma ##########</div>
            </div>
        </>
    )
}