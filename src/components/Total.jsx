import React, { useContext } from 'react'
import { TotalContext } from '../App'

function Total() {

    const {products}= useContext(TotalContext)

    const {value,setValue} = useContext(TotalContext)

  return (
    

        <div className="row">
          <div className="col textLeft">
            <p><b>TOTAL :</b></p>
          </div>
          <div className="col textRight">
            <p><b>{products.price * value} $ </b></p>
          </div>
        </div>

    
  )
}

export default Total