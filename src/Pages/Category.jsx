import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Category() {
    let {cid}=useParams()
    let [cat, setCat]=useState([])
    useEffect(()=>{
        fetch(`https://laghubittanews.com/wp-json/wp/v2/posts?categories=${cid}`).then(a=>a.json()).then(b=>setCat(b))
    },[cid])
  return (
    <>
      <div className="container">
        <h2>Category</h2>
        <div className="row">
            {cat.map(a=>(

            <div className="col-lg-3">
            <div className="shadow aa">
                <img src={a.featured_image_src} width="200px" height="200px" alt="" className="w-100" />
                <p className="fw-bold py-2 px-3">{a.title.rendered}</p>
            </div>
        </div>
            ))}

        </div>
      </div>
    </>
  )
}

export default Category
