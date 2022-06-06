import React from "react";
import HomeHeader from "../../shared/HomeHeader";

type HomeLayoutProps = {
  children: React.ReactElement;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="homeLayout">
      <HomeHeader />
      <>{children}</>
    </div>
  );
};

export default HomeLayout;
