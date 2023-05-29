import { styled } from "styled-components";

export const MoreVertWrapper = styled.div`
  position: relative;
  width: 180px;
  background: #2c2b41;
  border: 1px solid #3b3e4e;
  border-radius: 10px;

  .more {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: flex-start;
    padding: 24px 16px;
    gap: 16px;

    .moreContent {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      color: #e0e0e0;
      display: flex;
      gap: 11.44px;
      width: 100%;
      border-bottom: 1px solid #3b3e4e;
      padding-bottom: 5px;
      background: #2C2B41;
      align-items: center;
    }
  }
`;
