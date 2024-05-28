import React from 'react'
import "../styles/style.css"

import pic1 from "../Assets/pic1.jpg"
import pic2 from "../Assets/pic2.jpg"
import pic3 from "../Assets/pic3.jpg"
import pic4 from "../Assets/pic4.jpg"

export default function AboutUs() {
    return (
        <>
            <div className="about-section" id='about'>
                <div className="titles">
                    <p className="title">About Us</p>
                    <p className="title-text">Embracing Taste, Dedicated to Perfection: Step into Our Culinary Journey</p>
                </div>

                <div className="about-container">
                    <div className="about-left">
                        <div className="pic-box">
                            <img src={pic1} alt="about-img" width="330px" height="300px" className='about-img' />
                            <img src={pic2} alt="about-img" width="330px" height="300px" className='about-img' />
                            <img src={pic3} alt="about-img" width="330px" height="300px" className='about-img' />
                            <img src={pic4} alt="about-img" width="330px" height="300px" className='about-img' />
                        </div>
                    </div>
                    <div className="about-right">
                        <p className="story-title">Our Story</p>
                        <p className="story-content">
                        Indulge in the essence of North India, where every dish is a story told through fragrant spices
                        and timeless recipes. Experience a culinary journey that honors tradition while embracing innovation,
                        a fusion that captivates the senses and leaves a lasting impression. Join us in savoring the vibrant 
                        flavors that unite loved ones and create moments to treasure
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
