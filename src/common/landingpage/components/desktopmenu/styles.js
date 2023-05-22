import styled from "styled-components";

export const  DesktopMenu = styled.div`
    width: 100%;
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;

    transition: all .3s ease;

    &.scrolled{
        background-color: #212036;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    }

    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 96px;
        padding: 15px 0;

        @media screen and (max-width:991px){
            height: 78px;
        }

        .nav{
            display: flex;
            align-items: center;
            gap: 24px;

            @media screen and (max-width:1200px){
                display: none !important;
            }

            .nav-item{

                .nav-link{
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: 0.2px;
                    color: #FFFFFF;
                    position: relative;
                }

                .nav-link:hover,
                .nav-link.active {
                    background: #086A8F;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
                    color:white;
                }

                .nav-link:before,
                .nav-link.active:before {
                content: "";
                position: absolute;
                bottom: 12px;
                left: 12px;
                width: 12px;
                height: 12px;
                border: 3px solid #338BC2;
                border-width: 0 0 3px 3px;
                opacity: 0;
                transition: all 0.3s
                }

                .nav-link:hover:before,
                .nav-link.active:before {
                opacity: 1;
                bottom: -8px;
                left: -8px;
                }

                .nav-link:after,
                .nav-link.active:after {
                content: "";
                position: absolute;
                top: 12px;
                right: 12px;
                width: 12px;
                height: 12px;
                border: 3px solid #338BC2;
                border-width: 3px 3px 0 0;
                opacity: 0;
                transition: all 0.3s;
                }

                .nav-link:hover:after,
                .nav-link.active:after {
                opacity: 1;
                top: -8px;
                right: -8px;
                }

            }
        }

        .auth_icons{
            display: flex;
            align-items: center;
            gap:24px;

            @media screen and (max-width:1200px){
                display: none !important;
            }

            .separator{
                height: 24px;
                width: 1px;
                background-color: #ffffff;
            }

            .language_item{
                display: flex;
                align-items: center;
                gap: 7px;

                span{
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 24px;
                    /* or 171% */

                    display: flex;
                    align-items: center;
                    color: #FFFFFF;
                }
            }
        }

        .hamburger{

            display: none;

            width: 35px;
            height: 30px;
            position: relative;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .5s ease-in-out;
            -moz-transition: .5s ease-in-out;
            -o-transition: .5s ease-in-out;
            transition: .5s ease-in-out;
            cursor: pointer;

            @media screen and (max-width:1200px){
                display: block !important;
            }

            span{
                display: block;
                position: absolute;
                height: 4px;
                width: 100%;
                background: #086A8F;
                border-radius: 9px;
                opacity: 1;
                left: 0;
                -webkit-transform: rotate(0deg);
                -moz-transform: rotate(0deg);
                -o-transform: rotate(0deg);
                transform: rotate(0deg);
                -webkit-transition: .25s ease-in-out;
                -moz-transition: .25s ease-in-out;
                -o-transition: .25s ease-in-out;
                transition: .25s ease-in-out;
            }

            span:nth-child(1) {
            top: 0px;
            }

            span:nth-child(2) {
            top: 12px;
            }

            span:nth-child(3) {
            top: 24px;
            }

            &.open span:nth-child(1) {
            top: 12px;
            -webkit-transform: rotate(135deg);
            -moz-transform: rotate(135deg);
            -o-transform: rotate(135deg);
            transform: rotate(135deg);
            }

            &.open span:nth-child(2) {
            opacity: 0;
            left: -40px;
            }

            &.open span:nth-child(3) {
            top: 12px;
            -webkit-transform: rotate(-135deg);
            -moz-transform: rotate(-135deg);
            -o-transform: rotate(-135deg);
            transform: rotate(-135deg);
            }
        }
    }
`