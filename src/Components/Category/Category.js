import React from "react"
import "./Category.css"
import Title from "../Title/Title"
const Category = () => {
  return (
    <section className="category">
      <Title title=" Shop By Categories"/>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col mb-4">
            <div className="card">
              <img
                src="assets/images/category/clothing.png"
                className="card-img-top"
                alt="clothing"
              />
              <div className="card-body">
                <p className="card-text">clothing</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src="assets/images/category/shoes.png"
                className="card-img-top"
                alt="shoes"
              />
              <div className="card-body">
                <p className="card-text">shoes</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src="assets/images/category/handbags.png"
                className="card-img-top"
                alt="handbags"
              />
              <div className="card-body">
                <p className="card-text">handbags</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src="assets/images/category/watches.png"
                className="card-img-top"
                alt="watches"
              />
              <div className="card-body">
                <p className="card-text">watches</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src="assets/images/category/glasses.png"
                className="card-img-top"
                alt="glasses"
              />
              <div className="card-body">
                <p className="card-text">glasses</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src="assets/images/category/hats.png"
                className="card-img-top"
                alt="hats"
              />
              <div className="card-body">
                <p className="card-text">hats</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category
