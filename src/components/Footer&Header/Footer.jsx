import React from "react";
import ContactCard from "../ContactCard";
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black lg:-mx-[300px]">
      <div className="xl:mx-[300px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 border-b-2 border-gray-300 dark:border-gray-700">
          <div className="bg-white dark:bg-transparent">
            <ContactCard
              type="Locate"
              title="Visit Us"
              content="Hoc Mon, HCM, VN"
            />
          </div>
          <div className="bg-white dark:bg-transparent">
            <ContactCard type="Phone" title="Call Us" content="0379 512 673" />
          </div>
          <div className="bg-white dark:bg-transparent">
            <ContactCard type="Clock" title="Working Hours" content="24/7" />
          </div>
          <div className="bg-white dark:bg-transparent">
            <ContactCard
              type="Mail"
              title="Email Us"
              content="trhaidong2005@gmail.com"
            />
          </div>
        </div>

        <div className="text-lg w-full text-center py-4 text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700">
          © 2025{" "}
          <span className="font-bold text-black dark:text-white">ROSEJC</span>.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
