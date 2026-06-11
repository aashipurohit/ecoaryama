import React from 'react'
import Hero from '../components/Layout/Hero'
import LatestCollection from '../components/Layout/LatestCollection'
import BestSeller from '../components/Layout/BestSeller'
import OurPolicy from '../components/Layout/OurPolicy'
import NewsletterBox from '../components/Common/NewsletterBox'
import Categories from '../components/Layout/Categories'
 import ProductHighlights from '../components/Layout/ProductHighlights'

const Home = () => {
  return (
    <div>
      <Hero />
       <Categories />
      <LatestCollection />
     <BestSeller />
   
     <OurPolicy />
     <NewsletterBox />
      <ProductHighlights />
    </div>
    
  )
}

export default Home
