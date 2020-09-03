import React from "react"
import MainHeader from "../../Layout/Header/MainHeader/MainHeader"
import MainSlider from "../../Components/MainSlider/MainSlider"
import Services from "../../Components/Services/Services"
import Category from "../../Components/Category/Category"
const Home = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <MainSlider />
      <Services />
      <Category />
    </React.Fragment>
  )
}

export default Home
