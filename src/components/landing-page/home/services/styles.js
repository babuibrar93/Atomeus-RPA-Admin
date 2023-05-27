import { styled } from "styled-components";

export const ServicesWrapper = styled.div`
    overflow: hidden;
    padding-bottom: 78px;

    .main-image{
        position: relative;
        &::before{
            content: '';
            height: 180%;
            width: 150%;
            background-image: url(assets/images/home/services/ellipse-bg.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;

            position: absolute;
            top: -30%;
            left: -20%;
            z-index: -1;
        }

        img{
            height: 100%;
            width: 100%;
            object-fit: contain;
            max-width: 544px;
            display: block;
            margin: auto;
        }
    }

    .title{
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        text-transform: uppercase;
        color: #45E8E1;

        margin-bottom: 16px;
    }

    .title2{
        font-weight: 700;
        font-size: 46px;
        line-height: 64px;
        color: #FFFFFF;
        margin: 0px;

        @media screen and (max-width:768px){
            font-size: 32px;
            line-height: 42px;
        }
    }

    .services-grid{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(238px, 1fr));
        justify-content: space-between;
        gap: 57px;
        margin-top: 32px;

        @media screen and (max-width:1400px){
            gap: 24px;
        }

        .service-card{
            display: grid;
            grid-template-columns: 50px 1fr;
            align-items: center;
            gap: 8px;

            .para{
                font-weight: 400;
                font-size: 16px;
                line-height: 32px;
                color: #FFFFFF;
                margin: 0px;
            }
        }
    }

`