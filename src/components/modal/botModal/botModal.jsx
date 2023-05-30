import React from "react";
import { BotModalWrapper } from "../style2";
import { Modal } from "react-bootstrap";

const BotModal = ({ show, action }) => {
  const handleCloseModal = () => {
    action(false);
  };

  return (
    <Modal show={show}>
      <BotModalWrapper>
        <div className="modal">
          <div className="topPart">
            <div className="user">
              <div className="userNameDiv">
                <span className="userName">OR</span>
              </div>
              <div className="details">
                <span className="first">Olivia Rhye</span>
                <span className="second">oliviarhye@gmail.com</span>
              </div>
            </div>
            <div className="crossIconDiv">
              <img
                src="/assets/images/modal/cross.svg"
                className="crossIcon"
                onClick={handleCloseModal}
              />
            </div>
          </div>

          <div className="div-wrapper">
            <span>Bot Assigned</span>

            <div className="list-wrapper">
              <span>1. Transaction Flow</span>
              <span>2. Data entry and report</span>
              <span>3. Browser loading calculator</span>
            </div>
          </div>
        </div>
      </BotModalWrapper>
    </Modal>
  );
};

export default BotModal;
