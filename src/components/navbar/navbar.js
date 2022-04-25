import './navbar.scss'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

function Navbar() {

    const [isClicked, setIsClicked] = useState(false)

    const handleToggle = () => {
        setIsClicked(!isClicked)
        console.log('clicked')
    }

    return (
        <div className="navbar">

            <div className='navigation'>
                <Link to='/'>LOGO</Link>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>

                <button onClick={() => handleToggle()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>


            <div className={isClicked ? "menu-on" : "menu-off"} >

                <button onClick={() => handleToggle()} >
                    <div></div>
                    <div></div>
                </button>

                <Link to='/'>LOGO</Link>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>


        </div >
    );
}

export default Navbar;