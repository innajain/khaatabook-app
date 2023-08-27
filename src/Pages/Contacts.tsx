import styles from "./Savings.module.css"
import { Link } from "react-router-dom";

export function Contacts(){
    return (
        <>
            <Link to={"/vite-khaatabook-app"} style={{textDecoration:"underline", color: "blue"}}>Home</Link>
            <div className={styles.container}>
                <div>Mummy 789654123</div>
                <div>Papa 123654789</div>
                <div>Inna 9268165849</div>
                <div>Siddhu 987456854div>
                <div>Babaji 7896548963</div>
                <div>Tauji 75263698541</div>
                <div>Sanyam Bhaiya 741258963</div>
                <div>Ishu 963258741</div>
                <div>Amma ##########</div>
            </div>
        </>
    )
}
