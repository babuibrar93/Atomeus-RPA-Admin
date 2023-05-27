import React from "react";
import Modal from "react-bootstrap/Modal";
import UserModal from "./userModal/user";
import RobootModal from "./robootModal/robootModal";

const ModalComponent = ({ show, action }) => {
  return (
    <>
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {window.location.pathname === "/robootManagement" ? (
          <RobootModal action={action} />
        ) : (
          <UserModal action={action} />
        )}
      </Modal>
    </>
  );
};

export default ModalComponent;
