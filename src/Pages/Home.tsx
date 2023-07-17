import { Button } from "../Components/Button";

export function Home() {
  return (
    <>
    <div className="pagetitle" style={{fontFamily: "sans-serif", display:"flex", justifyContent: "center", fontSize: "4rem", marginTop: "40px"}}>Home</div>
      <div className="buttons" style={{display:"flex", justifyContent:"center", flexWrap:"wrap", gap: "10px", marginTop: "20px"}}>
          <Button link="./khaatabook-app/contacts" icon="contacts" title="Contacts" color="blue"/>
          <Button link="./khaatabook-app/your-account" icon="account_balance_wallet" title="Your Account" color="purple"/>
          <Button link="./khaatabook-app/bank-account" icon="account_balance" title="Bank Account" color="orange"/>
          <Button link="./khaatabook-app/savings" icon="currency_rupee" title="Savings" color="green"/>
      </div>
    </>
  );
}
