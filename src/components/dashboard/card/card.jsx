import React from "react";
import { userDetail } from "../../../constants/landingpage";
import { Container } from "react-bootstrap";
import { CardsWrapper } from "./style";

const Card = () => {
  return (
    <CardsWrapper>
      <div>
        
      </div>
        <div className="cards">
          {userDetail?.map((user) => {
            return (
              <div className="card" key={user.id}>
                <div className="card-content">
                  <div className="left-side">
                    <div className="heading"> {user.heading}</div>
                    <div className="users"> {user.totalUser}</div>
                    <div className="bottom">
                      <img src={user.arrow} alt="arrow image" />
                      <span
                        className={
                          user.percentage && user.percentage > "10"
                            ? "percentage"
                            : "low-percentage"
                        }
                      >
                        {" "}
                        {user.percentage}
                        {"%"}
                      </span>
                      <div className="percentage-sub"> vs last month</div>
                    </div>
                  </div>
                  <div className="image">
                    <img src={user.icon} alt="user image" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </CardsWrapper>
  );
};

export default Card;
