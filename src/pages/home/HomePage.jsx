import classes from "./HomePage.module.scss";
import CustomSwiper from "../../components/ui/CustomSwiper";
import carousel_flat from "../../assets/images/carousel/flat_off.png";
import carousel_black_friday from "../../assets/images/carousel/black_friday.png";
import { SwiperSlide } from "swiper/react";
import shop_now_crocs from "../../assets/images/shopNow/crocs.png";
import shop_now_adidas from "../../assets/images/shopNow/adidas.png";
import ProductCard from "../../components/main/home/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCategories } from "../../store/reducers/categories";
import { getBrands } from "../../store/reducers/brands";
import { getSliderData } from "../../store/reducers/slider";
import { getItems } from "../../store/reducers/items";
import CategoryCard from "../../components/main/home/CategoeyCard";

const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const brands = useSelector((state) => state.brands.brands);
  const slider = useSelector((state) => state.slider.sliderData);
  const items = useSelector((state) => state.items.items);
  //states
  const [screen_width, setScreenWidth] = useState(window.screen.width);

  //Dummy Data
  const carousel_pics = {
    intro: [
      "https://gazef.s3.amazonaws.com/FebApiTask/media/api/images/sliders/Mask_Group_4.png",
      "https://gazef.s3.amazonaws.com/FebApiTask/media/api/images/sliders/Mask_Group_4.png",
    ],
    flat: [carousel_flat, carousel_flat],
    blackFriday: [carousel_black_friday, carousel_black_friday],
  };

  useEffect(() => {
    dispatch(getCategories({ page: 1 }));
    dispatch(getBrands({ page: 1 }));
    dispatch(getSliderData());
    dispatch(
      getItems({
        page: 1,
      })
    );
    // eslint-disable-next-line
  }, []);

  window.addEventListener("resize", (event) => {
    setScreenWidth(window.screen.width);
  });

  return (
    <section className={classes.homeContainer}>
      <div className={classes.carousel}>
        <CustomSwiper space={30} slides={1}>
          {slider?.results?.map((slid, index) => {
            return (
              <SwiperSlide key={index}>
                <div className={classes.carousel_slide}>
                  <img
                    src={slid.image}
                    alt="carousel pic"
                    className={classes.carousel_pic}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </CustomSwiper>
      </div>

      <div className={classes.categories}>
        <p className={classes.title}>Main Categories</p>
        <div className={classes.cards}>
          {categories && (
            <CustomSwiper
              space={2}
              slides={screen_width < 950 ? 3 : 6}
              pagination={true}
              onReachEnd={() => {
                const next = categories?.next;
                const nextPage = next && next?.lastIndexOf("?page");
                nextPage &&
                  dispatch(
                    getCategories({
                      page: next?.[nextPage + 6],
                    })
                  );
              }}
            >
              {categories?.results?.map((category, index) => {
                return (
                  <SwiperSlide key={index}>
                    <CategoryCard category={category} />
                  </SwiperSlide>
                );
              })}
            </CustomSwiper>
          )}
        </div>
      </div>

      <div className={classes.carousel}>
        <CustomSwiper space={30} slides={1} pagination={true}>
          {carousel_pics.flat?.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className={classes.carousel_slide}
                  // style={{ backgroundImage: `url(${img})` }}
                >
                  <img
                    src={img}
                    alt="carousel pic"
                    className={classes.carousel_pic}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </CustomSwiper>
      </div>

      <div className={classes.brands}>
        <p className={classes.title}>Popular Brands</p>
        <div className={classes.cards}>
          <CustomSwiper
            space={2}
            slides={screen_width < 500 ? 2 : screen_width < 950 ? 3 : 6}
            pagination={true}
            onReachEnd={() => {
              const next = brands?.next;
              const nextPage = next && next?.lastIndexOf("?page");
              nextPage &&
                dispatch(
                  getBrands({
                    page: next?.[nextPage + 6],
                  })
                );
            }}
          >
            {brands?.results?.map((brand, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={classes.item}>
                    <div className={classes.brand_pic}>
                      <img
                        src={brand.image}
                        alt="brand pic"
                        className={classes.pic}
                      />
                    </div>
                    <p className={classes.text}>
                      Up to {brand.sale_percentage}%
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </CustomSwiper>
        </div>
      </div>

      <div className={classes.carousel}>
        <CustomSwiper space={30} slides={1} pagination={true}>
          {carousel_pics.blackFriday?.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className={classes.carousel_slide}
                  // style={{ backgroundImage: `url(${img})` }}
                >
                  <img
                    src={img}
                    alt="carousel pic"
                    className={classes.carousel_pic}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </CustomSwiper>
      </div>

      <div className={classes.featured_items}>
        <p className={classes.title}>Featured items</p>
        <div className={classes.cards}>
          <CustomSwiper
            space={2}
            slides={screen_width < 500 ? 2 : screen_width < 950 ? 3 : 5}

            pagination={true}
            onReachEnd={() => {
              const next = items?.next;
              const nextPage = next && next?.lastIndexOf("?page");
              nextPage &&
                dispatch(
                  getItems({
                    page: next?.[nextPage + 6],
                  })
                );
            }}
          >
            {items?.results?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProductCard item={item} />
                </SwiperSlide>
              );
            })}
          </CustomSwiper>
        </div>
      </div>

      <div className={classes.most_viewed}>
        <p className={classes.title}>Most Viewed items</p>
        <div className={classes.cards}>
          <CustomSwiper
            space={2}
            slides={screen_width < 500 ? 2 : screen_width < 950 ? 3 : 5}
            pagination={true}
            onReachEnd={() => {
              const next = items?.next;
              const nextPage = next && next?.lastIndexOf("?page");
              nextPage &&
                dispatch(
                  getItems({
                    page: next?.[nextPage + 6],
                  })
                );
            }}
          >
            {items?.results?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProductCard item={item} />
                </SwiperSlide>
              );
            })}
          </CustomSwiper>
        </div>
      </div>

      <div className={classes.shop_now}>
        <img src={shop_now_crocs} alt="crocs shop now" />
        <img src={shop_now_adidas} alt="adidas shop now" />
      </div>
    </section>
  );
};

export default HomePage;
