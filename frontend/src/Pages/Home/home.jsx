import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import FoodCatalog from '../../Components/FoodCatalog/FoodCatalog'
import AppDownload from '../../Components/AppDownload/AppDownload'

function home() {
  return (
    <>
      <HeroSection></HeroSection>
      <FoodCatalog></FoodCatalog>
      <AppDownload></AppDownload>
    </>
  )
}

export default home
