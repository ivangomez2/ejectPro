import React, { useEffect, useState } from 'react'
import chicaSue from "../../imgs/sueñaChica.png"
import Methods from './Methods'
import descuMenu from "../../imgs/descuMenu.png";
import exploMenu from "../../imgs/exploMenu.png";
import sueMenu from "../../imgs/sueMenu.png";
import videoDes from "../../imgs/videoDes.png";
import collage from "../../imgs/Collage.png"
import bannerDesc from "../../imgs/bannerDescubre.png"
import bannerExp from "../../imgs/bannerExplora.png"
import img from "../../imgs/Explora.png";
import bannerSue from "../../imgs/bannerSueña.png"

import videoEx from "../../imgs/videoEx.png";
import MethodsList from './MethodsListMenu';
import MethodsListMenu from './MethodsListMenu';
const MethodListContainer = () => {
  
  const [products,setProductos] = useState([])

  const prod = [{
    id:1,
    color:"Workshop técnicos artísticos",
    descColor:"con la actualizacion de coleccion de diseño capilar en formatos de 8 horas permitiendo así ejecutar de forma clara y segura el metodo",
    img: sueMenu,
    videos: chicaSue,
    colorLogo:"Ejet Proyect",
    nombre:"Integración sueña",
    
    objetivoColor:"El objetivo del circuito Integración Sueña es ",
    objetivo:"Integrar al profesional mostrando las herramientas intelectuales y destrezas tecnicas que permite realizar el funcionamiento directo , claro y seguro del método",
    detailTitle:"Más detalles",
    detailSubTitle:"WorkShop de 8 horas por área:",
    detail1:"Trabajo grupal",
    detail2:"Posición tecnico corporal",
    detail3:"Manejo de herramientas",
    Categoria:"Entrenamiento",
    banners: bannerSue,
    imgCat:{img},
    collage:collage
    
  },{
    id:2,
    color:"Clinicas técnico artísticas",
    descColor:"para grupos específicos y personalizados realizadas en salones de belleza o centros educativos programados en tres periodos de 8 horas por área",
    img: descuMenu,
    nombre:"Formación descubre",
    objetivoColor:"El objetivo del circuito Formación descubre es ",
    objetivo:"Formar diseñadores capilares en las áreas corte de dama y peinado como así también corte de caballero, barbería, colorimetría y tratamientos modificadores .",
    videos: videoDes,
    Categoria:"Entrenamiento",
   detail1:"36 clases por área",
   detail2:"12 clases teoricas",
   detail3:"12 clases prácticas",

    collage:collage,
    banners:bannerDesc,
  },{
    id:3,
    img:exploMenu,
    nombre:"Nivelación explora",
    color:"Capacitación integral",
    descColor:" en diseño capilar en las áreas de corte de dama y peinado corte de caballero y barbería , colorimetría y tratamientos modificadores.",
    descripcion:"texto,texto,texto",
    objetivoColor:"El objetivo del circuito Nivelación explora es ",
    objetivo:"adaptar y unificar técnicamente el funcionamiento del grupo de trabajo en la venta de servicios de belleza en diseño capilar.",
    videos:videoEx,
    Categoria:"Entrenamiento",
    detail1:"Diseño/Cortes",
   detail2:"Colorimetría",
   detail3:"Tratamientos modificadores",
    collage:collage,
    banners:bannerExp,
  }]




  

   
  useEffect(() => {
    
    const prom = new Promise((resolve,rejected)=>{
      return resolve(prod)
    }).then(res =>{
      setProductos(res)
      console.log(products);
    })
  }, [])
  
  
  
   console.log(products);
    return (
    <div>
      
    <Methods productos={products} />
    </div>
  )
}

export default MethodListContainer