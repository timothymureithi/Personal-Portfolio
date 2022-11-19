import React from 'react'

function Header(){
  return (
    <>
    <header>
        <div className='headerContainer flexSB'>
            <div className='logo'>
                <img src='./images/logo.png' alt='Timothy'/>
            </div>
            <nav>
            <ul className="flexSB">
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>About</a>
              </li>
              <li>
                <a href='/'>Portfolio</a>
              </li>
              <li>
                <a href='/'>Articles</a>
              </li>
              <li>
                <a href='/'>Contact</a>
              </li>
              <button className='outline-btn'>CV</button>
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