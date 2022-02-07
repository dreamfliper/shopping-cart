import React, { useCallback, useState } from 'react'
import { ProductGrid } from './ProductGrid'
import { ShoppingCart } from './ShoppingCart'
import productData from './ProductData.json'

function App() {
  const [cart, setCart] = useState([])
  const handleCTA = useCallback(
    productToAdd => () => setCart(cart.concat(productToAdd)),
    [cart]
  )
  const handleRemove = useCallback(
    indexToRemove => () => setCart(cart.filter((_, idx) => idx !== indexToRemove)),
    [cart]
  )

  const cartCount = cart.reduce(
    (acc, { id }) => ({ ...acc, [id]: acc[id] + 1 }),
    productData.reduce((acc, { id }) => ({ ...acc, [id]: 0 }), {})
  )

  return (
    <div>
      <ProductGrid products={productData} cta={handleCTA} cart={cartCount} />
      <ShoppingCart cart={cart} removeProduct={handleRemove} />
    </div>
  )
}

export default App
