import React from "react"
import "./Popular.css"
import Title from "../Title/Title"
import Slider from "react-slick"
import { Link } from "react-router-dom"
const Popular = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 2,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  }
  return (
    <React.Fragment>
      <section className="popular">
        <Title title="popular products" />
        <div className="container">
                  <Slider {...settings}>
                    
            <div className="card">
              <img
                src="assets/images/trending/clothing/trending1.jpg"
                className="card-img-top"
                alt="clothing"
              />
              <div className="card-body">
                <p className="card-text">Midi</p>
                <p className="price-discount">Rs: 1200</p>
                <p>
                  Rs: <strong>1000</strong>
                </p>
                <div className="pro-buttons">
                  <div className="pro-icons">
                    <div className="icon">
                      <i className="fa fa-heart" />
                    </div>
                    <div className="icon">
                      <i className="fa fa-eye" />
                    </div>
                    <Link to="/" className="icon">
                      <i className="fas fa-align-right" />
                    </Link>
                  </div>
                  <button type="button" className="btn btn-secondary btn-block">
                    Add to Cart
                  </button>
                </div>
                <div className="pro-tag bg-primary">NEW</div>
              </div>
            </div>
            <div className="card">
              <img
                src="assets/images/trending/shoes/shoes1.jpg"
                className="card-img-top"
                alt="clothing"
              />
              <div className="card-body">
                <p className="card-text">Midi</p>
                <p className="price-discount">Rs: 1200</p>
                <p>
                  Rs: <strong>1000</strong>
                </p>
                <div className="pro-buttons">
                  <div className="pro-icons">
                    <div className="icon">
                      <i className="fa fa-heart" />
                    </div>
                    <div className="icon">
                      <i className="fa fa-eye" />
                    </div>
                    <Link to="/" className="icon">
                      <i className="fas fa-align-right" />
                    </Link>
                  </div>
                  <button type="button" className="btn btn-secondary btn-block">
                    Add to Cart
                  </button>
                </div>
                <div className="pro-tag bg-primary">NEW</div>
              </div>
            </div>
            <div className="card">
              <img
                src="assets/images/trending/bags/handbag1.jpg"
                className="card-img-top"
                alt="clothing"
              />
              <div className="card-body">
                <p className="card-text">Midi</p>
                <p className="price-discount">Rs: 1200</p>
                <p>
                  Rs: <strong>1000</strong>
                </p>
                <div className="pro-buttons">
                  <div className="pro-icons">
                    <div className="icon">
                      <i className="fa fa-heart" />
                    </div>
                    <div className="icon">
                      <i className="fa fa-eye" />
                    </div>
                    <Link to="/" className="icon">
                      <i className="fas fa-align-right" />
                    </Link>
                  </div>
                  <button type="button" className="btn btn-secondary btn-block">
                    Add to Cart
                  </button>
                </div>
                <div className="pro-tag bg-primary">NEW</div>
              </div>
            </div>
            <div className="card">
              <img
                src="assets/images/trending/bags/handbag1.jpg"
                className="card-img-top"
                alt="clothing"
              />
              <div className="card-body">
                <p className="card-text">Midi</p>
                <p className="price-discount">Rs: 1200</p>
                <p>
                  Rs: <strong>1000</strong>
                </p>
                <div className="pro-buttons">
                  <div className="pro-icons">
                    <div className="icon">
                      <i className="fa fa-heart" />
                    </div>
                    <div className="icon">
                      <i className="fa fa-eye" />
                    </div>
                    <Link to="/" className="icon">
                      <i className="fas fa-align-right" />
                    </Link>
                  </div>
                  <button type="button" className="btn btn-secondary btn-block">
                    Add to Cart
                  </button>
                </div>
                <div className="pro-tag bg-primary">NEW</div>
              </div>
            </div>
            <div className="card">
              <img
                src="assets/images/trending/watch/watch1.jpg"
                className="card-img-top"
                alt="clothing"
              />
              <div className="card-body">
                <p className="card-text">Midi</p>
                <p className="price-discount">Rs: 1200</p>
                <p>
                  Rs: <strong>1000</strong>
                </p>
                <div className="pro-buttons">
                  <div className="pro-icons">
                    <div className="icon">
                      <i className="fa fa-heart" />
                    </div>
                    <div className="icon">
                      <i className="fa fa-eye" />
                    </div>
                    <Link to="/" className="icon">
                      <i className="fas fa-align-right" />
                    </Link>
                  </div>
                  <button type="button" className="btn btn-secondary btn-block">
                    Add to Cart
                  </button>
                </div>
                <div className="pro-tag bg-primary">NEW</div>
              </div>
            </div>
            <div className="card">
              <img
                src="assets/images/trending/bags/handbag1.jpg"
                className="card-img-top"
                alt="clothing"
              />
              <div className="card-body">
                <p className="card-text">Midi</p>
                <p className="price-discount">Rs: 1200</p>
                <p>
                  Rs: <strong>1000</strong>
                </p>
                <div className="pro-buttons">
                  <div className="pro-icons">
                    <div className="icon">
                      <i className="fa fa-heart" />
                    </div>
                    <div className="icon">
                      <i className="fa fa-eye" />
                    </div>
                    <Link to="/" className="icon">
                      <i className="fas fa-align-right" />
                    </Link>
                  </div>
                  <button type="button" className="btn btn-secondary btn-block">
                    Add to Cart
                  </button>
                </div>
                <div className="pro-tag bg-primary">NEW</div>
              </div>
            </div>
            <div className="card">
              <img
                src="assets/images/trending/watch/watch1.jpg"
                className="card-img-top"
                alt="clothing"
              />
              <div className="card-body">
                <p className="card-text">Midi</p>
                <p className="price-discount">Rs: 1200</p>
                <p>
                  Rs: <strong>1000</strong>
                </p>
                <div className="pro-buttons">
                  <div className="pro-icons">
                    <div className="icon">
                      <i className="fa fa-heart" />
                    </div>
                    <div className="icon">
                      <i className="fa fa-eye" />
                    </div>
                    <Link to="/" className="icon">
                      <i className="fas fa-align-right" />
                    </Link>
                  </div>
                  <button type="button" className="btn btn-secondary btn-block">
                    Add to Cart
                  </button>
                </div>
                <div className="pro-tag bg-primary">NEW</div>
              </div>
            </div>
            <div className="card">
              <img
                src="assets/images/trending/watch/watch1.jpg"
                className="card-img-top"
                alt="clothing"
              />
              <div className="card-body">
                <p className="card-text">Midi</p>
                <p className="price-discount">Rs: 1200</p>
                <p>
                  Rs: <strong>1000</strong>
                </p>
                <div className="pro-buttons">
                  <div className="pro-icons">
                    <div className="icon">
                      <i className="fa fa-heart" />
                    </div>
                    <div className="icon">
                      <i className="fa fa-eye" />
                    </div>
                    <Link to="/" className="icon">
                      <i className="fas fa-align-right" />
                    </Link>
                  </div>
                  <button type="button" className="btn btn-secondary btn-block">
                    Add to Cart
                  </button>
                </div>
                <div className="pro-tag bg-primary">NEW</div>
              </div>
            </div>
           
          </Slider>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Popular
