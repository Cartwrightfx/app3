import logo from '../works/works/calculator.png'
import logo1 from '../works/works/to-do-list.png'
import logo2 from '../works/works/clock.png'
import logo3 from '../works/works/count.png'
import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div id='pto'>
       <h2>Portfolio</h2>
       <div className="ptr1">
           <div className='pt1'>
            <img src={logo} width={200} height={130} alt='Calculator'/>
              <button>See More</button>
           </div>
           <div className='pt1'>
              <img src={logo1} width={200} height={130} alt='To-do List' />
              <button>See More</button>
           </div>
        </div>
        <div className="ptr1">
           <div className='pt1'>
              <img src={logo2} width={200} height={130} alt='clock' />
              <button>See More</button>
           </div>
           <div className='pt1'>
              <img src={logo3} width={200} height={130} alt='Counting App' />
              <button>See More</button>
           </div>
        </div>
        <div className="ptr1">
           <div className='pt1'>
              To-do list
              <button>See More</button>
           </div>
           <div className='pt1'>
              To-do list
              <button>See More</button>
           </div>
        </div>
    </div>
  )
}

export default Portfolio