import React from 'react'
import MainSlider from './Slider/MainSlider'
import MenuView from './Products/MenuView'
import { MdFeedback } from "react-icons/md";
import "../components/Home.css";
import { Link , useNavigate } from 'react-router-dom';
import Feedback from './Feedback/Feedback';


export default function Home() {
   const click =()=>{
    
   }
   
  return (
    <> 
      <div className="col" style={{width:'90%'}} >
         <div className='text-right my-2'>
          <Link className='btn btn-success fixed shake' component={Link} to='/feedback'> <span title='feedback!' style={{width:'8%'}}>feedback!</span> </Link>
         </div>

      </div>  
    <div style={{ marginTop: '4rem' }}>
        <MainSlider/>
        <MenuView/>
         
    </div>
    </>
  )
}
