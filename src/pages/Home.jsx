import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Categories from '../components/Categories'
 import ProductHighlights from '../components/ProductHighlights'

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
