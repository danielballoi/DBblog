import React, {useState} from 'react'
import './style.css'
import {sliderData} from './sliderData'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft } from 'react-icons/fa'



const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current +1)
};

const prevSlide = () =>{
    setCurrent(current === 0 ? length -1 : current -1)
}


if(!Array.isArray(slides) || slides.length <= 0){
    return null
}

  return (
  <section className='slider'>
      <FaArrowAltCircleRight className='right-arrow' onClick={prevSlide}/>
      <FaArrowAltCircleLeft className='left-arrow' onClick={nextSlide} />
             {sliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && ( <img src={slide.image} alt='newspaper img' className='image'></img>)}
                    </div>
                )
               
            
     })}
     </section>
 
  )
  }
export default Slider
