import React, { useContext } from 'react'
import { TotalContext } from '../App'


function SubTotal() {
    const {products}= useContext(TotalContext)

    const {value,setValue} = useContext(TotalContext)
    // console.log(products)
  return (
    

        <div className="row">
          <div className="col textLeft">
            <p>SUBTOTAL :</p>
            <p>SHIPPING :</p>
          </div>
          <div className="col textRight">
            <p><b>{products.price * value } $ </b></p>
            <p><b>{products.shipping}</b></p>
          </div>
        </div>
        
    
  )
}

export default SubTotal