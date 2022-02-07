import React, { useState } from 'react'

export function ShoppingCart({ cart, removeProduct }) {
  const [show, setShow] = useState(false)
  const sum = cart.reduce((sum, { price }) => sum + price, 0)
  return (
    <>
      <div className="flex items-center justify-center py-8">
        <button
          onClick={() => setShow(!show)}
          className="py-2 px-10 rounded bg-indigo-600 hover:bg-indigo-700 text-white">
          Open Cart ({cart.length})
        </button>
      </div>
      {show && (
        <div
          className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0"
          id="chec-div">
          <div
            className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
            id="checkout">
            <div className="flex md:flex-row flex-col justify-end" id="cart">
              <div
                className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden"
                id="scroll">
                <div
                  className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer"
                  onClick={() => setShow(!show)}>
                  <p className="text-base p-2 leading-none">{'< Back'}</p>
                </div>
                {cart.map((cartItem, idx) => (
                  <CartItem
                    key={cartItem.id + idx}
                    onRemove={removeProduct(idx)}
                    {...cartItem}
                  />
                ))}
              </div>

              <div className="xl:w-1/2 md:w-1/3 w-full bg-gray-100 h-full">
                <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                  <div>
                    <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                    <div className="flex items-center justify-between pt-16">
                      <p className="text-base leading-none text-gray-800">Subtotal</p>
                      <p className="text-base leading-none text-gray-800">${sum}</p>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                      <p className="text-base leading-none text-gray-800">Shipping</p>
                      <p className="text-base leading-none text-gray-800">$30</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                      <p className="text-2xl leading-normal text-gray-800">Total</p>
                      <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                        ${sum + 30}
                      </p>
                    </div>
                    <button
                      onClick={() => setShow(!show)}
                      className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const CartItem = ({ image, productName, price, quantity, onRemove }) => (
  <div className="md:flex bg-white items-center py-8 px-14 border-t border-b border-gray-200">
    <div className="h-full w-1/4">
      <img src={image} className="w-full h-full object-center object-cover" />
    </div>
    <div className="md:pl-3 md:w-3/4 w-full">
      <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
      <div className="flex items-center justify-between w-full pt-1">
        <p className="text-base font-black leading-none text-gray-800">{productName}</p>
      </div>
      <div className="flex items-center justify-between pt-5 pr-6">
        <div className="flex itemms-center">
          <p
            onClick={onRemove}
            className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
            Remove
          </p>
        </div>
        <p className="text-base font-black leading-none text-gray-800">{price}</p>
      </div>
    </div>
  </div>
)
