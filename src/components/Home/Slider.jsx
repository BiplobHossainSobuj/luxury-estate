import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <div>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                
                pagination={true}
            >
                <SwiperSlide>
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2867.jpg?t=st=1713233425~exp=1713237025~hmac=05c1471510b36ee6c41eb3bc053e407cf4be6446ad986312ff94ac0841bd31b4&w=1380" className="w-full" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2071.jpg?t=st=1713233470~exp=1713237070~hmac=278891b47bc2eaa29afa0c0b02a90705008e575242dfdf9631136300f6365016&w=1380" className="w-full" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table_105762-2050.jpg?t=st=1713233552~exp=1713237152~hmac=8ce5f06e129da070075690fa0a7b4b514ce335b3c9ced9e73465d4cfe16095ce&w=1380" className="w-full" />
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Slider;