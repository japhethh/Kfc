import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const Footer = () => {
  return (
    <div className="bg-[#202124] p-5">
      <div className="grid grid-cols-5 gap-4 max-md:hidden">
        <div>
          <div className="flex justify-center ">
            <img
              className="w-10 h-auto"
              src="https://cdn.tictuk.com/04d917c0-7bcd-6ced-acad-3e4db2bcbfd5/assets/logoDesktopFooter.svg"
              alt=""
            />
          </div>
        </div>
        <div>
          <div>
            <h1 className="font-bold text-sm text-white">KFC</h1>
          </div>
          <ul className="flex flex-col gap-4 text-white/80 font-semibold text-sm">
            <li>Online Exclusives</li>
            <li>Who We Are</li>
            <li>Careers</li>
            <li>Franchising</li>
          </ul>
        </div>
        <div>
          <div>
            <h1 className="font-bold text-sm text-white">Contact KFC</h1>
          </div>
          <ul className="flex flex-col gap-4 text-white/80 font-semibold text-sm">
            <li>Contact Us</li>
            <li>Find a KFC</li>
          </ul>
        </div>
        <div>
          <div>
            <h1 className="font-bold text-sm text-white">Policies</h1>
          </div>
          <ul className="flex flex-col gap-4 text-white/80 font-semibold text-sm">
            <li>Disclaimer</li>
            <li>Terms and Conditions</li>
            <li>Privary Policy</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <div>
            <h1 className="font-bold text-sm text-white">KFC</h1>
          </div>
          <ul className="flex flex-col gap-4 text-white/80 font-semibold text-sm">
            <li>Online Exclusives</li>
            <li>Who We Are</li>
            <li>Careers</li>
            <li>Franchising</li>
          </ul>
        </div>
      </div>
      <div className="max-md:block hidden">
        <Accordion
          sx={{
            backgroundColor: "#202124",
            color: "white",
            borderTop: "1px solid #ccc",
            borderBottom: "1px solid #ccc",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            KFC
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            backgroundColor: "#202124",
            color: "white",
            borderTop: "1px solid #ccc",
            borderBottom: "1px solid #ccc",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            CONTACT KFC
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="h-[100px] w-full flex justify-center items-center">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4  w-full">
          <div></div>
          <div>
            <h1 className="text-center text-white/80 font-semibold ">
              Version 1.16.131
            </h1>
          </div>
          <div>
            <ul className="flex gap-4 justify-center text-sm text-gray-500">
              <li className="rounded-full p-2 border border-gray-500">
                <AiFillInstagram className="text-white/80" />
              </li>
              <li className="rounded-full p-2 border border-gray-500">
                <FaFacebookF className="text-white/80" />
              </li>
              <li className="rounded-full p-2 border border-gray-500">
                <RiTwitterXLine className="text-white/80" />
              </li>
              <li className="rounded-full p-2 border border-gray-500">
                <FaYoutube className="text-white/80" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
