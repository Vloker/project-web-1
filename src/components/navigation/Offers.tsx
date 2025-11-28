import React from 'react'

export const Offers = () => {
  return (
    <section
        id='offers'
        className='w-full bg-[#625149] py-10 px-60'>
        <div className='min-h-auto flex flex-col  items-center gap-10'>
            {/* TITLE */}
            <article className='flex justify-center h-10'>
                <h1 className='text-3xl font-bold text-white'>WHAT WE OFFERS</h1>
            </article>

            {/* PRODUCTS */}
            <figure className='flex justify-between w-full'>
                
                <picture className='flex flex-col gap-5'>
                    <div className='h-52 w-52 rounded-full bg-white flex justify-center items-center'>
                        <img 
                            className='h-[90%] w-[90%] rounded-full object-cover'
                            src="src/assets/treatment.jpg" 
                            alt="" />
                    </div>
                    <article className='flex flex-col gap-1 justify-center items-center '>
                        <h1 className='font-semibold text-white'>ORGANIC SOLUTION</h1>
                        <p className='text-sm'>Get the promo</p>
                    </article>
                </picture>

                <picture className='flex flex-col gap-5'>
                    <div className='h-52 w-52 rounded-full bg-white flex justify-center items-center'>
                        <img 
                            className='h-[90%] w-[90%] rounded-full object-cover'
                            src="src/assets/treatment-2.jpg" 
                            alt="" />
                    </div>
                    <article className='flex flex-col gap-1 justify-center items-center'>
                        <h1 className='font-semibold text-white'>TREATMENT</h1>
                        <p className='text-sm'>Get the promo</p>
                    </article>
                </picture>

                <picture className='flex flex-col gap-5'>
                    <div className='h-52 w-52 rounded-full bg-white flex justify-center items-center'>
                        <img 
                            className='h-[90%] w-[90%] rounded-full object-cover'
                            src="src/assets/organic-solution.jpg" 
                            alt="" />
                    </div>
                    <article className='flex flex-col gap-1 justify-center items-center '>
                        <h1 className='font-semibold text-white'>EXCELLENT OFFERS</h1>
                        <p className='text-sm'>Get the promo</p>
                    </article>
                </picture>
            </figure>
        </div>        
    </section>
  )
}
