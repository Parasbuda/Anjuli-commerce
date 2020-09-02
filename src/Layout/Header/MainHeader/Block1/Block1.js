import React from 'react'
import "./Block1.css"
import { Link } from "react-router-dom"
const Block1 = () => {
    return (
        <React.Fragment>
             <div className="header-mini">
        <div className="container ">
          <div className="row align-items-center ">
            <div className="col-12 col-md-4">
              <h4>
                Call us : <strong> +977-9812774872</strong>
              </h4>
            </div>
            <div className="col-12 col-md-8">
              <div className="dropdown-wrapper">
                <div className="dropdown ">
                  <a href="#" className="dropdown-toggle">
                    My Account
                  </a>
                  <div className="dropdown-menu">
                    <Link to="/" className="dropdown-item">
                      Profile
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Wishlist
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Compare
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Orders
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Shipping Address
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       </React.Fragment>
    )
}

export default Block1
