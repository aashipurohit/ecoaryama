import React from 'react'
import {assets} from '../assets/assets'


const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      <div>
        <img src={assets.privacy_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold '>Privacy Policy</p>
        <p className='text-gray-400'>Natural Beauty, Transparent Privacy - Our Policy</p>
      </div>

      <div>
        <img src={assets.terms_nd_con} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold '>Terms & Conditions</p>
        <p className='text-gray-400'>Our Policies Terms of Use for Natural Herbal Beauty</p>
      </div>

      <div>
        <img src={assets.customer_care} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold '>Customer Care</p>
        <p className='text-gray-400'>We provide 24/7 customer service</p>
      </div>
    </div>
  )
}

export default OurPolicy
