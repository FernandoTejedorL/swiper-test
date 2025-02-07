import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledCarousel } from './carousel.styles';
import 'swiper/css';
import 'swiper/css/navigation';

const Carousel = () => {
	return (
		<StyledCarousel>
			<Swiper
				modules={[Navigation]}
				spaceBetween={10}
				slidesPerView={1}
				navigation={true}
				onSlideChange={() => console.log('slide change')}
				onSwiper={swiper => console.log(swiper)}
			>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				...
			</Swiper>
		</StyledCarousel>
	);
};

export default Carousel;
