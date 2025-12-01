import React from 'react'

export const Connect = () => {
  return (
    <section id='connect' className='w-full bg-[#FFFFFF]'>
        <div className='flex flex-col items-center pt-10 pb-5'>
            {/* TITLE */}
            <h1 className='text-2xl font-bold text-[#342623] text-center pb-10'>
                CONNECTING YOU WITH EXPRETS IN <br/> 
                SKIN CARE AND TREATMENTS
            </h1>

            {/* CONTENT */}
            <article className='flex relative w-full h-[400px] justify-center items-center'>
                <img
                    className='flex absolute z-10 h-[90%] w-[30%] object-cover top-0 left-60 shadow-2xl' 
                    src="src/assets/skincare-2.jpg" 
                    alt="" />


                <div className='w-1/2 min-h-[360px] bg-[#F7F1F1] grid grid-cols-2'>
                    <div className='col-span-1 col-start-2 flex flex-col gap-3 py-8 text-wrap'>
                        <img 
                            className='w-16 h-16'
                            src="src/assets/skincare.png" 
                            alt="" />
                        <h1 className='text-2xl font-bold'>Only pay if your condition improves after treatment</h1>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam quis, aspernatur vel eveniet maxime! Esse dolor officia perferendis. Dicta, atque iusto adipisci officia rerum eaque id saepe accusamus? Minima?</p>
                        <button className="bg-[#CEA39C] text-xs text-white py-2 px-2 rounded-full hover:opacity-90 transition w-1/3">
                            VIEW MORE
                        </button>
                    </div>
                </div>
            </article>

            {/* CONTENT */}
            <article className='flex relative'>

            </article>
        </div>
    </section>
  )
}
