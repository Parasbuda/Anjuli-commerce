import React from "react"
import MainHeader from "../../Layout/Header/MainHeader/MainHeader"
import MainSlider from "../../Components/MainSlider/MainSlider"
import Services from "../../Components/Services/Services"

const Home = () => {
 
  return (
    <React.Fragment>
      <MainHeader />
          <MainSlider />
          <Services/>
    </React.Fragment>
  )
}

export default Home
