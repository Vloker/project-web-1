import React from 'react'

export const Product = () => {
  return (
    <section id='product-home' className='w-full bg-[#F7F1F1] text-center py-10'>
        <h1 className='text-3xl font-bold text-[#473936]'>TOP SELLING PRODUCTS</h1>

      <div className='grid grid-col-6 py-5'>
        <ul className='col-span-4 flex justify-center items-center w-full gap-5'>
            <li className='flex flex-col gap-2 justify-center items-center'>
              <figure>
                <img 
                  src="src/assets/product.jpg" 
                  alt=""
                  className='h-56 w-56 object-cover' />
              </figure>
              <div className='flex flex-col justify-center items-center'>
                <p className='font-bold'>Age Reverse Serum</p>
                <p>Rp 25.000</p>
              </div>
            </li>
            
            <li className='flex flex-col gap-2 justify-center items-center'>
              <figure>
                <img 
                  src="src/assets/product-2.jpg" 
                  alt=""
                  className='h-56 w-56 object-cover' />
              </figure>
              <div className='flex flex-col justify-center items-center'>
                <p className='font-bold'>Age Reverse Serum</p>
                <p>Rp 25.000</p>
              </div>
            </li>

            <li className='flex flex-col gap-2 justify-center items-center'>
              <figure>
                <img 
                  src="src/assets/product-3.jpg" 
                  alt=""
                  className='h-56 w-56 object-cover' />
              </figure>
              <div className='flex flex-col justify-center items-center'>
                <p className='font-bold'>Age Reverse Serum</p>
                <p>Rp 25.000</p>
              </div>
            </li>

            <li className='flex flex-col gap-2 justify-center items-center'>
              <figure>
                <img 
                  src="src/assets/product-4.jpg" 
                  alt=""
                  className='h-56 w-56 object-cover' />
              </figure>
              <div className='flex flex-col justify-center items-center'>
                <p className='font-bold'>Age Reverse Serum</p>
                <p>Rp 25.000</p>
              </div>
            </li>
          </ul>
      </div>

      <button 
            className='bg-[#F7F1F1] text-sm font-bold text-[#473936] py-3 px-8 rounded-full border-2 border-[#473936] hover:opacity-90 transition'>
              ALL PRODUCT
      </button>

    </section>
  )
}
