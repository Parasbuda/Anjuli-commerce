import React from "react"
import "./Offerbar.css"
import { Link } from "react-router-dom"

const Offerbar = () => {
  return (
    <div className="offer-container">
      <h1 className="offer-text">
        Get <span className="highlight">upto 50% discount</span> on your 1st
        order <span className="highlightbar"> <Link to="/">More details!!!</Link></span>
      </h1>
    </div>
  )
}

export default Offerbar
