import { styled } from "styled-components";

export const DashboardWrapper = styled.div`
  display: grid;
  grid-template-columns: 272px calc(100% - 272px);

  @media only screen and (max-width: 1200px) {
    display: grid !important;
    grid-template-columns: 100% !important;
  }
`;
