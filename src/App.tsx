import {Routes, Route} from "react-router-dom"
import { Home } from "./Pages/Home"
import { Contacts } from "./Pages/Contacts"
import { YourAccount } from "./Pages/YourAccount"
import { BankAccount } from "./Pages/BankAccount"
import { Savings } from "./Pages/Savings"
// import "./App.css"


function App() {
  return (
    <>
      <div className="container" style={{position:"relative"}}>
        <Routes>
          <Route path="/vite-khaatabook-app" element={<Home/>}></Route>
          <Route path="/vite-khaatabook-app/contacts" element={<Contacts/>}></Route>
          <Route path="/vite-khaatabook-app/your-account" element={<YourAccount/>}></Route>
          <Route path="/vite-khaatabook-app/bank-account" element={<BankAccount/>}></Route>
          <Route path="/vite-khaatabook-app/savings" element={<Savings/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
