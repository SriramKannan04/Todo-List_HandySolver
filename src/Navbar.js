import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() 
{
  return (
  <div>
    <header>
      <nav>
        <div className='logo'>
            <Link className="a" to="/Todo">
              <img src="/img/handysolver_logo.png" alt="" />
            </Link>
        </div>
       
        <div className='content'>
          <p><center><h1>To do list application</h1></center></p>
          <p className='subPara'>Where to-do items can be added, edited, updated and deleted{/* <span className='swapping'></span> */} which are belong to the catagories</p>
        </div>
      </nav> 
   </header>
  </div>
  )
}

export default Navbar;