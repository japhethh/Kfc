import logoDesktopHeader from "../assets/logoDesktopHeader.svg";
import { CgProfile } from "react-icons/cg";

const Nav = () => {
  return (
    <div className="oswald-call container mx-auto px-5 my-1 py-4 border-b-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <div>
            <img
              className="px-5 "
              width="180"
              src={logoDesktopHeader}
              alt="Logo Desk Top Header"
            />
          </div>
          <ul className="font-bold flex justify-center items-center gap-5 px-4 cursor-pointer">
            <li>OUR MENU</li>
            <li>DEALS</li>
            <li>FIND A KFC</li>
          </ul>
        </div>
        <div>
          <div className="flex justify-center items-center gap-2 font-serif text-gray-400">
            <CgProfile className="text-4xl text-gray-400" />
            <h1>Sign in</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
