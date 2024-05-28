import React from 'react'

import "../styles/style.css"
import "swiper/swiper-bundle.css"


import salad from "../Assets/salad.png"
import home1 from "../Assets/home1.png"
import home3 from "../Assets/home3.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';


function Home() {
    return (
        <>
            <div className="home" id='home'>
                <div className="home-slider">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: true
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide >
                            <div className="slider">
                                <div className="slide-left">
                                    <p className="small-title">
                                        -Special Dish-
                                    </p>
                                    <h2 className="main-title">
                                        Delight Salad 
                                    </h2>
                                    <p className="slide-words">
                                    Fresh & Flavorful: Explore Our Vibrant Salad Selection!
                                    </p>

                                    <button className='home-btn'>Book table</button>
                                </div>
                                <div className="slide-right">
                                    <img src={salad} className='home-img' alt="home.img" width="600px" height="540px" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='slider-center'>
                            <div className="slider">
                                <div className="slide-left">
                                    <p className="small-title">
                                        -Special Dish-
                                    </p>
                                    <h2 className="main-title">
                                        Grill Chicken
                                    </h2>
                                    <p className="slide-words">
                                    Discover grilled chicken like never before, a harmony of flavors that will set your taste buds abuzz with delight
                                    </p>
                                    <button className='home-btn'>Book table</button>
                                </div>
                                <div className="slide-right">
                                    <img src={home1} className='home-img' alt="home.img" width="600px" height="540px" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='slider-center'>
                            <div className="slider">
                                <div className="slide-left">
                                    <p className="small-title">
                                        -Special Dish-
                                    </p>
                                    <h2 className="main-title">
                                        Paneer Noodles
                                    </h2>
                                    <p className="slide-words">
                                    Indulge in the enchanting swirls of flawlessly cooked noodles, a melody of flavors pirouetting on your taste buds with each mouthful
                                    </p>
                                    <button className='home-btn'>Book table</button>
                                </div>
                                <div className="slide-right">
                                    <img src={home3} className='home-img' alt="home.img" width="600px" height="540px" />
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>


            </div>
        </>
    );
}

export default Home