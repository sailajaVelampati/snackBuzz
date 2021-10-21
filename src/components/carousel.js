import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HeroBanner from "./HeroBanner";
import { fetchData } from "../components/API";
import Skeleton from "@material-ui/lab/Skeleton";

import ProductCard from "./productCard";

const MultiElementCarousel = (props) => {
  const { data } = props;
  return (
    <Carousel
      data-testid="multiCarousel"
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 6,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 4,
          partialVisibilityGutter: 30,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {data.map((productDetail, index) => {
        return <ProductCard data={productDetail} />;
      })}
    </Carousel>
  );
};

const FullWidthCarousel = (props) => {
  // This caroisel is for banner
  // example for without redux saga
  const [heroImage, setHeroImage] = useState(null);
  useEffect(() => {
    fetchData("http://localhost:3000/HeroBanner", pageData);
    // eslint-disable-next-line
  }, []);
  const pageData = (result) => {
    if (result) {
      setHeroImage(result);
    }
  };

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {heroImage ? (
        heroImage.map((details, index) => {
          return (
            <div data-testid={`fullCarouselShow-${details.id}`} key={index}>
              <HeroBanner data={details} />
            </div>
          );
        })
      ) : (
        <div>
          <Skeleton />
          <Skeleton animation={false} />
          <Skeleton animation="wave" />
        </div>
      )}
    </Carousel>
  );
};
export { FullWidthCarousel, MultiElementCarousel };
