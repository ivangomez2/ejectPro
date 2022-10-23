import { TextField,Button } from "@mui/material";
import React, { useRef } from "react";
import "./Contact.css"


const Contact = () => {

  return (
    <div className="ContactCont mt-5">
      <h3></h3>
    <form className="contact__cont">
   
        <div className="d-flex contact__name">

    <TextField className="contact__input" color="error" InputLabelProps={{style : {color : 'white'}}} id="filled-basic" label="Nombre" variant="filled" />
    <TextField className="contact__input" color="error" InputLabelProps={{style : {color : 'white'}}}  id="filled-basic" label="Apellido" variant="filled" />
    </div>
    <TextField className="contact__input" color="error" InputLabelProps={{style : {color : 'white'}}}  id="filled-basic" label="Email" variant="filled" />
    <TextField className="contact__input" color="error" InputLabelProps={{style : {color : 'white'}}}  id="filled-basic" label="Teléfono" variant="filled" />
    <TextField
    InputLabelProps={{style : {color : 'white'}}}
          id="outlined-multiline-static"
          label="Envíanos tú mensaje..."
          variant="filled"
          multiline
          rows={4}
          color="warning" 
          
          className="contact__input"
        />
        <Button color="error" variant="outlined">Enviar</Button>
    
    </form>
    </div>
  );
};

export default Contact;
