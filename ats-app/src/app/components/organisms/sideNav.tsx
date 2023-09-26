import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import { HomeOutlined } from "@ant-design/icons";
import { ContainerOutlined } from "@ant-design/icons";
import Dp from "../atoms/dp";

function SideNav() {
  return (
    <div className="h-full w-20 shadow-lg flex items-center flex-col justify-between py-8">
      <div className="flex flex-col gap-16">
        <div>
          <MenuOutlined style={{ fontSize: "19px" }} />
        </div>
        <div className="flex flex-col gap-8">
          <HomeOutlined style={{ fontSize: "19px" }} />
          <ContainerOutlined style={{ fontSize: "19px" }} />
        </div>
      </div>
      <div className="">
        <Dp />
      </div>
    </div>
  );
}

export default SideNav;
