import React from 'react'
import "./MainFooter.css"
import {Link} from "react-router-dom"
const MainFooter = () => {
    return (
        <footer className="footer d-none d-lg-block d-xl-block">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <div className="single-footer">
                           
                                <h5>Anjuli Commerce</h5>
                                <p className="info">Anjuli commerce has latest wardrobe for every girl. Good quality and trendy at reasonable cost at your doorstep.
                                Easy return policies and wide range to choose from.
                                </p>
                            </div>
                       
                    </div>
                    <div className="col-12 col-md-6 col-lg-2">
                        <div className="single-footer">
                            <h5>Info</h5>
                            <ul className="pl-0 mb-0">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-2">
                        <div className="single-footer">
                            <h5>Our Polices</h5>
                            <ul className="pl-0 mb-0">
                                <li>
                                    <Link to="/">FAQs</Link>
                                </li>
                                <li>
                                    <Link to="/">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="/">Refund Policy</Link>
                                </li>
                                <li>
                                    <Link to="/">Term of Service</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-2">
                        <div className="single-footer">
                            <h5>My Account</h5>
                            <ul className="pl-0 mb-0">
                                <li>
                                    <Link to="/">Shop</Link>
                                </li>
                                <li>
                                    <Link to="/">Orders</Link>
                                </li>
                                <li>
                                    <Link to="/">Shopping Cart</Link>
                                </li>
                                <li>
                                    <Link to="/">Wishlist</Link>
                                </li>
                            </ul>
                       </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="single-footer">
                           
                                <h5>Contact Us</h5>
                                <p>Available 24 hours
                                <br />
                                    <strong>+977-9812774872</strong>
                                </p>
                                <p>Galli No.1 Mahendranagar, Kanchanpur
                                 <br />
                                    <strong>parasbuda1234@gmail.com</strong>
                                </p>
                                <ul className="pro-social">
                                    <li>
                                        <a href="#" className="fab tw fa-twitter-square"/>
                                    </li>
                                    <li>
                                        <a href="#" className="fab wa fa-whatsapp"/>
                                    </li>
                                    <li>
                                        <a href="#" className="fab ig fa-instagram"/>
                                    </li>
                                    <li>
                                        <a href="#" className="fab fb fa-facebook-square"/>
                                    </li>
                               </ul>
                            </div>
                        </div>
                    </div>
                </div>
           
            <div className="container-fluid p-0">
                <div className="copyright-content ">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-12">
                                <div className="footer-info">
                                    &nbsp;2020 Anjuli Software Pvt Ltd.
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
       </footer>
    )
}

export default MainFooter
