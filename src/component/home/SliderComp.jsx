import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    //dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text -6xl font-bold">En Kaliteli AyakkabılarBurada</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quia nisi autem tempore molestiae, doloremque fuga dicta facere
              iure, magnam veritatis consequuntur debitis ipsam neque natus unde
              quas, est reiciendis!
            </div>
            <div className="border-rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">İncele</div>
          </div>
          <img
            src="https://minio.yalispor.com.tr/yalispor/images/adidas-fortarun-el-k-cocuk-spor-ayakkabi-turuncu-1-300.jpg"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
        <div>
            <div className="text -6xl font-bold">En Kaliteli AyakkabılarBurada</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quia nisi autem tempore molestiae, doloremque fuga dicta facere
              iure, magnam veritatis consequuntur debitis ipsam neque natus unde
              quas, est reiciendis!
            </div>
            <div className="border-rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">İncele</div>
          </div>
          <img
            src="https://minio.yalispor.com.tr/yalispor/images/adidas-fortarun-el-k-cocuk-spor-ayakkabi-turuncu-1-300.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
