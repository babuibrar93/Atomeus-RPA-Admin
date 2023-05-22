import { styled } from "styled-components";

export const MarqueeWrapper = styled.div`
    height: 100px;
    background-color: #212036;

    .swiper-slide{
        height: 100px;

        img{
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
    }
`