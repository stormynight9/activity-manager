import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const SwiperComponent = (props) => {
  return (
    <div className='mt-36 max-w-3xl max-h-96'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {props.images.map((image, idx) => (<SwiperSlide key={idx}><img src={image} alt="" /></SwiperSlide>))}

      </Swiper>
    </div>
  );
}

export default SwiperComponent
