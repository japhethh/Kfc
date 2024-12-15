// Import the images
import { images } from "../../assets"; // Ensure the path to the `assets` file is correct
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const MuiCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hides the left and right arrows
  };

  // Updated slides array with images for desktop and mobile
  const slides = [
    {
      id: 1,
      title: "Slide 1",
      description: "This is the first slide",
      desktopImage: images.slide1,
      mobileImage: images.mobileSlide1,
    },
    {
      id: 2,
      title: "Slide 2",
      description: "This is the second slide",
      desktopImage: images.slide2,
      mobileImage: images.mobileSlide2,
    },
    {
      id: 3,
      title: "Slide 3",
      description: "This is the third slide",
      desktopImage: images.slide3,
      mobileImage: images.mobileSlide3,
    },
  ];

  // Check for mobile screen size using Material-UI's useMediaQuery
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      sx={{ minWidth: "329px", maxWidth: "auto", mx: "auto", mt: 0 }}
      className="rounded-none"
    >
      <Slider {...settings}>
        {slides.map((slide) => (
          <Box
            key={slide.id}
            sx={{
              position: "relative",
              textAlign: "center",
            }}
          >
            {/* Display Mobile or Desktop Image Based on Screen Size */}
            <img
              className="object-cover"
              src={isMobile ? slide.mobileImage : slide.desktopImage}
              alt={slide.title}
              style={{
                width: "100%",
                height: isMobile ? "350px" : "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default MuiCarousel;
