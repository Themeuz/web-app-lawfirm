import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-slate-600">
      <div className="container p-12 flex justify-between">
        <span>All rights reserved © 2024 Thais Rosenau &bull; Powered by NextJS</span>
        <div className="links flex flex-nowrap text-gray-700">
          <a href="https://github.com/Themeuz" className="link">
            Created by Thameus
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;