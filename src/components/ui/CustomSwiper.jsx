import { Swiper } from "swiper/react";
import classes from "./CustomSwiper.module.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectCoverflow, Scrollbar, A11y, Navigation, Pagination } from "swiper";

const CustomSwiper = ({ children, space, slides,  pagination, onReachEnd}) => {
  const swiper_modules= [EffectCoverflow, Navigation, Scrollbar, A11y];
  return (
    <Swiper
      grabCursor={true}
      spaceBetween={space}
      slidesPerView= {slides}
      effect={"coverFlow"}
      scrollbar={{ draggable: true }}
      onTouchEnd={onReachEnd}
      // onReachEnd={onReachEnd}
      // loop= {true}
      navigation={true}
      pagination={{
        clickable: pagination,
      }}
      className={slides === 1? classes.swiper_for_carousel: classes.swiper_for_cards}
      modules={
        slides === 1? [...swiper_modules, Pagination]: [...swiper_modules]
      }
    >
      {children}
    </Swiper>
  );
};

export default CustomSwiper;
