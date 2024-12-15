import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";

const MenuHeader = () => {
  return (
    <div className="container mx-auto px-5 p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex justify-center items-center oswald-call  ">
          <div className="mx-5 text-center">
            <h1 className="flex md:w-[500px] w-full  flex-wrap font-bold text-4xl text-[#202124]">
              Welcome. How would you like to order today?
            </h1>
          </div>
        </div>
        <div className="my-3 mx-5">
          <div>
            <div className="flex gap-3 oswald-call text-lg ">
              <button className="flex-1 font-bold bg-[#E4002B] py-1 px-6 text-white rounded-full">
                DELIVERY
              </button>
              <button className="flex-1 font-bold shadow-lg text-black bg-[#FFFFFF] py-2 px-6 rounded-full">
                PICKUP
              </button>
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <h1>Enter your addreess</h1>
              <div className="flex gap-2 mb-3">
                <button className="py-3 px-5 rounded-md bg-[#E4002B] text-white w-auto">
                  <FaLocationCrosshairs className="text-md" />
                </button>
                <input
                  className="rounded-sm w-full py-1 px-3 border border-gray-500"
                  type="text"
                />
              </div>
              <div>
                <h1 className="text-[#E4002B]">
                  <span>
                    <FaMapLocationDot />
                  </span>
                  Find address on the map
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;