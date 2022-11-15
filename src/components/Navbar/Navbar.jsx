import React from 'react'
import './Navbar.css'

const Navbar = () => {
    const Nav = [
        {
            id:0,
            name: <a id='nav-link' href='#abt'>Home</a>
        },
        {
            id:1,
            name: <a id='nav-link' href='#skl'>About Me</a>
        },
        {
            id:2,
            name: <a id='nav-link' href='#pto'>Portfolio</a>
        },
        {
            id:3,
            name: <a id='nav-link' href='#ct'>Contact Me</a>
        }

    ]
    const navbar = Nav.map((Nav)=> {
        return(
            <li key={Nav.id} className='nan'>{Nav.name}</li> 
        )
    })
  return (
    <div className='nv'>
        <ul className='na'>
            {navbar}
        </ul>
    </div>
  )
}

export default Navbar