import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperData from "./swiperData";
import { Navigation } from "swiper";
import "./styles2.css";


const MultiStep = () => {

    return (
        <>
            <Swiper navigation={true} allowTouchMove={false} modules={[Navigation]} className="max-w-5xl w-full mySwiper scroll-auto swiper1 sm:p-4 pt-0 sm:shadow-md sm:rounded-md">
                {swiperData.map(slide => {
                    return (
                        <SwiperSlide key={slide.id} className=''>
                            {slide.page}
                        </SwiperSlide>)
                })}
            </Swiper>
        </>
    )
}




export default MultiStep