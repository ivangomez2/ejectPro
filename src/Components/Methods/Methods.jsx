import React, { useContext, useEffect, useState } from "react";

import "./Methods.css";
import sueñaRedondo from "../../imgs/sueñaRedondo.png"
import descubreRedondo from "../../imgs/descubreRedondo.png"
import exploraRedondo from "../../imgs/exploraRedondo.png"
import Carrousel from "../Carrousel/Carrousel";

import one from "../../imgs/1.png"
import two from "../../imgs/2.png"
import three from "../../imgs/3.png"
import MethodsListMenu from "./MethodsListMenu";
import ButtonsIntro from "../ButtonsIntro/ButtonsIntro";
import { GlobalContexts } from "../../Context/GlobalContext";
const Methods = ({ productos }) => {
  const [prod, setProd] = useState([]);
  const {catFilter, setCatFilter,category, setCategory} = useContext(GlobalContexts);
  
  console.log(category);

  const filtrado = productos.filter((item) => item.Categoria == category);
  useEffect(() => {
    setCatFilter(filtrado);
    console.log(catFilter);
  }, [category]);

  return (
    <>
      <div className="methods__Cont">
          <ButtonsIntro productos={productos} />
      </div>
      
      {catFilter.length > 0 ? (
        <div className="d-flex methods__menuCont">
          <div className="menu">
            <h4>{prod.Categoria}</h4>
            {catFilter.map((item) => {
              return (
                <>
                  <img
                    onClick={() => {
                      setProd(item);
                    }}
                    style={{ width: "150px" }}
                    className="menu__img"
                    src={item.img}
                  />
                </>
              );
            })}

          <MethodsListMenu productos={productos} />
            
          </div>

          {prod.length === 0 ? (
            <div className="w-100">
              {" "}
              <Carrousel />{" "}
            </div>
          ) : (
            <div className="methods__presentacionCont">
                   <img
                    className="mt-3 methods__bannerIntro"
                    src={prod.banners}
                    maxWidth={800}
                  />

                 <h5 style={{color:"#A19A97",padding:"8px",backgroundColor:"#09090A"}}>Sistema regulador internacional de calidad educativa</h5>
               
          
               <div className="methods__buttonMethod">
                <img src={sueñaRedondo} alt="" />
                <img src={descubreRedondo} alt="" />
                <img  src={exploraRedondo} alt="" />
               <hr className="methods__hr"  />
               </div>

                  
                 <div className="methods__titlePhoto">
               
                <div className="methods__description">
                 
                  <h3 style={{color:"#B2ACA3", fontFamily:"monospace"}}>Descripción</h3>
                  <h6 style={{marginTop:"20px",marginRight:"20px",color: "rgb(161, 161, 161)",marginBottom:"60px"}} >
                    <span style={{color:"red"}}>
                      {prod.color}
                    </span>{" "}
                    {prod.descColor}{" "}
                    <span style={{ color: "red" }}> {prod.colorLogo}</span>
                  </h6>

                  <div className="methods__objetivos">
                  
                  <h3 style={{color:"#B2ACA3",fontFamily:"monospace"}}>Objetivos</h3>
                  <h6 style={{marginTop:"20px",color:  "rgb(161, 161, 161)"}} >
                      <span style={{color:"red"}}> {prod.objetivoColor} </span>
                      {prod.objetivo}
                   
                 
                    <span style={{color: "red" ,fontFamily:"monospace"}}> {prod.colorLogo}</span>
                  
                  </h6>
                  
                  </div>
                  
                  </div>
                 
                 
                  <img
                    className=" methods__bannerIntro"
                    src={prod.collage}
                   
                  />
             </div>
             <div className="methods__detailCont">
             <h3 style={{fontFamily:"monospace"}}>Detalles</h3>
             <div className="methods__detailContDetail">
              <div>
              <img style={{bottom:"94px",right:"320px"}} src={one} alt="" />
              <h5>{prod.detail1}</h5>
              </div>
              <div>
              <img style={{bottom:"61px",right:"240px"}} src={two} alt="" />
              <h5>{prod.detail2}</h5>
              </div>
              <div>
              <img style={{bottom:"28px",right:"370px"}} src={three} alt="" />
              <h5>{prod.detail3}</h5>
              </div>
              


             </div>
             </div>
              
 
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Methods;
