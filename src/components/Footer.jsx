import React from "react";
import ContactCard from "./ContactCard";
const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 border-b-2">
        <div className="bg-white-100">
          <ContactCard
            type="Locate"
            title="Visit Us"
            content="Hoc Mon, HCM, VN"
          />
        </div>
        <div className="bg-white-100">
          <ContactCard type="Phone" title="Call Us" content="0379 512 673" />
        </div>
        <div className="bg-white-100">
          <ContactCard type="Clock" title="Working Hours" content="24/7" />
        </div>
        <div className="bg-white-100">
          <ContactCard
            type="Mail"
            title="Email Us"
            content="trhaidong2005@gmail.com"
          />
        </div>
      </div>

      <div className="text-lg w-full text-center py-4 text-gray-500 border-t">
        © 2025 <span className="font-bold text-black">ROSEJC</span>. All rights
        reserved.
      </div>
    </div>
  );
};
export default Footer;
