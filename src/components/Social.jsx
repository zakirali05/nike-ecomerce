import React from "react";

const SocialLink = ({ icon }) => {
  return (
    <>
      <img
        src={icon}
        alt="icon/social"
        className="w-6 h-6 flex items-center cursor-pointer md:w-5 md:h-5 sm:w-4 sm:h-4 transition-all duration-200 hover:scale-110"
      />
    </>
  );
};

export default SocialLink;
