import { styled } from "styled-components";

export const FeaturesWrapper = styled.div`

    padding: 96px 0;

    .title1{
        font-weight: 500;
        font-size: 18px;
        line-height: 32px;
        color: #45E8E1;
        margin-bottom: 16px;
    }

    .title2{
        font-weight: 700;
        font-size: 46px;
        line-height: 64px;
        color: #FFFFFF;
        max-width: 700px;
    }

    .features-grid{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
        gap: 20px;

        .grid-card{
            .heading{
                display: grid;
                grid-template-columns: 68px 1fr;
                align-items: center;
                gap: 20px;
            }
        }
    }

`