import React from 'react'
import github from './img/github.png';
import linkedin from './img/linkedin.png';
import phone from './img/phone-call.png';
import swal from 'sweetalert';
const Footer = () => {
  //This function shows a pop-up with my number
    const handlePhone = () => {
        swal({
            title: "+447867060691",
            text: "Hurry Up!"
          });
    }
  return (
    <footer>
        <a className='rot rota' href="https://github.com/roberromero"><img src={github} alt="github icon"/></a>
        <a className='rot rota' href="https://www.linkedin.com/in/roberto-romero-martin-204939230/"><img src={linkedin} alt="linkedin icon"/></a>
        <div className='divrota rot rota'><img className='footer-phone' onClick={handlePhone} src={phone} alt="smartphone icon"/></div>
    </footer>
  )
}

export default Footer
