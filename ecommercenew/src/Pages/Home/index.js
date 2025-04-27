import HomeBanner from "../../Components/HomeBanner";
import aclily2 from '../../assets/images/aclily2.jpg';
import { Button } from '@mui/material';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Rating from '@mui/material/Rating';

const Home =()=>{

    var productSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true, 
      };

    return(
        <>
           <HomeBanner/>

            <section className="petProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img src={aclily2} className="cursor w-100" alt=''/>
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
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Navigation]}
                                className="mySwiper"
                                 >
                                    <SwiperSlide>
                                        <div className="item productItem">
                                             <div className="imgFill">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7tIsNAI-avzmGlypHBr7MSIw-ltXDD94QA&s" className="w-100" alt=''/>
                                            </div>
                                            <div className="info">
                                            <h4>Special Dog Food Adult Lamb & Rice</h4>
                                            <span className="text-success d-block">In Stock</span>
                                            <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size="small" precision={0.5} />

                                            <div className="d-flex">
                                                <span className="oldPrice">P 1299.00</span>
                                                <span className="netPrice text-danger ml-2">P 1150.00</span>
                                            </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    
                                    <SwiperSlide>
                                        <div className="item productItem">
                                             <div className="imgFill">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7tIsNAI-avzmGlypHBr7MSIw-ltXDD94QA&s" className="w-100" alt=''/>
                                            </div>
                                            <div className="info">
                                            <h4>Special Dog Food Adult Lamb & Rice</h4>
                                            <span className="text-success d-block">In Stock</span>
                                            <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size="small" precision={0.5} />

                                            <div className="d-flex">
                                                <span className="oldPrice">P 1299.00</span>
                                                <span className="netPrice text-danger ml-2">P 1150.00</span>
                                            </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="item productItem">
                                             <div className="imgFill">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7tIsNAI-avzmGlypHBr7MSIw-ltXDD94QA&s" className="w-100" alt=''/>
                                            </div>
                                            <div className="info">
                                            <h4>Special Dog Food Adult Lamb & Rice</h4>
                                            <span className="text-success d-block">In Stock</span>
                                            <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size="small" precision={0.5} />

                                            <div className="d-flex">
                                                <span className="oldPrice">P 1299.00</span>
                                                <span className="netPrice text-danger ml-2">P 1150.00</span>
                                            </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="item productItem">
                                             <div className="imgFill">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7tIsNAI-avzmGlypHBr7MSIw-ltXDD94QA&s" className="w-100" alt=''/>
                                            </div>
                                            <div className="info">
                                            <h4>Special Dog Food Adult Lamb & Rice</h4>
                                            <span className="text-success d-block">In Stock</span>
                                            <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size="small" precision={0.5} />

                                            <div className="d-flex">
                                                <span className="oldPrice">P 1299.00</span>
                                                <span className="netPrice text-danger ml-2">P 1150.00</span>
                                            </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="item productItem">
                                             <div className="imgFill">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7tIsNAI-avzmGlypHBr7MSIw-ltXDD94QA&s" className="w-100" alt=''/>
                                            </div>
                                            <div className="info">
                                            <h4>Special Dog Food Adult Lamb & Rice</h4>
                                            <span className="text-success d-block">In Stock</span>
                                            <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size="small" precision={0.5} />

                                            <div className="d-flex">
                                                <span className="oldPrice">P 1299.00</span>
                                                <span className="netPrice text-danger ml-2">P 1150.00</span>
                                            </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="item productItem">
                                             <div className="imgFill">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7tIsNAI-avzmGlypHBr7MSIw-ltXDD94QA&s" className="w-100" alt=''/>
                                            </div>
                                            <div className="info">
                                            <h4>Special Dog Food Adult Lamb & Rice</h4>
                                            <span className="text-success d-block">In Stock</span>
                                            <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size="small" precision={0.5} />

                                            <div className="d-flex">
                                                <span className="oldPrice">P 1299.00</span>
                                                <span className="netPrice text-danger ml-2">P 1150.00</span>
                                            </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
           </section>
        </>
    )
}

export default Home;