import React from "react"
import Offerbar from "../../../Components/Offerbar/Offerbar"
import Block1 from "./Block1/Block1"
import Block2 from "./Block2/Block2"
import Block3 from "./Block3/Block3"
const MainHeader = () => {
  return (
    <header>
      <Offerbar />
      <Block1 />
      <Block2 />
      <Block3 />
    </header>
  )
}

export default MainHeader
