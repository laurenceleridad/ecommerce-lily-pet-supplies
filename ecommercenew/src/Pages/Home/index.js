import HomeBanner from "../../Components/HomeBanner";
import propets1 from '../../assets/images/propets1.jpg';
import aclily2 from '../../assets/images/aclily2.jpg';
import { Button } from '@mui/material';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";
import dogbanner1 from '../../assets/images/dogbanner1.jpg';
import catbanner1 from '../../assets/images/catbanner1.jpg';

const Home =()=>{


    return(
        <>
            <HomeBanner/>
            <HomeCat/>


            <section className="petProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="sticky">
                                <div className="banner">
                                    <img src={propets1} className="cursor w-100" alt=''/>
                                </div>

                                <div className="banner mt-3">
                                    <img src={propets1} className="cursor w-100" alt=''/>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">BEST SELLERS</h3>
                                    <p className="text-light text-sml mb-0">Do not miss the current offers available</p>
                                </div>

                                <Button className="viewAllBtn ml-auto">View All<IoIosArrowRoundForward/></Button>
                            </div>

                            <div className="product_row w-100 mt-4">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={0}
                                navigation={true}
                                slidesPerGroup={3}
                                modules={[Navigation]}
                                className="mySwiper"
                                 >
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                    
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                </Swiper>
                            </div>


                            
                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-light text-sml mb-0">Check out our new products and stocks available.</p>
                                </div>

                                <Button className="viewAllBtn ml-auto">View All<IoIosArrowRoundForward/></Button>
                            </div>

                            <div className="product_row productRow2 w-100 mt-4 d-flex">
                                 <ProductItem />
                                 <ProductItem />
                                 <ProductItem />
                                 <ProductItem />
                                 <ProductItem />
                                 <ProductItem />
                                 <ProductItem />
                                 <ProductItem />
                            </div>

                            <div className="d-flex mt-4 bannerSection">
                                <div className="banner">
                                    <img src={dogbanner1} className="cursor w-100" alt=''/>
                                </div>
                                <div className="banner">
                                    <img src={catbanner1} className="cursor w-100" alt=''/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
           </section>
        </>
    )
}

export default Home;