import React from 'react'

export const About = () => {
  return (
    <div id='about-us' className='h-[600px] w-full bg-[#FCFBF9]'>
      <div className='grid grid-cols-2 h-full gap-5'>

        {/* Image */}
        <figure className='col-span-1 col-start-1 flex justify-center items-center w-full'>
          <div className='w-4/5 h-[400px] relative'>
              <picture className='w-full h-full flex justify-end items-center'>
                <img 
                  className='h-full w-1/2 bg-amber-400 rounded-full object-cover'
                  src="src/assets/about.jpg" 
                  alt="item-1" />
              </picture>
              <picture 
                className='z-10 absolute bottom-5 left-53 h-28 w-28 rounded-full bg-white flex justify-center items-center shadow-xl/20'>
                <img 
                  className='h-11/12 w-11/12 bg-amber-400 rounded-full object-cover'
                  src="src/assets/product.jpg" 
                  alt="item-2" />
              </picture>
          </div>
        </figure>

        {/* Text */}
        <article className='col-span-1 col-start-2 flex justify-start items-center max-w-[450px]'>
                <section className='flex flex-col gap-8'>
                    <h1 
                        className='text-5xl font-bold text-[#473936]'>
                        ABOUT US
                    </h1>
                    <p 
                        className='text-sm font-normal text-wrap'>
                        Welcome to Glass Skin Effect. Home based organic skin care manufacture, 
                        bringing you a range of high-quality skin care made from 100% organic.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi odio 
                        voluptate maiores blanditiis velit veniam sint temporibus ullam 
                        reprehenderit facilis! Eum et, a recusandae quo facilis eius beatae soluta cum.
                    </p>
                    <button className='bg-[#CEA39C] text-xs text-white py-3 px-4 w-1/4 rounded-3xl'>
                        VIEW MORE
                    </button>
                </section>
          </article>
      </div>
    </div>
  )
}
