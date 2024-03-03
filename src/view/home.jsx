import React from "react";

// import component
import DesktopView from "./desktopView";
import FAB from "./fab";
import MobileView from "./mobileView";

const Home = () => {
  return (
    <div className="bg-[#0F0F0F]">
      <DesktopView />
      <MobileView />
      <FAB />
    </div>
  );
};

export default Home;
