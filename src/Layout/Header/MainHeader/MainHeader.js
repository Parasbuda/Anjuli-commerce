import React from "react"
import Offerbar from "../../../Components/Offerbar/Offerbar"
import Block1 from "./Block1/Block1"
import Block2 from "./Block2/Block2"
import  NavbarLink from "./Block3/NavbarLink"
const MainHeader = () => {
  return (
    <header>
      <Offerbar />
      <Block1 />
      <Block2 />
     <NavbarLink/>
    </header>
  )
}

export default MainHeader
