
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import homecat1 from "../../assets/images/homecat1.jpg";


const HomeCat = ()=>{

    const [itemBg, setItemBg] = useState([ 
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4'
    ])
    return(

        <section className="homeCat">
        <div className="container">
            <h3 className="mb-4 hd">Featured Categories</h3>
      
          <Swiper
            slidesPerView={10}
            spaceBetween={8}
            navigation={true}
            slidesPerGroup={1}
            modules={[Navigation]}
            className="mySwiper"
          >
            {
                itemBg?.map((item,index)=>{
                    return (
                        <SwiperSlide key={index}>
                            <div className="item text-center cursor" style={{background:item}}>
                                <img src={homecat1} alt=''/>
                                <h6>Pet Food</h6>
                            </div>
                        </SwiperSlide>
                    )
                }) 
            }
            

          </Swiper>
        </div>
      </section>
    )
}


export default HomeCat;