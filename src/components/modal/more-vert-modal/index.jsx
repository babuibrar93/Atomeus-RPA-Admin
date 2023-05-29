import React, { useState } from "react";
import { MoreVertWrapper } from "./style";
import AssignRobootModal from "../assignRobootModal/assignRobootModal";

const MoreVertModal = ({action}) => {
  const [open, setOpen] = useState(false);

  const handleAssignModal = (arg) => {
    setOpen(arg);
    open ? action(true) : action(false)
  };
  return (
    <MoreVertWrapper>
      {open && <AssignRobootModal show={true} action={handleAssignModal} />}

      <div className="more">
        <button className="moreContent" onClick={() => handleAssignModal(true)}>
          <img src="assets/images/table/tick.svg" />
          Assign
        </button>
        <button className="moreContent">
          <img src="assets/images/auth/eye.svg" />
          View
        </button>
        <button className="moreContent">
          <img src="assets/images/table/delete.svg" />
          Delete
        </button>
      </div>
    </MoreVertWrapper>
  );
};

export default MoreVertModal;
