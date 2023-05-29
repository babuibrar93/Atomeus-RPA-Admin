import { styled } from "styled-components";

export const CardsWrapper = styled.div`
  display: flex;
  padding-top: 72px;
  padding-bottom: 30px;

  .cards {
    display: flex;
    justify-content: space-between;
    padding: 24px 3px 3px 36px;
    gap: 20px;
    z-index: -1;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    gap: 20px;
    background: #212036;
    border: 1px solid #99a2ac;
    border-radius: 8px;
  }

  .card-content {
    display: flex;
    align-items: center;
    gap: 120px;

    .left-side {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .heading {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      color: #99a2ac;
    }

    .users {
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 150%;
      color: #f4f6f8;
    }

    .bottom {
      display: flex;
      gap: 5px;
      align-items: center;
    }

    .percentage {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #1fcb4f;
    }

    .low-percentage {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #cb1f34;
    }

    .percentage-sub {
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: #99a2ac;
    }
  }
`;
