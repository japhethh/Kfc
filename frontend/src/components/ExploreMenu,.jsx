import { images } from "../assets/index";
import { useNavigate } from "react-router-dom";
const ExploreMenu = () => {
  const navigate = useNavigate();
  const list = [
    {
      title: "WHAT'S NEW",
      image: images.menu1,
    },
    {
      title: "FULLY LOADED BOX",
      image: images.menu2,
    },
    {
      title: "FAVOURITES",
      image: images.menu3,
    },
    {
      title: "MEALS FOR 2",
      image: images.menu4,
    },
    {
      title: "MEALS FOR 2",
      image: images.menu5,
    },
    {
      title: "MEALS FOR 2",
      image: images.menu6,
    },
  ];
  return (
    <div className=" oswald-call container mx-auto px-10 py-5">
      <h1 className="md:text-4xl text-2xl text-[#202124] uppercase font-bold py-4">
        explore our menu
      </h1>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
        {list.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col" onClick={() => navigate("/ourmenu")}>
              <img className="shadow-xl" src={item.image} alt="" />
              <div className="oswal-call pt-2">
                <h1 className="text-center font-bold text-[#202124]">
                  {item.title}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
