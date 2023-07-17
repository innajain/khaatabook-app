import { TransactionTile } from "../Components/TransactionTile"
import data from "../data/mahine_ka_kharcha.json"
import { Link } from "react-router-dom";

export function YourAccount(){
    return (
        <>
            <Link to={"/vite-khaatabook-app"} style={{textDecoration:"underline", color: "blue"}}>Home</Link>
            <div className="container" style={{display:"flex", justifyContent:"center"}}>
                <div className="credit" style={{display:"flex", flexDirection:"column", alignItems:"center", width: "450%"}}>
                    <div className="title" style={{fontFamily: "sans-serif", fontSize: "2rem" , margin: "15px"}}>
                        Credit
                    </div>
                    {data.map((item)=>item.type=="credit" && <TransactionTile item={item}></TransactionTile>)}
                </div>
                <div className="debit" style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center", width: "450%"}}>
                    <div className="title" style={{fontFamily: "sans-serif", fontSize: "2rem" , margin: "15px"}}>
                        Debit
                    </div>
                    {data.map((item)=>item.type=="debit" && <TransactionTile item={item}></TransactionTile>)}
                </div>
            </div>
        </>
    )
}