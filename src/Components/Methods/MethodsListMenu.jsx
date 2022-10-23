import React from 'react'
import barco from "../../imgs/velero.png";
import sevilla from "../../imgs/sevilla.png"
import banner from "../../imgs/bannerMenu.png"
import ejetRedondo from "../../imgs/logotype.jpg"
import "./Methods.css";
const MethodsListMenu = ({productos}) => {

    console.log(productos);
  return (
    <div>  <div className="methods__marcaCont">
    <hr className="methods__marcaContHr" />
    <p style={{color:"rgb(161, 161, 161)"}}>
      En veinte años lamentaras mas las cosas que no hiciste que las
      que hiciste, así que suelta amarras,abandona el puerto seguro,
      alza los vientos en tus velas.{" "}
      <span style={{ color: "red", fontWeight: "600" }}>
        SUEÑA EXPLORA DESCUBRE
      </span>
    </p>

    <img className="methods__marcaContShip" src={barco} alt="" />
    <hr className="methods__marcaContHr" />
    <img src={ejetRedondo} style={{marginRight:"15px"}} width={"90px"} alt="" />
    <img width={"50px"} src={sevilla} alt="" />

<img src={banner} className="methods__listmenuBanner" alt="" />
  </div>
  </div>
  )
}

export default MethodsListMenu