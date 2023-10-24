import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const products= 
    {
        id:1,
        title: 'iPhone X',
        description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip',
        rating: '4.4 ⭐⭐⭐⭐☆ ',
        price: 899,
        shipping:'FREE'
    }


ReactDOM.createRoot(document.getElementById('root')).render(<App products={products}/>)
