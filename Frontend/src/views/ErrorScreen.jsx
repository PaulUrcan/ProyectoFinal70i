import React from 'react'
import error from '/error404.png'
const ErrorScreen = () => {
  return (
    <div className=''>
        <div className="row">
            <div className="col d-flex justify-content-center align-items-center main bg-dark error">
                <img src={error} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ErrorScreen