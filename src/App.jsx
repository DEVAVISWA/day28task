import React, { createContext, useState } from 'react'
import SubTotal from './components/SubTotal'
import Total from './components/Total'
import './App.css'


const TotalContext = createContext()

function App({ products }) {
  // console.log(products.rating)

  const [quantity, setQuantity] = useState('')

  const [value , setValue]=useState('1')

  const changeHandler = (event) => {
    // console.log((Number(event.target.value)))
    setValue(Number(event.target.value))
    // console.log(setValue(event.target.value))
  }

  return (

    <div>

      <div className="container text-center color">
        <div className="row">
          <div className="col textLeft">

            {/* CARD */}
            <h3>{products.title}</h3>
            <span>Product description :- {products.description} </span>
            <span>Product Ratings :- {products.rating} </span>


          </div>
          <div className="col textRight">
            
            <select value={value} onChange={changeHandler}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
            <b>{products.price * value } $</b>
            
          </div>
        </div>
        <TotalContext.Provider value={{ products ,value,setValue}} >
          <SubTotal />
        </TotalContext.Provider>

        <TotalContext.Provider value={{ products,value,setValue }}>
          <Total />
        </TotalContext.Provider>
      </div>

    </div>
  )
}

export { App as default, TotalContext }