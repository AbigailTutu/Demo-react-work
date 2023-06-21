import { BrowserRouter } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Routings from "./Component/Routings"
import Footer from "./Component/Footer"


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routings/>
    <Footer/> 
    </BrowserRouter>
  )
}

export default App
