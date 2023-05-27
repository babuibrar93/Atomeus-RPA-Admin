import { styled } from "styled-components";

export const MoreVertWrapper = styled.div`

position: relative;
width: 180px;
// max-height: 137px;
background: #2C2B41;
border: 1px solid #3B3E4E;
border-radius: 10px;

.more {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: flex-start;
    padding: 24px 16px;
    gap: 16px;
    
    .moreContent {
        display: flex;
        gap: 11.44px;
        width: 100%;
        border-bottom: 1px solid #3B3E4E;
        padding-bottom: 5px;
    }
}
`