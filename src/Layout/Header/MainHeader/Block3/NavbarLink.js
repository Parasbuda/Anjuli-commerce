import React from "react"
import "./NavbarLink.css"
import {Link} from "react-router-dom"
const NavbarLink = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-nav-bar">
        <div className="navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown mega-dropdown">
              <Link className="nav-link dropdown-toggle" to="#">
                MEGA MENU
                <span className="badge badge-secondary">NEW</span>
              </Link>
              <div className="dropdown-menu mega-dropdown-menu row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-md-2">
                      <ul>
                        <li className="dropdown-header">Categories</li>
                        <li>
                          <Link to="/" className="dropdown-item">
                            T-shirts
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="dropdown-item">
                            Pants
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="dropdown-item">
                            Skirts
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="dropdown-item">
                            Bag
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="dropdown-item">
                            Shoes
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="dropdown-item">
                            Jacket
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-10">
                      <div className="row">
                        <div className="col-6 col-lg-4">
                          <div className="product">
                            <article>
                              <div className="pro-thumb">
                                <Link to="/">
                                  <span className="pro-image">
                                    <img
                                      className="img-fluid"
                                      src="assets/images/megamenu/1piece.jpeg"
                                      alt="dress1"
                                    />
                                  </span>
                                </Link>
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
                              <div className="pro-description">
                                <h2 className="pro-title">
                                  <Link to="/">One Piece</Link>
                                </h2>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className="col-6 col-lg-4">
                          <div className="product">
                            <article>
                              <div className="pro-thumb">
                                <Link to="/">
                                  <span className="pro-image">
                                    <img
                                     
                                      src="assets/images/megamenu/dress1.jpeg"
                                      alt="dress1"
                                      height="380px"
                                      width="300px"
                                    />
                                  </span>
                                </Link>
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
                              <div className="pro-description">
                                <h2 className="pro-title">
                                  <Link to="/">One Piece</Link>
                                </h2>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className="col-6 col-lg-4">
                          <div className="product">
                            <article>
                              <div className="pro-thumb">
                                <Link to="/">
                                  <span className="pro-image">
                                    <img
                                    
                                      src="assets/images/megamenu/dress2.jpg"
                                      alt="dress1"
                                      height="380px"
                                      width="300px"
                                    
                                    />
                                  </span>
                                </Link>
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
                              <div className="pro-description">
                                <h2 className="pro-title">
                                  <Link to="/" >One Piece</Link>
                                </h2>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default NavbarLink
