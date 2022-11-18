import React from 'react'

function Header(){
  return (
    <>
    <header>
        <div className='headerContainer flexSB'>
            <div className='logo'>
                <img src='./images/logo.png' alt=''/>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Portfolio</a></li>
                    <li><a href="/">News</a></li>
                    <li><a href="/">Contact</a></li>
                    <button className='outline-button'>Resume</button>
                </ul>
            </nav>
            <div>           
                 <i className='fas fa-bars'></i>
                </div>
        </div>
    </header>
    </>

    )
}

export default Header