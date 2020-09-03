import React from "react"
import "./Services.css"
const Services = () => {
  return (
    <React.Fragment>
      <section className="service">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-3">
              <div className="info-box">
                <i className="fas fa-truck icon" />
                <div className="block">
                  <h4 className="title">Free Shipping</h4>
                  <p>We provide free Shipping for all orders all over Nepal.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
              <div className="info-box">
                <i className="fas fa-shield-alt icon" />
                <div className="block">
                  <h4 className="title">Protection Cover</h4>
                  <p>We provide free protection cover to all your products.</p>
                </div>
              </div>
           
              </div>
              <div className="col-12 col-md-6 col-xl-3">
              <div className="info-box">
                <i className="fas fa-gift icon" />
                <div className="block">
                  <h4 className="title">High-Quality</h4>
                  <p>We provide high quality and original products.</p>
                </div>
              </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3">
              <div className="info-box">
                              <i className="fab fa-cc-visa icon"  />
                <div className="block">
                  <h4 className="title">Payment</h4>
                  <p>We provide Online Payment as well as Cash on Delivery.</p>
                </div>
              </div>
            </div>
            </div>
          </div>
      </section>
    </React.Fragment>
  )
}

export default Services
