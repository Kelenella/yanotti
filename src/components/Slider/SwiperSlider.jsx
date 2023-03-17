import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/slider.css";
import { mainContent } from "../../content/mainContent";
import ContextForm from "../../contexts/ContextForm";

export default function Slider() {
  let modal = useContext(ContextForm);
  const pagination = {
    clickable: true,
  };

  const autoplay = {
    delay: 5000,
    disableOnInteraction: false,
  };

  const showSliders = mainContent.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <div
          className="slider__screen"
          style={{ backgroundImage: `url(./img/${item.slideBg})` }}
        >
          <div className="slider__container">
            <div>
              <h1 className="slider__title">{item.titleTop}</h1>
              <h1 className="slider__title" style={{ marginBottom: "20px" }}>
                {item.titleBottom}
              </h1>
            </div>
            <p className="slider__subtitle">{item.subtitle}</p>
            <button
              className="slider__link"
              href={item.link}
              onClick={modal.dispatch}
            >
              {item.linkText}
            </button>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      <div className="slider">
        <Swiper
          pagination={pagination}
          autoplay={autoplay}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {showSliders}
        </Swiper>
      </div>
    </>
  );
}
