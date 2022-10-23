import React from 'react'
import sue from "../../imgs/bannerSue.png"
import exp from "../../imgs/bannerExplo.png"
import des from "../../imgs/bannerDescu.png"
import { Carousel } from 'react-bootstrap'
import "./Carrousell.css"
const Carrousel = () => {
  return (
    <div>
    <Carousel  controls={false} className='carousel__cont' fade={true}  indicators={false} interval={2000}>  
      <Carousel.Item className='wdt'>
        <img
          className="d-block carousel__imgs"
          src={exp}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel__imgs"
          src={des}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel__imgs"
          src={sue}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default Carrousel
