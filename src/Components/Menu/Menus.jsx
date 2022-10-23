import React from "react";
import "./Menu.css";
import facebook from "../../imgs/facebookIcon.png"
import insta from "../../imgs/instaIcon.png"
import whatsapp from "../../imgs/whatsapp.png";
import { useState } from "react";
const Menus = () => {
  const [menu, setMenu] = useState(false);

  const menuActive = () => {
    setMenu(!menu);
  };

  return (
    <section class="top-nav">
     <div className="menu__cont">
      <div className="menu__burguer"
        onClick={() => {
          menuActive();
        }}
      >
        <div className="menus__bar menus__fixPos"></div>
        <div className="menus__bar"></div>
        <div className="menus__bar"> </div>
      </div>
      {menu && (
        <ul className="menu__ul">
          <li>Home</li>
          <li>Contacto</li>
          <li>Nosotros</li>
          <li>Servicios</li>
        </ul>
      )}
 </div>
      <div className="menus__whatsapp">
        <img className="instagram__fixedIcon showText" src={facebook} alt="" />
        <p className="hide">Seguinos en Facebook</p>
        <img className="instagram__fixedIcon showText" src={insta} alt="" />
        <p className="hide">Seguinos en Instagram</p>
        <img style={{marginTop:"-10px",width:"120px"}} className="showText" src={whatsapp} />
        <p className="hide">Envianos un Whatsapp</p>
      </div>



    </section>
  );
};

export default Menus;
