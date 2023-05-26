import React from "react";
import { BackFoldWrapper } from "./style";
import RobootModal from "../modal/robootModal/robootModal";
import UserModal from "../modal/userModal/user";

const BackFold = () => {
  return (
    <BackFoldWrapper>
      <div className="backFold">
        {window.location.pathname === "/userManagement" ? (
          <UserModal />
        ) : (
          <RobootModal />
        )}
      </div>
    </BackFoldWrapper>
  );
};

export default BackFold;
