
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import book from '../../assets/banner-image2.png';
import innovation from '../../assets/banner-image1.png';
import heartSea from '../../assets/banner-image.png';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CarouselSlide from './CarouselSlide';

const HeroCarousel=() => {
  const slides = [
    {
      title:"This is Fine Print Book Collections",
      subtitle: "Best Offer. Save 30%. Grab it now!",
      image: book,
    },
    {
      title:"How Innovation works",
      subtitle: "Discount available. Grab it now",
      image: innovation,
    },
    {
      title:"Your Heart Is The Sea",
      subtitle: "Limited Stock Available. Grab it now",
      image: heartSea,
    },
  ]
  return (
    <>
      <Swiper
        // spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          slides.map((slide)=>(
          <SwiperSlide>
            <CarouselSlide title={slide.title} subtitle={slide.subtitle} image={slide.image}/>
          </SwiperSlide>)
        )
        }
        
      </Swiper>
    </>
  );
}
export default HeroCarousel