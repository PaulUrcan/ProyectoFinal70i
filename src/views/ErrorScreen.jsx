import React from 'react'
import { NavLink } from "react-router-dom";

const ErrorScreen = () => {
  return (
    <div className='d-flex flex-column w-100 overflow-hiden main justify-content-center align-items-center'>
      <div className="d-flex justify-content-center align-items-center my-4">
        <h1 className='text-black mx-2'>Error</h1>
        <h1 className='text-danger'>404</h1>
      </div>
      <button className='px-md-5  cat rounded-2 footer text-white border-white border-1 cat-btn'>
        <NavLink className='nav-link' to='/'>
          Inicio
        </NavLink>
      </button>
    </div>
  )
}

export default ErrorScreen