import React from 'react'
import MainSlider from './Slider/MainSlider'
import MenuView from './Products/MenuView'
import { MdFeedback } from "react-icons/md";
import "../components/Home.css";

export default function Home() {
  return (
    <div style={{ marginTop: '4rem' }}>
      <div className="col" style={{width:'95%'}}>
         <div className='text-right'>
          <button className='btn btn-success fixed shake ' title='feedback!' > <div title='feedback!'>  <MdFeedback /></div> </button>
         </div>

      </div>  
        <MainSlider/>
        <MenuView/>
    </div>
  )
}
