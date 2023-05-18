import { styled } from "styled-components";

export const ContactInfoWrapper = styled.div`
  padding: 32px 48px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 16px;

  border-right: 1px solid rgba(255, 255, 255, 0.13);

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    .title {
      font-weight: 700;
      font-size: 16px;
      line-height: 32px;
      color: #ffffff;
      text-align: center;
      margin: 0px;
    }

    .info {
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      text-align: center;
      letter-spacing: 0.2px;
      color: #ffffff;

      margin: 0px;
    }
  }
`;
