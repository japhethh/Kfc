import React, { useState, useRef, useEffect } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { images } from "../assets/index";
import { LiaCartArrowDownSolid } from "react-icons/lia";

const ScrollTabs = () => {
  const list = [
    {
      title: "WHAT'S NEW",
      image: images.menu1,
      items: [
        {
          image:
            "https://cdn.tictuk.com/04d917c0-7bcd-6ced-acad-3e4db2bcbfd5/menus/BMEAL2.jpg",
          name: "8-Pc BUCKET MEAL",
          price: 280.0,
        },
        {
          image:
            "https://cdn.tictuk.com/04d917c0-7bcd-6ced-acad-3e4db2bcbfd5/menus/TWISTERCBO.jpg",
          name: "TWISTER COMBO",
          price: 280.0,
        },
        {
          image:
            "https://cdn.tictuk.com/04d917c0-7bcd-6ced-acad-3e4db2bcbfd5/menus/FAMBOWLCBO.jpg",
          name: "FAMOUS BOWL MEAL",
          price: 280.0,
        },
        {
          image:
            "https://cdn.tictuk.com/04d917c0-7bcd-6ced-acad-3e4db2bcbfd5/menus/BUCK10.jpg",
          name: "BUCKET OF 10",
          price: 280.0,
        },
        {
          image:
            "https://cdn.tictuk.com/04d917c0-7bcd-6ced-acad-3e4db2bcbfd5/menus/SIGSWCBO.jpg",
          name: "ZICKER COMBO",
          price: 280.0,
        },
        {
          image:
            "https://cdn.tictuk.com/04d917c0-7bcd-6ced-acad-3e4db2bcbfd5/menus/2PCFLBOXCBO.jpg",
          name: "2-PC FULLY LOADED MEAL",
          price: 280.0,
        },
      ],
    },
    {
      title: "FULLY LOADED BOX",
      image: images.menu2,
      items: [
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
      ],
    },
    {
      title: "FAVOURITES",
      image: images.menu3,
      items: [
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
      ],
    },
    {
      title: "MEALS FOR 2",
      image: images.menu4,
      items: [
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
      ],
    },
    {
      title: "BOWLS, PASTAS, & MORE",
      image: images.menu5,
      items: [
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
      ],
    },
    {
      title: "BUCKET COMBOS",
      image: images.menu6,
      items: [
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
      ],
    },
    {
      title: "SANDWICHES",
      image: images.menu6,
      items: [
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
      ],
    },
    {
      title: "SNACKS",
      image: images.menu6,
      items: [
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
      ],
    },
    {
      title: "DRINKS & DESSERTS",
      image: images.menu6,
      items: [
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
      ],
    },
    {
      title: "SIDES",
      image: images.menu6,
      items: [
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
      ],
    },
    {
      title: "DEALS",
      image: images.menu6,
      items: [
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
      ],
    },
    {
      title: "WHAT'S NEW",
      image: images.menu6,
      items: [
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
      ],
    },
    {
      title: "FULLY LOADED BOX",
      image: images.menu6,
      items: [
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
        {
          image: images.menu1,
          name: "Bucket of 10",
          price: 280.0,
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef(list.map(() => React.createRef())); // Dynamically create refs for each section

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    sectionRefs.current[newValue]?.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(
            (section) => section.current === entry.target
          );
          if (index !== -1) setActiveTab(index);
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((sectionRef) => {
      if (sectionRef.current) observer.observe(sectionRef.current);
    });

    return () => {
      sectionRefs.current.forEach((sectionRef) => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
      });
    };
  }, []);

  return (
    <div className="">
      <Box>
        {/* Tabs Component */}
        <div className="sticky max-md:top-[248px] md:top-[303px] left-0 z-40 bg-white border-2 border-r-0 border-l-0  border-gray-300 shadow-md text-[#202124]">
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              position: "sticky",
              top: 0,
              backgroundColor: "#fff",
              zIndex: 1000,
            }}
          >
            {list.map((item, index) => (
              <Tab
                key={index}
                label={item.title}
                sx={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  color: "#202124",
                }}
              />
            ))}
          </Tabs>
        </div>

        {/* Sections */}
        <div className="sticky top-[305px] md:w-4/6 max-md:container mx-auto ">
          <Box>
            {list.map((item, index) => (
              <Box
                key={index}
                ref={sectionRefs.current[index]}
                sx={{
                  border: "1px solid #ddd",
                  padding: "20px",
                  minHeight: "1200px",
                }}
              >
                <div className="container mx-auto oswald-call px-5 py-5 ">
                  <h1
                    className="md:text-3xl text-2xl text-[#202124] uppercase font-bold py-4
                  "
                  >
                    {item.title}
                  </h1>
                  <div className="grid md:grid-cols-4 grid-cols-2 gap-5 ">
                    {item.items.map((subItem, subIndex) => (
                      <div key={subIndex}>
                        <div className="flex flex-col  shadow-xl md:h-[350px] h-[200px]">
                          <img
                            className=""
                            src={subItem.image}
                            alt={subItem.name}
                          />

                          <div className="flex flex-col justify-between items-center pt-2 m-3 oswald-call h-full">
                            <h1 className="md:text-lg text-sm text-center font-bold text-[#202124] ">
                              {subItem.name}
                            </h1>
                            <div className="w-full md:mb-10 mb-5">
                              <h1 className="md:text-lg text-sm text-center font-normal font-mono text-[#202124] ">
                                ₱{subItem?.price}
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="flex justify-center items-center">
                            <button className="absolute md:bottom-[-25px] bottom-[-20px]  md:text-4xl text-3xl md:px-10 px-7 py-1 md:py-2 rounded-full text-white bg-[#E4002B]">
                              <LiaCartArrowDownSolid />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Box>
            ))}
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default ScrollTabs;
