const ExploreMenu = () => {
  const example = 0;
  const list = [
    {
      title: "WHAT'S NEW",
      image: example,
    },
    {
      title: "FULLY LOADED BOX",
      image: example,
    },
    {
      title: "FAVOURITES",
      image: example,
    },
    {
      title: "MEALS FOR 2",
      image: example,
    },
    {
      title: "MEALS FOR 2",
      image: example,
    },
    {
      title: "MEALS FOR 2",
      image: example,
    },
    {
      title: "MEALS FOR 2",
      image: example,
    },
  ];
  return (
    <div className=" oswald-call container mx-auto px-5">
      <h1 className="md:text-4xl text-2xl text-[#202124] uppercase font-bold py-4">
        explore our menu
      </h1>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
        {list.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col">
              <img
                src="https://cdn.tictuk.com/04d917c0-7bcd-6ced-acad-3e4db2bcbfd5/menus/BMEAL2.jpg"
                alt=""
              />
              <div className="oswal-call">
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
