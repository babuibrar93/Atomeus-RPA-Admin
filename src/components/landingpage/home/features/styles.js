import { styled } from "styled-components";

export const FeaturesWrapper = styled.div`

    padding: 96px 0;

    @media screen and (max-width:768px){
        padding: 50px 0;
    }

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
        margin: 0px;

        @media screen and (max-width:768px){
            font-size: 36px;
            line-height: 44px;
        }
    }

    .features-grid{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(356px, 1fr));
        gap: 20px;

        margin-top: 30px;

        @media screen and (max-width:375px){
            grid-template-columns: 1fr;
        }

        .grid-card{
            transition: all .3s ease;
            border-radius: 8px;
            padding: 8px;
            &:hover{
                background-color: #212036;
            }

            .heading{
                display: grid;
                grid-template-columns: 68px 1fr;
                align-items: center;
                gap: 20px;
                margin-bottom: 16px;

                .card_title{
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 32px;
                    color: #FFFFFF;
                    margin: 0px;

                    @media screen and (max-width:475px){
                        font-size: 18px;
                        line-height: 24px;
                    }
                }
            }

            .text-content{
                padding:8px 8px 8px 89px;
                margin: 0px;

                @media screen and (max-width:475px){
                    padding:8px;
                }
            }
        }
    }

`