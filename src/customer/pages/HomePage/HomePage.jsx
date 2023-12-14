import React from 'react'
import MainCarousel from '../../components/HomeCarocel/MainCarocel'
import HomeSectionCarousel from '../../components/HomeSectionCarosel/HomeSectionCarosel'

export default function HomePage() {
  return (
    <div>
        <MainCarousel/>
        <div className=' space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel/>
            <HomeSectionCarousel/>
            <HomeSectionCarousel/>
            <HomeSectionCarousel/>
            <HomeSectionCarousel/>
        </div>
    </div>
  )
}
