import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { BsFillShareFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";




function Details() {
  let { productId } = useParams()
  let [post, setPost] = useState([])
  useEffect(() => {
    fetch('https://laghubittanews.com/wp-json/wp/v2/posts').then(a => a.json()).then(b => setPost(b))
  }, [])
  
  return (
    <>
      <section>
        <div className="container border px-5">
          {post.slice(0, 1).map(a => (

            <div className="shadow border  p-5 text-center" key={a.id}>
              <img className='w-100 py-3' src="https://laghubittanews.com/wp-content/themes/laghubitta/img/ncell.gif" alt="" />
              <div className="row py-2">
                <div className="col-lg-10  mx-auto">
                  <ul className="d-flex gap-3">
                    <Link to="https://facebook.com" target='_blank' className='text-decoration-none'> <li className="facebook px-5 py-2 rounded-2 text-light">
                      <FaFacebook /> Share

                    </li></Link>
                    <Link to="https://twitter.com" target='_blank' className='text-decoration-none'> <li className=" bg-dark px-5 py-2 rounded-2 text-light">
                      <FaXTwitter /> Tweet

                    </li></Link>
                    <Link to="mailto:abc1@gmail.com" target='_blank' className='text-decoration-none'> <li className="facebook bg-secondary px-5 py-2 rounded-2 text-light">
                      <MdEmail />  Mail

                    </li></Link>
                    <Link to="https://whatsapp.com" target='_blank' className='text-decoration-none'> <li className="whatsapp  px-5 py-2 rounded-2 text-light">
                      <IoLogoWhatsapp /> Share

                    </li></Link>

                    <Link to="https://share.com" target='_blank' className='text-decoration-none'> <li className=" share px-5 py-2 rounded-2 text-light">
                      <BsFillShareFill /> Share

                    </li></Link>
                  </ul>
                </div>
              </div>
              <h4 className='py-3 text-start fw-bold'>{a.title.rendered}</h4>
              <img src={a.featured_image_src} alt="" className="img-fluid w-100" />
              <p className='py-3 fw-bold text-center'>काठमाडौं । लघुवित्त कम्पनीहरुले नाफामा क्रमशः सुधार देखिन थालेको छ । चालू आर्थिक वर्षको ११ महिनामा कम्पनीहरुले नाफामा उल्लेख्य सुधार गरेका हुन्। लघुवित्तहरुले फागुन महिनामा मात्रै २० प्रतिशतले नाफा बढाएर कुल नाफा ३ अर्ब २७ करोड रुपैयाँ पुर्‍याएका छन्। राष्ट्र बैंकका अनुसार माघ मसान्तसम्म लघुवित्त कम्पनीहरुले २ अर्ब ७२ करोड रुपैयाँ नाफा कमाएकोमा फागुन महिनामा […]</p>
              <div className="row py-2">
                <div className="col-lg-10 mx-auto">
                  <ul className="d-flex gap-3">
                    <Link to="https://facebook.com" target='_blank' className='text-decoration-none'> <li className="facebook px-5 py-2 rounded-2 text-light">
                      <FaFacebook /> Share

                    </li></Link>
                    <Link to="https://twitter.com" target='_blank' className='text-decoration-none'> <li className=" bg-dark px-5 py-2 rounded-2 text-light">
                      <FaXTwitter /> Tweet

                    </li></Link>
                    <Link to="mailto:abc1@gmail.com" target='_blank' className='text-decoration-none'> <li className="facebook bg-secondary px-5 py-2 rounded-2 text-light">
                      <MdEmail />  Mail

                    </li></Link>
                    <Link to="https://whatsapp.com" target='_blank' className='text-decoration-none'> <li className="whatsapp  px-5 py-2 rounded-2 text-light">
                      <IoLogoWhatsapp /> Share

                    </li></Link>

                    <Link to="https://share.com" target='_blank' className='text-decoration-none'> <li className=" share px-5 py-2 rounded-2 text-light">
                      <BsFillShareFill /> Share

                    </li></Link>
                  </ul>
                </div>
              </div>
              <div className="py-3 text-start">
                <p  className='fw-bold'> काठमाडौं । लघुवित्त कम्पनीहरुले नाफामा क्रमशः सुधार देखिन थालेको छ । चालू आर्थिक वर्षको ११ महिनामा कम्पनीहरुले नाफामा उल्लेख्य सुधार गरेका हुन्।</p>

                 <p className='fw-bold'>
                   लघुवित्तहरुले फागुन महिनामा मात्रै २० प्रतिशतले नाफा बढाएर कुल नाफा ३ अर्ब २७ करोड रुपैयाँ पुर्‍याएका छन्। राष्ट्र बैंकका अनुसार माघ मसान्तसम्म लघुवित्त कम्पनीहरुले २ अर्ब ७२ करोड रुपैयाँ नाफा कमाएकोमा फागुन महिनामा ५५ करोड रुपैयाँ थपिएको हो। गत आर्थिक वर्षमा ६ अर्ब ७१ करोड रुपैयाँ नाफा कमाएका लघुवित्तहरुको चालू आवको नाफा भने खस्किएको थियो।
                 </p>

                 <p className='fw-bold'>
                   यद्यपि माघ र फागुनको नाफामा भने लघुवित्तले सुधार गर्दै लगेका छन्। माघ महिनामा ४० प्रतिशतले नाफा बढाएका लघुवित्त कम्पनीहरुले फागुनमा २० प्रतिशतले नाफा बढाएका छन्
                 </p>

                 <p className='fw-bold'> गत आर्थिक वर्षबाट कर्जा असुलीको मार रहेका लघुवित्त कम्पनीहरुको नाफामा पनि असर देखिएको थियो। चालू आवमा पनि लघुवित्तहरुले कर्जा असुलीमा खासै सुधार गर्नसकेका छैनन्। यसले नाफामा दबाब पर्दै आएको छ।</p>

                  <p className='fw-bold'>चालू आवको फागुनसम्म लघुवित्तहरुले कुल १८ अर्ब ९९ करोड रुपैयाँ कर्जा नोक्सानी व्यवस्थापनमा राखेका छन्। माघ महिनामा १६ अर्ब २ करोड रुपैयाँ मात्रै कोषमा राखेका लघुवित्तहरुले फागुनमा त्यसलाई बढाएर १ अर्बमाथि पुर्‍याएका छन्। </p>
              </div>
            </div>
          ))}
          <div className="border-top mt-5 py-3">
            <Link to="/">
            <button className='py-3  arrow border-1 rounded-3 bg-white '><FaArrowLeftLong /> नेरुडे मिर्मिरे लघुवित्त कञ्चनपुरको वित्तीय साक्षरता कार्यक्रमः कर्जाको सही सदुपयोग गर्न सुझाव"</button></Link>
          </div>
          
        </div>
      </section>
      
    </>
  )
}

export default Details
