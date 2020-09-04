import React from "react"
import Title from "../Title/Title"
import { Link } from "react-router-dom"
import "./Trending.css"
const Trending = () => {
  return (
    <section className="trending">
      <Title title="trending products" />
      <div className="sub-title">
        <h6>Clothing</h6>
        <div className="marked" />
        <h6>Shoes</h6>
        <div className="marked" />
        <h6>Handbags</h6>
        <div className="marked" />
        <h6>Glasses</h6>
        <div className="marked" />
        <h6>Watches</h6>
        <div className="marked" />
        <h6>Jwellery</h6>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-4">
          <div className="col mb-4">
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
                {/* <div className="pro-tag bg-primary">NEW</div> */}
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card">
              <img
                src="assets/images/trending/clothing/trending2.jpg"
                className="card-img-top"
                alt="clothing"
              />
              <div className="card-body">
                <p className="card-text">Bodycon</p>
                <p className="price-discount">Rs: 1200</p>
                <p>
                  Rs: <strong>1200</strong>
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
                {/* <div className="pro-tag bg-primary">NEW</div> */}
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src="assets/images/trending/clothing/trending3.jpg"
                className="card-img-top"
                alt="clothing"
              />
              <div className="card-body">
                <p className="card-text">A-Line</p>
                <p className="price-discount">Rs: 1200</p>
                <p>
                  Rs: <strong>1500</strong>
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
                {/* <div className="pro-tag bg-primary">NEW</div> */}
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src="assets/images/trending/clothing/trending4.jpg"
                className="card-img-top"
                alt="clothing"
              />
              <div className="card-body">
                <p className="card-text">Maxi</p>
                <p className="price-discount">Rs: 1200</p>
                <p>
                  Rs: <strong>1600</strong>
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
                {/* <div className="pro-tag bg-primary">NEW</div> */}
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src="assets/images/trending/clothing/trending5.jpeg"
                className="card-img-top"
                alt="clothing"
              />
              <div className="card-body">
                <p className="card-text">Mini</p>
                <p className="price-discount">Rs: 1200</p>
                <p>
                  Rs: <strong>1200</strong>
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
                {/* <div className="pro-tag bg-primary">NEW</div> */}
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src="assets/images/trending/clothing/trending6.jpeg"
                className="card-img-top"
                alt="clothing"
              />
              <div className="card-body">
                <p className="card-text">Wrap</p>
                <p className="price-discount">Rs: 1200</p>
                <p>
                  Rs: <strong>1500</strong>
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
                {/* <div className="pro-tag bg-primary">NEW</div> */}
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src="assets/images/trending/clothing/trending7.jpg"
                className="card-img-top"
                alt="clothing"
              />
              <div className="card-body">
                <p className="card-text">Halter</p>
                <p className="price-discount">Rs: 1200</p>
                <p>
                  Rs: <strong>1100</strong>
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
                {/* <div className="pro-tag bg-primary">NEW</div> */}
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src="assets/images/trending/clothing/trending8.jpg"
                className="card-img-top"
                alt="clothing"
              />
              <div className="card-body">
                <p className="card-text">Sheath</p>
                <p className="price-discount">Rs: 1200</p>
                <p>
                  Rs: <strong>1700</strong>
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
                {/* <div className="pro-tag bg-primary">NEW</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trending
