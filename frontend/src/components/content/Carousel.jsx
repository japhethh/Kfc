// Import the images
import { images } from "../../assets"; // Ensure the path to the `assets` file is correct
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";

const MuiCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Updated slides array with images
  const slides = [
    {
      id: 1,
      title: "Slide 1",
      description: "This is the first slide",
      image: images.slide1,
    },
    {
      id: 2,
      title: "Slide 2",
      description: "This is the second slide",
      image: images.slide2,
    },
    {
      id: 3,
      title: "Slide 3",
      description: "This is the third slide",
      image: images.slide3,
    },
  ];

  return (
    <Box sx={{ maxWidth: "1600px", mx: "auto", mt: 4 }}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <Box
            key={slide.id}
            sx={{
              position: "relative",
              textAlign: "center",
            }}
          >
            {/* Slide Image */}
            <img
              src={slide.image}
              alt={slide.title}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
            {/* Overlay Title and Description */}
            {/* <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "16px",
                borderRadius: "8px",
              }}
            ></Box> */}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default MuiCarousel;
