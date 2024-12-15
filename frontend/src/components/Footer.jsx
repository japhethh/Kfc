import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#202124] container mx-auto p-5">
      <div className="grid grid-cols-6">
        <div>
          <img
            className="w-10"
            src="https://cdn.tictuk.com/04d917c0-7bcd-6ced-acad-3e4db2bcbfd5/assets/logoDesktopFooter.svg"
            alt=""
          />
        </div>
        <div className="text-white/80">
          <h1 className="font-semibold">KFC</h1>
          <ul className="flex flex-col gap-4 font-semibold text-sm">
            <li>Online Exclusives</li>
            <li>Who We Are</li>
            <li>Careers</li>
            <li>Franchising</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
