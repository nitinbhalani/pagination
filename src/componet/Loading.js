import React from 'react'

import Gear from '../loading.gif'

const spinner =()=> {
  
    return (
      <div className='d-flex justify-content-center'>
        <img src={Gear} alt='Gear' style={{width:50}}/>

      </div>
    )
  
}
export default spinner;