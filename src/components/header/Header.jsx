import { useState } from "react";
import "./header.css";
import HeaderMiddle from "./HeaderMiddle"
import HeaderTop from "./HeaderTop"
import { Navbar } from "./Navbar"

const Header = () => {
  const [toggle , setToggle] = useState(false)
 return (
 <header>
  <HeaderTop toggle={toggle} setToggle={setToggle}/>
  <HeaderMiddle />
  <Navbar toggle={toggle} setToggle={setToggle}/>
 </header>
 )
}

export default Header