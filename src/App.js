import React from 'react'
import { ProductGrid } from './ProductGrid'
import { ShoppingCart } from './ShoppingCart'
import productData from './ProductData.json'

function App() {
  return (
    <>
      <ProductGrid products={productData} />
      <ShoppingCart></ShoppingCart>
    </>
  )
}

export default App
