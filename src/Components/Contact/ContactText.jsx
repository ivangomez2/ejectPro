import { Button } from '@mui/material'
import React from 'react'
import img from "../../imgs/contactImg.png"
const ContactText = () => {
  return (
    <div className='d-flex contactText__cont'>
<img src={img} alt="" />
<div className="contactText__textCont">
<h2>Contactanos</h2>
<h5>ibero numquam aliquam voluptas, voluptatem suscipit corrupti eius soluta voluptatum pariatur ab, obcaecati, impedit amet!</h5>
<Button className='mt-1'  color="error" variant="outlined">Quiero contactarme</Button>
</div>
    </div>
  )
}

export default ContactText