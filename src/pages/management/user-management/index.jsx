import React, { useState } from "react";
import UserManagement from "../../../components/management/userManagement/userManagement";
import Navbar from "../../../common/navbar/navbar";
import Sidebar from "../../../common/sidebar/sidebar";
import { ManageUserWrapper } from "./style";

const ManageUser = () => {
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
        <UserManagement />

      </div>
      </ManageUserWrapper>
        
    </div>
  );
};

export default ManageUser;
