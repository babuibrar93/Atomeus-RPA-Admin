import React from "react";
import { MoreVertWrapper } from "./style";

const MoreVertModal = () => {
  return (
    <MoreVertWrapper>
      <div className="more">
        <div className="moreContent">
          <img src="assets/images/table/tick.svg" />
          Assign
        </div>
        <div className="moreContent">
          <img src="assets/images/auth/eye.svg" />
          View
        </div>
        <div className="moreContent">
          <img src="assets/images/table/delete.svg" />
          Delete
        </div>
      </div>
    </MoreVertWrapper>
  );
};

export default MoreVertModal;
