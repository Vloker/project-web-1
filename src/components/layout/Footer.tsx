import React from 'react'

export const Footer = () => {
  return (
    <footer id='footers' className='w-full py-10 bg-[#CEA39C]'>
        <div className='grid grid-cols-6 h-[300px]'>
          {/* Logo */}
          <div className='col-span-1 col-start-2 flex py-20'>
            <img 
              className='object-cover h-[100px] w-full'
              src="src/assets/PureGlow.png" 
              alt="logo-footer" />
          </div>

          {/* Navigation */}
         <div className='col-span-3 col-start-3'>
            <ul className='grid grid-cols-3 w-full h-full text-[#342623] py-20'>
              <li className='col-span-1 flex flex-col gap-5'>
                <h1 className='font-bold'>TREATMENTS</h1>
                <ul>
                  <li>Skin Care</li>
                  <li>Body Care</li>
                  <li>Nails</li>
                  <li>Appliances</li>
                </ul>
              </li>

              <li className='col-span-1 flex flex-col gap-5'>
                <h1 className='font-bold'>QUICK LINKS</h1>
                <ul>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Blog</li>
                  <li>FAQ</li>
                  <li>Privacy Policy</li>
                  <li>Terms and Conditions</li>
                </ul>
              </li>

              <li className='col-span-1 flex flex-col gap-5'>
                <h1 className='font-bold'>ADDRESS</h1>
                <ul>
                  <li>77 Break St</li>
                  <li>Soho London W1F 9DB</li>
                  <li>Mob: 020 1234 6789</li>
                  <li>Email: info@pureglow.com</li>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </ul>
              </li>

            </ul>
         </div>
        </div>
    </footer>
  )
}
