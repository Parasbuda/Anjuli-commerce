import React from "react"
import Title from "../Title/Title"
import { Link } from "react-router-dom"
import "./Trending.css"
const Trending = () => {
  return (
    <React.Fragment>
      <section className="trending">
        <Title title="trending products" />
        {/* <div className="sub-title">
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
      </div> */}
        <div className="nav" role="tablist" id="tabCarousel">
          <a
            className="nav-link  active"
            data-toggle="tab"
            href="#clothing"
            role="tab"
            aria-controls="clothing"
            aria-selected="true"
          >
            Clothing
          </a>
          <a
            className="nav-link"
            data-toggle="tab"
            href="#shoes"
            role="tab"
            aria-controls="shoes"
            aria-selected="false"
          >
            Shoes
          </a>
          <a
            className="nav-link"
            data-toggle="tab"
            href="#handbags"
            role="tab"
            aria-controls="handbags"
            aria-selected="false"
          >
            Handbags
          </a>
          <a
            className="nav-link"
            data-toggle="tab"
            href="#watch"
            role="tab"
            aria-controls="watch"
            aria-selected="false"
          >
            Watch
          </a>
          <a
            className="nav-link"
            data-toggle="tab"
            href="#glasses"
            role="tab"
            aria-controls="glasses"
            aria-selected="false"
          >
            Glasses
          </a>
          <a
            className="nav-link"
            data-toggle="tab"
            href="#jwellery"
            role="tab"
            aria-controls="jwellery"
            aria-selected="false"
          >
            Jwellery
          </a>
        </div>
        <div className="tab-content">
          {/* clothing */}
          <div
            className="tab-pane  fade active show "
            id="clothing"
            role="tabpanel"
          >
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* shoes */}
          <div className="tab-pane fade  " id="shoes" role="tabpanel">
            <div className="container">
              <div className="row row-cols-1 row-cols-md-4">
                <div className="col mb-4">
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
                    </div>
                  </div>
                </div>

                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="assets/images/trending/shoes/shoes2.jpg"
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="assets/images/trending/shoes/shoes3.jpeg"
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="assets/images/trending/shoes/shoes4.jpg"
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="assets/images/trending/shoes/shoes5.jpg"
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="assets/images/trending/shoes/shoes6.jpg"
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="assets/images/trending/shoes/shoes7.jpg"
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="assets/images/trending/shoes/shoes8.jpg"
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
             
              {/* handbag */}
              <div className="tab-pane fade  " id="handbags" role="tabpanel">
                  
            <div className="container">
              <div className="row row-cols-1 row-cols-md-4">
                <div className="col mb-4">
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
                    </div>
                  </div>
                </div>

                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="assets/images/trending/bags/handbag2.jpg"
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="assets/images/trending/bags/handbag3.jpg"
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="assets/images/trending/bags/handbag4.jpg"
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="assets/images/trending/bags/handbag5.jpg"
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="assets/images/trending/bags/handbag6.jpg"
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="assets/images/trending/bags/handbag7.jpg"
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="assets/images/trending/bags/handbag8.jpg"
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
                        <button
                          type="button"
                          className="btn btn-secondary btn-block"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="pro-tag bg-primary">NEW</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                  {/* watches */}
                  <div className="tab-pane fade  " id="watch" role="tabpanel">
                  
                  <div className="container">
                    <div className="row row-cols-1 row-cols-md-4">
                      <div className="col mb-4">
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
      
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/watch/watch2.jpg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/watch/watch3.jpg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/watch/watch4.jpg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/watch/watch5.jpg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/watch/watch6.jpeg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/watch/watch7.jpg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/watch/watch8.jpg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  {/* glasses */}
                  <div className="tab-pane fade  " id="glasses" role="tabpanel">
                  
                  <div className="container">
                    <div className="row row-cols-1 row-cols-md-4">
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/glasses/glasses.jpg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
      
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/glasses/glass2.jpg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/glasses/glass3.jpg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/glasses/glass4.jpg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/glasses/glass5.jpg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/glasses/glass6.jpg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/glasses/glass7.jpg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/glasses/glass8.jpg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  {/* jwellery */}
                  <div className="tab-pane fade  " id="jwellery" role="tabpanel">
                  
                  <div className="container">
                    <div className="row row-cols-1 row-cols-md-4">
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/jwellery/jwellery1.jpg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
      
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/jwellery/jwellery2.jpeg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/jwellery/jwellery3.jpg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/jwellery/jwellery4.jpg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/jwellery/jwellery5.jpg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/jwellery/jwellery6.jpg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/jwellery/jwellery2.jpeg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
                      <div className="col mb-4">
                        <div className="card">
                          <img
                            src="assets/images/trending/jwellery/jwellery8.jpg"
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
                              <button
                                type="button"
                                className="btn btn-secondary btn-block"
                              >
                                Add to Cart
                              </button>
                            </div>
                            <div className="pro-tag bg-primary">NEW</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
      </section>
    </React.Fragment>
  )
}

export default Trending
