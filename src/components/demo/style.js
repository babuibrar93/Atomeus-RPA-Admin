import { styled } from "styled-components";

export const DemoWrapper = styled.div`
  padding: 130px;
  display: flex;
  flex-direction: column;
  gap: 78px;

  .frame {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    gap: 24px;
    background: #212036;
    box-shadow: 0px 2px 16px rgba(75, 255, 247, 0.5);
    border-radius: 8px;

    .frameText {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      text-align: center;
      letter-spacing: 0.2px;
      color: #f4f6f8;
    }

    .submit-btn {
      background: #086a8f;
      border: 1px solid #338bc2;
      box-shadow: 0px 0px 10px rgba(75, 255, 247, 0.5);
      border-radius: 50px;
      padding: 12px 34.5px;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      color: #ffffff;
    }
  }

  .watchDemo {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 18px;
    align-items: center;

    .demoImg {
      width: 500px;
      height: 350.61px;

      @media screen and (max-width:580px){
        width: 380px;
      height: 390.61px;
    }
    }
  }
`;
