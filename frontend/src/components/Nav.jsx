import React, { useState } from "react";
import logoDesktopHeader from "../assets/logoDesktopHeader.svg";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { Drawer, List, ListItem, ListItemText, Divider } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { images } from "../assets";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };
  const [signUpModal, setSignUpModal] = useState(false);

  return (
    <div className="oswald-call container mx-auto px-3 md:px-6 py-2 md:py-4  md:border-b-2  bg-white shadow-md">
      <div className="flex justify-between items-center">
        <Link to="/home">
          <div className="flex gap-3 justify-start items-center">
            <RxHamburgerMenu
              className="text-3xl  max-md:block md:hidden"
              onClick={() => toggleDrawer(true)}
            />
            <div>
              <img
                className="px-5 "
                width="170"
                src={logoDesktopHeader}
                alt="Logo Desk Top Header"
              />
            </div>
            <ul className="font-bold flex justify-center text-xl items-center gap-5 px-4 mx-3 cursor-pointer max-md:hidden text-[#202124]">
              <li>
                <Link to="/ourmenu">OUR MENU </Link>
              </li>
              <li>DEALS</li>
              <li>FIND A KFC</li>
            </ul>
          </div>
        </Link>
        <div>
          <div
            className="flex justify-center items-center gap-2 font-serif text-gray-400"
            onClick={() => setSignUpModal(true)}
          >
            <CgProfile className="text-4xl text-gray-400" />
            <h1 className="max-md:hidden">Sign in</h1>
          </div>
        </div>
      </div>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <div
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
          className="w-64 h-full bg-white p-4"
        >
          <div className="flex justify-between  items-center">
            <div onClick={() => toggleDrawer(false)}>
              <IoMdClose className="text-4xl" />
            </div>
            <img
              src={images.logoDesktopHeader}
              alt={images.logoDesktopHeader}
              className="w-24"
            />
            <h1></h1>
          </div>
          <List>
            <ListItem button>
              <Link to="ourMenu">
                <ListItemText
                  primary="OUR MENU"
                  sx={{ color: "red", fontSize: "24px", fontWeight: "bold" }}
                />
              </Link>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText
                primary="DEALS"
                sx={{ color: "red", fontSize: "24px", fontWeight: "bold" }}
              />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText
                primary="FIND A KFC"
                sx={{ color: "red", fontSize: "24px", fontWeight: "bold" }}
              />
            </ListItem>
          </List>
        </div>
        <div>
          <div className="h-[300px] w-full flex justify-center items-center">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full">
              <div></div>

              <div>
                <ul className="flex gap-4 justify-center text-sm text-gray-500">
                  <li className="rounded-full p-2 border border-gray-500">
                    <AiFillInstagram className="text-black/80" />
                  </li>
                  <li className="rounded-full p-2 border border-gray-500">
                    <FaFacebookF className="text-black/80" />
                  </li>
                  <li className="rounded-full p-2 border border-gray-500">
                    <RiTwitterXLine className="text-black/80" />
                  </li>
                  <li className="rounded-full p-2 border border-gray-500">
                    <FaYoutube className="text-black/80" />
                  </li>
                </ul>
                <div className="pt-5">
                  <h1 className="text-center text-black/80 font-semibold ">
                    Version 1.16.131
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
      {signUpModal && (
        <div>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white rounded-sm   shadow-lg p-6 w-4/6 max-w-md relative">
              <div
                className="absolute right-3 top-3"
                onClick={() => setSignUpModal(false)}
              >
                <IoMdClose className="text-gray-400 text-lg " />
              </div>
              <div className="w-4/6 mx-auto">
                <div className="flex justify-center items-center">
                  <img
                    className="w-24 py-3"
                    src={images.logoDesktopHeader}
                    alt={images.logoDesktopHeader}
                  />
                </div>

                <h2 className="text-xl font-bold mb-4 text-center text-gray-800 uppercase">
                  Sign in or create account with your phone number
                </h2>
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm/6  text-gray-900 font-mono font-semibold"
                  >
                    Mobile Number *
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block border border-gray-500 rounded-sm min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 w-full"
                  />
                  <p className="text-gray-800 font-sans font-normal text-sm py-2 ">
                    By signing in, you agree to our
                    <span className="underline">Privacy Policy</span> and{" "}
                    <span className="underline">Terms and Conditions</span>
                  </p>
                  <div className="flex justify-center items-center py-3">
                    <button className=" uppercase font-normal text-md rounded-full py-3 px-6 bg-gray-200 text-gray-400">
                      sign up and send code
                    </button>
                  </div>

                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
