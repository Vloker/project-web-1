import React from 'react'

export const About = () => {
  return (
    <section id="about-us" className="w-full bg-[#FCFBF9] py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-[1400px] mx-auto px-6">

        {/* IMAGE */}
        <figure className="flex justify-center items-center">
          <div className="relative w-full max-w-[420px] aspect-square">
            
            {/* Main Image */}
            <img
              className="w-full h-full rounded-full object-cover"
              src="src/assets/about.jpg"
              alt="about"
            />

            {/* Floating Product Image */}
            <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-white flex justify-center items-center shadow-xl">
              <img
                className="h-[90%] w-[90%] rounded-full object-cover"
                src="src/assets/product.jpg"
                alt="product"
              />
            </div>

          </div>
        </figure>

        {/* TEXT */}
        <article className="flex justify-center md:justify-start items-center">
          <section className="flex flex-col gap-6 max-w-[480px] text-center md:text-left">
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#473936]">
              ABOUT US
            </h1>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Welcome to Glass Skin Effect. Home based organic skin care manufacture,
              bringing you a range of high-quality skin care made from 100% organic.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="pt-4">
              <button className="bg-[#CEA39C] text-sm text-white py-3 px-8 rounded-full hover:opacity-90 transition">
                VIEW MORE
              </button>
            </div>

          </section>
        </article>

      </div>
    </section>
  )
}
