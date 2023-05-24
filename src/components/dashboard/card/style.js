import { styled } from "styled-components";

export const CardsWrapper = styled.div`
  padding-top: 72px;
  padding-bottom: 30px;
  display: grid;
  grid-template-columns: 272px calc(100% - 272px);

  .cards {
    display: flex;
    flex-direction: row
    justify-content: space-between;
    padding: 24px;
    gap: 20px;
    z-index: -1;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    gap: 20px;
    background: #212036;
    border: 1px solid #99A2AC;
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
      color: #99A2AC;
    }

    .users {
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 150%;
        color: #F4F6F8;

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
      color: #1FCB4F;
    }

    .low-percentage {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #CB1F34;
    }

    .percentage-sub {
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: #99A2AC;
    }
  }

`;
