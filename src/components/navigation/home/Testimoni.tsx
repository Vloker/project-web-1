import React from 'react'

export const Testimoni = () => {
  return (
    <section id='testimoni' className='w-full bg-[#FEFCFD] text-center py-10'>
      <h1 className='text-3xl font-bold text-[#473936]'>TESTIMONIALS</h1>
      
      <div className='grid grid-cols-6 py-10'>
        <article className='col-span-4 col-start-2 flex flex-col gap-5 justify-center items-center'>
          <figure>
            <img
              className='w-32 h-32 rounded-full object-cover' 
              src="src/assets/about.jpg" 
              alt="" />
          </figure>
          <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Accusantium rem dolore adipisci deleniti explicabo, maiores expedita asperiores, 
              facere libero totam possimus iusto ipsam, sit nulla earum. Enim omnis magnam ratione.
          </p>
          <p className='font-bold'>- John Doe</p>
        </article>

      </div>
    </section>
  )
}
