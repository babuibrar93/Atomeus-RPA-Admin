import React from "react";
import { DemoWrapper } from "./style";
import UserModal from "../modal/userModal/user";
import RobootModal from "../modal/robootModal/robootModal";
import BotModal from "../modal/botModal/botModal";
import AssignRobootModal from "../modal/assignRobootModal/assignRobootModal";

const Demo = () => {
  return (
    <DemoWrapper>
      {/* <UserModal /> */}
      {/* <RobootModal /> */}
      {/* <BotModal /> */}
      {/* <AssignRobootModal /> */}

      <div className="frame">
        <div>
          <p className="frameText">
            Lorem ipsum dolor sit amet consectetur. Venenatis <br /> scelerisque
            phasellus est nunc. Odio in mauris arcu <br /> malesuada maecenas.
            Id vitae feugiat enim id ut.
          </p>
        </div>
        <div>
          <button type="submit" className="submit-btn">
            Download Now
          </button>
        </div>
      </div>

      <div className="watchDemo">
        <span>WATCH DEMO</span>
        <img src="/assets/images/demo/demo.png" className="demoImg" />
      </div>
    </DemoWrapper>
  );
};

export default Demo;
