import React, { useEffect, useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Category from '../Pages/Category';
import Details from '../Pages/Details';


function Header() {
    let [cat,setCat]=useState([])
    useEffect(()=>{
     fetch('https://laghubittanews.com/wp-json/wp/v2/categories').then(a=>a.json()).then(b=>setCat(b))
    },[])
    return (
        <>
            <section className="bg py-3 text-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                          <FaCalendarAlt />  २८ बैशाख २०८२, आईतवार
                        </div>
                        <div className="col-lg-6 text-lg-end">
                            <FaFacebook />

                        </div>
                    </div>
                </div>
            </section>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Link to={'/'}><img src="https://laghubittanews.com/wp-content/uploads/2024/07/Laghubitta-Final-1536x380-1.jpg" alt="" className="w-100" /></Link>
                        </div>
                        <div className="col-lg-7 offset.lg-2">
                            <Link to={'/'}><img src="http://laghubittanews.com/wp-content/themes/laghubitta/img/gif-900-x-100.gif" alt="" className="w-100" /></Link>
                        </div>
                    </div>
                </div>
            </header>
<nav className="navbar navbar-expand-lg bg navbar-dark">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {cat.map(a=>(

       
        <li className="nav-item" key={a.name}>
          <Link className="nav-link active" to={`/category/${a.id}`}>{a.name}</Link>
        </li>
         ))}
      </ul>
     
    </div>
  </div>
</nav>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/category/:cid' element={<Category/>}/>
    <Route path='/details/:productId' element={<Details/>}/>
      </Routes>
        </>
    )
}

export default Header
