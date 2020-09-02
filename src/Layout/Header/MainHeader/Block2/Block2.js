import React from "react"
import "./Block2.css"
import { Link } from "react-router-dom"

const Block2 = () => {
  return (
    <React.Fragment>
      <div className="header-maxi">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-12 col-lg-2">
              <Link to="/" className="logo">
                <img
                  className="img-fluid"
                  src="assets/images/logo/logo.png"
                  alt="logo"
                  width="120px"
                />
              </Link>
            </div>
            <div className="col-12 col-sm-8">
              <form>
                <div className="searchbar-wrapper">
                  <div className="searchbar-select">
                    <div className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                      >
                        All Categories
                      </a>
                      <div className="dropdown-menu">
                        <Link to="/" className="dropdown-item">
                          T-shirts
                        </Link>
                        <Link to="/" className="dropdown-item">
                          Pants
                        </Link>
                        <Link to="/" className="dropdown-item">
                          Skirts
                        </Link>
                        <Link to="/" className="dropdown-item">
                          Bag
                        </Link>
                        <Link to="/" className="dropdown-item">
                          Shoes
                        </Link>
                        <Link to="/" className="dropdown-item">
                          Jacket
                        </Link>
                      </div>
                    </div>
                    <div className="filter">|</div>
                  </div>
                  <div className="searchfield-wrap">
                    <input type="search" placeholder="Search Products..." />
                    <button className="btn btn-secondary swipe-to-top">
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <ul className="header-icons">
                <li>
                  <Link to="/" className="btn">
                    <i className="far fa-heart" />
                    <span className="badge badge-secondary">2</span>
                  </Link>
                </li>
                <li className="dropdown">
                  {/* <button className="btn dropdown-toggle" type="button"> */}
                  <button className="btn " type="button">
                    <i className="fas fa-shopping-cart" />
                    <span className="badge badge-secondary">3</span>
                  </button>
                  {/* <div className="dropdown-menu">cart codes</div> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Block2
