import React from 'react'

export function ProductGrid() {
  return (
    <div className="mx-auto container px-6 xl:px-0 py-12">
      <Category />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  )
}

const Category = ({ img, imgSm, title }) => (
  <div className="flex flex-col justify-center">
    <div className="relative">
      <img
        className="hidden sm:block w-full"
        src="https://i.ibb.co/HxXSY0j/jason-wang-Nx-Awry-Abt-I-unsplash-1-1.png"
        alt="sofa"
      />
      <img
        className="sm:hidden w-full"
        src="https://i.ibb.co/B6qwqPT/jason-wang-Nx-Awry-Abt-Iw-unsplash-1.png"
        alt="sofa"
      />
      <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
        <p className="text-3xl sm:text-4xl font-semibold leading-9 text-white">
          Range Comfort Sofas
        </p>
      </div>
    </div>
  </div>
)

const ProductItem = props => (
  <div className="flex flex-col">
    <div className="mt-10 grid lg:grid-cols-2 gap-x-8 gap-y-8 items-center">
      <div className="group transition duration-500 relative bg-gray-50 sm:p-28 py-36 px-10 flex justify-center items-center">
        <img
          className="transition duration-500"
          src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png"
          alt="sofa-2"
        />
        <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
          <div>
            <p className="transition duration-500 text-xl leading-5 text-gray-600">
              Sectional Sofa
            </p>
          </div>
          <div>
            <p className="transition duration-500 text-xl font-semibold leading-5 text-gray-800">
              $78900
            </p>
          </div>
        </div>
        <div className="transition duration-500 absolute bottom-8 right-8 flex justify-start items-end flex-col space-x-2">
          <span className="pb-1.5">Left: 234</span>
          <button className="bg-white border rounded-lg active:bg-gray-800 active:text-gray-200 border-gray-600 p-1.5">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
)
