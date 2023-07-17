import data from "../data/mahine_ka_kharcha.json"
import styles from "./Savings.module.css"
import { Link } from "react-router-dom";

export function Savings(){
    let debit = 0
    let credit = 0
    const expected_kharcha = 40000
    let bank_udhar=8439.52
    
    data.forEach((item)=>{
        if (item.type=="debit") debit = debit+item.amount
        else if (item.type=="credit") credit = credit+item.amount
    })
    return (
        <>
            <Link to={"/vite-khaatabook-app"} style={{textDecoration:"underline", color: "blue"}}>Home</Link>
            <div className={styles.container}>
                <div>
                    Credit: {credit}
                </div>
                <div>
                    Expected Kharcha: {expected_kharcha}
                </div>
                <div>
                    Kharcha: {debit}
                </div>
                <div>
                    Money in Hand: {expected_kharcha-debit}
                </div>
                <div>
                    Bank Udhaar: {bank_udhar}
                </div>
            </div>
        </>
    )
}