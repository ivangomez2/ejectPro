import React, { useState, useContext } from 'react'
import entrenamiento from "../../imgs/entrenamiento.png"
import asesoramiento from "../../imgs/Asesoramiento.png"
import Mantenimiento from "../../imgs/mantenimiento.png"

import "./ButtonsIntro.css"
import { GlobalContexts } from "../../Context/GlobalContext";

const ButtonsIntro = ({productos}) => {


  const {catFilter, setCatFilter,category, setCategory} = useContext(GlobalContexts);
  
   
console.log(category);

  return (
  <>
  
  <img className='buttonIntroButton'  onClick={ ()=>setCategory("Entrenamiento")} src={entrenamiento}  alt="" />
  <img className='buttonIntroButton' onClick={ ()=>setCategory("Asesoramiento")} src={asesoramiento} key={2} alt="" />
  <img className='buttonIntroButton' onClick={ ()=>setCategory("Mantenimiento")} src={Mantenimiento} key={3} alt="" />
  </>
  )
}

export default ButtonsIntro