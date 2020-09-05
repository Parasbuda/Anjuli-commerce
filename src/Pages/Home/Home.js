import React from "react"
import MainHeader from "../../Layout/Header/MainHeader/MainHeader"
import MainSlider from "../../Components/MainSlider/MainSlider"
import Services from "../../Components/Services/Services"
import Category from "../../Components/Category/Category"
import Trending from "../../Components/Trending/Trending"
import Popular from "../../Components/Popular/Popular"

const Home = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <MainSlider />
      <Services />
      <Category />
      <Trending />
      <Popular />
    </React.Fragment>
  )
}

export default Home
