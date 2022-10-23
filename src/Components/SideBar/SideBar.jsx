import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import React from "react";
import "./SideBar.css";
import logo from "../../imgs/fondo.png";
import insta from "../../imgs/insta.png";
import facebook from "../../imgs/facebook.png";
import whatsapp from "../../imgs/whatsapp.png";
const SideBar = () => {
  return (
    
    <ProSidebar width={200}  className="sideBar__cont" >
      <Menu className="" iconShape="square">
        <MenuItem>
          <img className="sideBar__logo" src={logo} alt="" />
        </MenuItem>

        <MenuItem>Menú</MenuItem>
        <MenuItem>¿Quienes somos?</MenuItem>
        <MenuItem>Contacto</MenuItem>
        <MenuItem>Tienda</MenuItem>
      </Menu>
      <div className="sideBar__social">
        <hr />
        <div>
          <p style={{ width: "160px", textAlign: "center" }}>
            Seguinos en nuestras redes.
          </p>
        </div>
        <div className="">
          <img src={insta} alt="" />
          <img src={facebook} alt="" />
          <img src={whatsapp} alt="" />
        </div>
      </div>
    </ProSidebar>
  );
};

export default SideBar;
