import { styled } from "styled-components";

export const ContactInfoWrapper = styled.div`
  padding: 32px 48px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 16px;

  border-right: 1px solid rgba(255, 255, 255, 0.13);

  @media screen and (max-width:991px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-right: none;
  }

  @media screen and (max-width:520px){
      grid-template-columns: 1fr;
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    @media screen and (max-width:991px){
      &:nth-child(1){
        grid-column: 1/3;
      }
    }

    @media screen and (max-width:520px){
      &:nth-child(1){
        grid-column: unset;
      }
    }

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
