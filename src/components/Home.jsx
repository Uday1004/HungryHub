import React from 'react'
import MainSlider from './Slider/MainSlider'
import MenuView from './Products/MenuView'

export default function Home() {
  return (
    <div style={{ marginTop: '4rem' }}>
        <MainSlider/>
        <MenuView/>
    </div>
  )
}
