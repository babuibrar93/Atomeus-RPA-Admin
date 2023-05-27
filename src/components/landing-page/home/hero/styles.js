import styled from 'styled-components';

export const HeroSection = styled.div`

    height: calc(100vh - 100px);
    padding-top: 96px;

    background-image: url(/assets/images/hero-bg.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    position: relative;
    overflow: hidden;

    .content{
        min-height: calc(100vh - 196px);

        display: grid;
        grid-template-columns: minmax(0, 590.18px) 1fr;
        gap: clamp(30px, 20vh, 98px);

        @media screen and (max-width:540px){
                gap: 20px !important;
        }

        .text-content{
            display: flex;
            flex-direction: column;
            justify-content: center;

            .heading{
                font-weight: 600;
                font-size: 72px;
                line-height: 90px;
                letter-spacing: 1px;
                color: #FFFFFF;
                margin-bottom: 18px;

                span{
                    color: #45E8E1;
                }
            }

            .text{
                font-weight: 400;
                font-size: 24px;
                line-height: 32px;
                letter-spacing: 0.2px;
                color: #F4F6F8;
            }

            .download_btn{
                background: #086A8F;
                border: 1px solid #338BC2;
                box-shadow: 0px 0px 10px rgba(75, 255, 247, 0.5);
                border-radius: 50px;

                margin-top: 40px;
                padding: 12px 33px;
                width: fit-content;
                font-weight: 400;
                font-size: 16px;
                line-height: 26px;
                color: #FFFFFF;
            }

            @media screen and (max-width:1024px){
                .download_btn{
                    margin-top: 20px;
                }
            }

            @media screen and (max-width:991px){
                .heading{
                    font-weight: 600;
                    font-size: 54px;
                    line-height: 66px;
                    margin-bottom: 16px;
                }

                .text{
                    font-size: 20px;
                    line-height: 28px;
                }
            }

            @media screen and (max-width:540px){
                .heading{
                    font-size: 38px;
                    line-height: 56px;
                }

                .text{
                    font-size: 16px;
                    line-height: 24px;
                }
            }


        }

        .main-image{
            /* position: relative; */
            &::before{
                content: '';
                position: absolute;
                height: 100%;
                width: 50vw;
                left: 50%;
                top: 0;
                bottom: 0;
                right: 0;
                background-image: url(/assets/images/main-hero.png);
                background-repeat: no-repeat;
                background-size: contain;
                background-position:left bottom;
                z-index: -1;
            }
        }
    }

`