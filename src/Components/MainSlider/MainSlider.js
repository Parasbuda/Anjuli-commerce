import React from "react"
import "./MainSlider.css"
import Slider from "react-slick"

const MainSlider = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinte: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    pauseOnHover: false,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Slider {...settings}>
      <div className="slide item">
        <div className="img-fill">
          <div
            className="info"
            style={{
              backgroundImage: "url(assets/images/slider/slider1.jpg)",
              height: 500,
            }}
          >
            <div className="container">
              <div className="info-center">
                <h5>Popular</h5>
                <h2>Trending Gown</h2>
                <button className="btn btn-secondary mt-3">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide item">
        <div className="img-fill">
          <div
            className="info"
            style={{
              backgroundImage: "url(assets/images/slider/slider2.png)",
              height: 500,
            }}
          >
            <div className="container">
              <div className="info-center">
                <h5>Popular</h5>
                <h2>Trending Gown</h2>
                <button className="btn btn-secondary mt-3">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <div className="slide item">
        <div className="img-fill">
          <div
            className="info"
            style={{
              backgroundImage: "url(assets/images/slider/new.jpg)",
              height: 500,
            }}
          >
            <div className="container">
              <div className="info-center">
                <h5>Popular</h5>
                <h2>Trending Gown</h2>
                <button className="btn btn-secondary mt-3">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
          </div>
     
    </Slider>
  )
}

export default MainSlider
