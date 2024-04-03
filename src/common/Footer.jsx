import React from 'react'

const Footer = () => {
  return (
    <footer className='footer d-flex flex-column '>
      <div className='d-flex flex-column flex-md-row align-items-center align-items-md-start text-white position-relative overflow-hidden bottom-0'>
        <div className='col-3 d-flex flex-column align-items-center justify-content-center mt-2'>
          <img src="logo.png" alt="" width={150} height={150}/>
        </div>
        <div className='col-6 d-flex flex-column mt-2 d-none d-md-flex'>
          <h1 className='text-black'>Links:</h1>
          <h1 className='text-black footer-text'>Link1</h1>
          <h1 className='text-black footer-text'>Link2</h1>
        </div>
        <div className='col-3 d-flex flex-column align-items-start mt-2'>
          <h1 className='text-black'>Socials:</h1>
          <div className='d-flex text-black'>
            <img className='mx-1' src="instagram.png" alt="" width={20} height={20} />
            <h1 className='footer-text'>@Tillas</h1>
          </div>
          <div className='d-flex text-black'>
            <img className='mx-1' src="instagram.png" alt="" width={20} height={20} />
            <h1 className='footer-text'>Tillas_Store</h1>
          </div>
          <div className='d-flex text-black'>
            <img className='mx-1' src="instagram.png" alt="" width={20} height={20} />
            <h1 className='footer-text'>+54 3815769898</h1>
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png" alt="" width={60} height={60} />
          </div>
        </div>
      </div>
      <div className='w-100 d-flex justify-content-center text-black mt-5'>
        <h1 className='footer-text mx-5'>©
          Todos los derechos reservados. Las marcas registradas y logotipos de terceros presentados en este sitio son propiedad de sus respectivos propietarios.
          El uso de este sitio web implica la aceptación de nuestros Términos y Condiciones, así como de nuestra Política de Privacidad.
        </h1>
      </div>
    </footer>
  )
}

export default Footer