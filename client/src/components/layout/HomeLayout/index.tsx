import React from "react";
import HomeFooter from "../../shared/HomeFooter";
import HomeHeader from "../../shared/HomeHeader";

type HomeLayoutProps = {
  children?: React.ReactElement;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="homeLayout">
      <HomeHeader />
      <>{children}</>
      <HomeFooter />
    </div>
  );
};

export default HomeLayout;
