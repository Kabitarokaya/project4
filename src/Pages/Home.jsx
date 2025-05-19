import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    let [post, setPost] = useState([])
    useEffect(() => {
        fetch('https://laghubittanews.com/wp-json/wp/v2/posts').then(a => a.json()).then(b => setPost(b))
    }, [])
    // const [count, setCount]=useState()
    // useEffect(()=>{
    //     document.title =`${count} laghubittanews`;
    // },[])
    return (
        <>
            {/* <div>
            <h1>{count}</h1>
        </div> */}
            <section className='py-5'>
                <div className="container">
                    {post.slice(0, 1).map(a => (

                        <div className="shadow border  p-5 text-center" key={a.id}>
                            <h1 className='pb-3'><Link to={`/details/${a.id}`} className='text-success fw-bold text-decoration-none'>{a.title.rendered}</Link></h1>
                            <img src={a.featured_image_src} alt="" className="img-fluid" />
                            <p className='pt-3 fw-bold text-center'>काठमाडौं । लघुवित्त कम्पनीहरुले नाफामा क्रमशः सुधार देखिन थालेको छ । चालू आर्थिक वर्षको ११ महिनामा कम्पनीहरुले नाफामा उल्लेख्य सुधार गरेका हुन्। लघुवित्तहरुले फागुन महिनामा मात्रै २० प्रतिशतले नाफा बढाएर कुल नाफा ३ अर्ब २७ करोड रुपैयाँ पुर्‍याएका छन्। राष्ट्र बैंकका अनुसार माघ मसान्तसम्म लघुवित्त कम्पनीहरुले २ अर्ब ७२ करोड रुपैयाँ नाफा कमाएकोमा फागुन महिनामा […]</p>
                        </div>
                    ))}

                </div>
            </section>

            {/* <section>
                <div className="container">
                    {post.slice(1, 2).map(a => (

                        <div className="shadow border  p-5 text-center" key={a.id}>
                            <h1><Link to="/details/:productId" className='text-success fw-bold text-decoration-none'>{a.title.rendered}</Link></h1>
                            <img src={a.featured_image_src} alt="" className="img-fluid" />
                            <p className='pt-3 fw-bold text-center'>काठमाडौं । लघुवित्त कम्पनीहरुले नाफामा क्रमशः सुधार देखिन थालेको छ । चालू आर्थिक वर्षको ११ महिनामा कम्पनीहरुले नाफामा उल्लेख्य सुधार गरेका हुन्। लघुवित्तहरुले फागुन महिनामा मात्रै २० प्रतिशतले नाफा बढाएर कुल नाफा ३ अर्ब २७ करोड रुपैयाँ पुर्‍याएका छन्। राष्ट्र बैंकका अनुसार माघ मसान्तसम्म लघुवित्त कम्पनीहरुले २ अर्ब ७२ करोड रुपैयाँ नाफा कमाएकोमा फागुन महिनामा […]</p>
                        </div>
                    ))}

                </div>
            </section> */}
            <section>
                <div className="container shadow py-5 px-4">
                    <h3 className='text-center bg py-3 px-5 mb-4'><Link to="/" className='text-white text-decoration-none'>लघुवित्त समाचार</Link></h3>
                    <div className="row abc py-3">
                       <div className="col-lg-6">
                            {post.slice(1, 2).map(a => (

                                <div className="shadow border py-1 px-3 text-center" key={a.id}>
                                    <div className="d-flex gap-3 align-items-center">
                                        <img src={a.featured_image_src} alt="" width="400px" className="img-fluid" />
                                        <h6 className='pb-3'><Link to={`/details/${a.id}`} className='text-success fw-bold text-decoration-none'>{a.title.rendered}</Link></h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-6">
                            {post.slice(3, 4).map(a => (

                                <div className="shadow border py-1 px-3 text-center" key={a.id}>
                                    <div className="d-flex gap-3 align-items-center">
                                        <img src={a.featured_image_src} alt="" width="400px" className="img-fluid" />
                                        <h6 className='pb-3'><Link to={`/details/${a.id}`} className='text-success fw-bold text-decoration-none'>{a.title.rendered}</Link></h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                     <div className="row abc py-3">
                       <div className="col-lg-6">
                            {post.slice(6, 7).map(a => (

                                <div className="shadow border py-1 px-3 text-center" key={a.id}>
                                    <div className="d-flex gap-3 align-items-center">
                                        <img src={a.featured_image_src} alt="" width="400px" className="img-fluid" />
                                        <h6 className='pb-3'><Link to={`/details/${a.id}`} className='text-success fw-bold text-decoration-none'>{a.title.rendered}</Link></h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-6">
                            {post.slice(7, 8).map(a => (

                                <div className="shadow border py-1 px-3 text-center" key={a.id}>
                                    <div className="d-flex gap-3 align-items-center">
                                        <img src={a.featured_image_src} alt="" width="400px" className="img-fluid" />
                                        <h6 className='pb-3'><Link to={`/details/${a.id}`} className='text-success fw-bold text-decoration-none'>{a.title.rendered}</Link></h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                     <div className="row abc py-3">
                       <div className="col-lg-6">
                            {post.slice(8, 9).map(a => (

                                <div className="shadow border py-1 px-3 text-center" key={a.id}>
                                    <div className="d-flex gap-3 align-items-center">
                                        <img src={a.featured_image_src} alt="" width="400px" className="img-fluid" />
                                        <h6 className='pb-3'><Link to={`/details/${a.id}`} className='text-success fw-bold text-decoration-none'>{a.title.rendered}</Link></h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-6">
                            {post.slice(9, 10).map(a => (

                                <div className="shadow border py-1 px-3 text-center" key={a.id}>
                                    <div className="d-flex gap-3 align-items-center">
                                        <img src={a.featured_image_src} alt="" width="400px" className="img-fluid" />
                                        <h6 className='pb-3'><Link to={`/details/${a.id}`} className='text-success fw-bold text-decoration-none'>{a.title.rendered}</Link></h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                  
                </div>
               
            </section>
             <section>
                <div className="container bg-warning shadow py-5 px-4">
                    <h3 className='text-center bg py-3 px-5 mb-4'><Link to="/" className='text-white text-decoration-none'>लघुवित्त समाचार</Link></h3>
                  
                     <div className="row abc py-3">
                       <div className="col-lg-6">
                            {post.slice(6, 7).map(a => (

                                <div className="shadow border py-1 px-3 text-center" key={a.id}>
                                    <div className="d-flex gap-3 align-items-center">
                                        <img src={a.featured_image_src} alt="" width="400px" className="img-fluid" />
                                        <h6 className='pb-3'><Link to={`/details/${a.id}`} className='text-success fw-bold text-decoration-none'>{a.title.rendered}</Link></h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-6">
                            {post.slice(7, 8).map(a => (

                                <div className="shadow border py-1 px-3 text-center" key={a.id}>
                                    <div className="d-flex gap-3 align-items-center">
                                        <img src={a.featured_image_src} alt="" width="400px" className="img-fluid" />
                                        <h6 className='pb-3'><Link to={`/details/${a.id}`} className='text-success fw-bold text-decoration-none'>{a.title.rendered}</Link></h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                     <div className="row abc py-3">
                       <div className="col-lg-6">
                            {post.slice(8, 9).map(a => (

                                <div className="shadow border py-1 px-3 text-center" key={a.id}>
                                    <div className="d-flex gap-3 align-items-center">
                                        <img src={a.featured_image_src} alt="" width="400px" className="img-fluid" />
                                        <h6 className='pb-3'><Link to={`/details/${a.id}`} className='text-success fw-bold text-decoration-none'>{a.title.rendered}</Link></h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-6">
                            {post.slice(9, 10).map(a => (

                                <div className="shadow border py-1 px-3 text-center" key={a.id}>
                                    <div className="d-flex gap-3 align-items-center">
                                        <img src={a.featured_image_src} alt="" width="400px" className="img-fluid" />
                                        <h6 className='pb-3'><Link to={`/details/${a.id}`} className='text-success fw-bold text-decoration-none'>{a.title.rendered}</Link></h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                  
                </div>
               
            </section>
             <section className='py-4'>
                <div className="container shadow py-5 px-4">
                    <h3 className='text-center bg py-3 px-5 mb-4'><Link to="/" className='text-white text-decoration-none'>राष्ट्रिय नीति</Link></h3>
                
                     <div className="row abc py-3">
                       <div className="col-lg-6">
                            {post.slice(8, 9).map(a => (

                                <div className="shadow border py-1 px-3 text-center" key={a.id}>
                                    <div className="d-flex gap-3 align-items-center">
                                        <img src={a.featured_image_src} alt="" width="400px" className="img-fluid" />
                                        <h6 className='pb-3'><Link to={`/details/${a.id}`} className='text-success fw-bold text-decoration-none'>{a.title.rendered}</Link></h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-6">
                            {post.slice(9, 10).map(a => (

                                <div className="shadow border py-1 px-3 text-center" key={a.id}>
                                    <div className="d-flex gap-3 align-items-center">
                                        <img src={a.featured_image_src} alt="" width="400px" className="img-fluid" />
                                        <h6 className='pb-3'><Link to={`/details/${a.id}`} className='text-success fw-bold text-decoration-none'>{a.title.rendered}</Link></h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                  
                </div>
               
            </section>
        </>
    )
}

export default Home
