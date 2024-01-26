import React from 'react'
import spinnerImg from '../../Assets/Loading_2.gif'

const Spinner = () => {
  return (
    <div>
        <img src={spinnerImg} alt="spinner not found" className='d-block m-auto 'style={{width:"200px"}} />
    </div>
  )
}

export default Spinner