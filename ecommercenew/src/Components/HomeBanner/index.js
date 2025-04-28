
import React from "react";
import Slider from "react-slick";
import probanner1 from "../../assets/images/probanner1.jpg";

const HomeBanner = ()=>{

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "100px",  // Controls how much of next/prev slides are visible
        arrows: true,
        autoplay: true
      };

    return (
        <>
            <div className="homeBannerSection">
                <Slider {...settings}>
                    <div className="item">
                        <img src="https://m.media-amazon.com/images/S/aplus-media/vc/ea411dbe-728a-4e96-8aed-357e289f81ce.__CR0,0,970,300_PT0_SX970_V1___.png" alt="" className="w-100" />
                    </div>
                    <div className="item">
                        <img src="https://m.media-amazon.com/images/S/aplus-media/vc/6b3b9820-1c1a-4b05-a45c-ad4bad4190e9.__CR0,0,970,300_PT0_SX970_V1___.png" alt="" className="w-100" />
                    </div>
                    <div className="item">
                        <img src={probanner1} alt="" className="w-100" />
                    </div>
                    <div className="item">
                        <img src="https://www.petkonnect.in/cdn/shop/articles/Pedigree-Dog-Food.webp?v=1723808945" alt="" className="w-100" />
                    </div>
                </Slider>
            </div>
        </>
    )

}

export default HomeBanner;