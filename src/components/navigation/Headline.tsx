import React from 'react'

export const Headline = () => {
  return (
    <div className='bg-gradient-to-b from-[#F1DBC8] to-pink-100 h-[640px] w-full'>
        <div className='grid grid-cols-2 h-full gap-5'>
            <article className='col-span-1 flex justify-end items-center'>
                <section className='flex flex-col gap-4'>
                    <h1 
                        className='text-5xl font-bold text-[#473936]'>
                        HOME BASED <br /> ORGANIC SKIN CARE
                    </h1>
                    <p 
                        className='text-sm font-normal'>
                        Bringing you a range of high-quality skin care <br />
                        made from 100% organic
                    </p>
                    <button className='bg-[#473936] text-white py-2 px-4'>
                        Shop
                    </button>
                </section>
            </article>
            <figure className='col-span-1 flex justify-start items-center relative overflow-hidden'>
                <img 
                    className='object-cover h-[600px] w-auto absolute top-28 left-0'
                    src="src/assets/Beauty-2.png" 
                    alt="beauty" />
            </figure>
        </div>
    </div>
  )
}
