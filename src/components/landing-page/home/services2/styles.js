import { styled } from "styled-components";

export const Services = styled.div`
    padding-top:70px;
    padding-bottom: 57px;

    background: #212036;

    @media screen and (max-width:475px){
        padding-top:50px;
        padding-bottom: 50px;
    }

    .service_grid{
        display: grid;
        grid-template-columns: minmax(0, 654px) 450px;
        justify-content: space-between;
        align-items: center;
        gap: 24px;

        @media screen and (max-width:1200px){
            grid-template-columns: 1fr;

            .text-content{
                order: 2;
            }
            .image-animate{
                margin: auto;
            }
        }

        .text-content{
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

                margin-bottom: 16px;
                
                @media screen and (max-width:475px){
                    font-size: 36px;
                    line-height: 50px;
                }
            }

            .text{
                font-weight: 400;
                font-size: 18px;
                line-height: 32px;
                color: #FFFFFF;
            }

            .service-list{
                padding-left: 62px;

                display: flex;
                flex-direction: column;
                gap: 14px;


                .service-item{
                    position: relative;

                    &:not(:nth-child(1))::before{
                        content: '';
                        background-image: url(assets/images/home/services/check-black.svg);
                        background-size: 52px 52px;
                        height: 52px;
                        width: 52px;
                        position: absolute;
                        top: -9px;
                        left: -62px;
                    }

                    &:nth-child(1)::before{
                        content: '';
                        background-image: url(assets/images/home/services/check-colored.svg);
                        background-size: 52px 52px;
                        height: 52px;
                        width: 52px;
                        position: absolute;
                        top: -9px;
                        left: -62px;
                    }

                    &:hover::before{
                        background-image: url(assets/images/home/services/check-colored.svg);
                    }
                }


                .heading{
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 32px;
                    text-transform: capitalize;
                    color: #FFFFFF;
                    margin-bottom: 16px;
                }

                .info{
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 32px;
                    color: #FFFFFF;
                }
            }
        }

        .image-animate{
            max-width: 450px;
        }
    }

`