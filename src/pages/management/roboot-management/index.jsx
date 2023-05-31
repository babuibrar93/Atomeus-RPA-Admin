import React, { useState } from "react";
import { ManageUserWrapper } from "../user-management/style";
import Navbar from "../../../common/navbar/navbar";
import Sidebar from "../../../common/sidebar/sidebar";
import RobootManagement from "../../../components/management/robootManagement/robootManagement";

const ManageRoboot = () => {
  const [layout, setLayout] = useState("");

  const handburger = (arg) => {
    setLayout(arg);
  };
  return (
    <div className={layout ? "mainWrapper collapsed-layout" : "mainWrapper"}>
      <ManageUserWrapper>
      <div>
        <Sidebar action={handburger} />
      </div>
        <div>
          <Navbar />
          <RobootManagement />
        </div>
      </ManageUserWrapper>
    </div>
  );
};

export default ManageRoboot;
