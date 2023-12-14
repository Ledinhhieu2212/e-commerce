import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import "react-alice-carousel/lib/alice-carousel.css";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Button } from "@mui/material";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 5 },
  };

  const syncActiveIndex = ({ item }) => {
    setActiveIndex(item);
  };

  function renderPrevButton() {
    return (
      <Button
        variant="contained"
        className="z-50 bg-white"
        sx={{
          position: "absolute",
          top: "8rem",
          left: "0rem",
          transform: "translateX(-50%) rotate(90deg)",
          bgcolor: "white",
        }}
        aria-label="Prev"
      >
        <KeyboardArrowRight
          sx={{ transform: "rotate(90deg)", color: "black" }}
        />
      </Button>
    );
  }

  function renderNextButton() {
    return (
      <Button
        variant="contained"
        className="z-50 bg-gray-100"
        sx={{
          position: "absolute",
          top: "8rem",
          right: "0rem",
          transform: "translateX(50%) rotate(90deg)",
          bgcolor: "white",
        }}
        aria-label="Next"
      >
        <KeyboardArrowLeft
          sx={{ transform: "rotate(90deg)", color: "black" }}
        />
      </Button>
    );
  }

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);
  return (
    <div className="border">
      <h2 className="text-2xl font-extralight text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="relative p-5 overflow-hidden">
        <AliceCarousel
          disableDotsControls
          // disableButtonsControls
          items={items}
          responsive={responsive}
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
          renderNextButton={activeIndex <= items.length && renderNextButton}
          renderPrevButton={activeIndex >= 0 && renderPrevButton}
        />
      </div>
    </div>
  );
};
export default HomeSectionCarousel;
