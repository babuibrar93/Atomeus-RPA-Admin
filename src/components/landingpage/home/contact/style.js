import { styled } from "styled-components";

export const ContactWrapper = styled.div`

    padding: 110px 0;

    @media screen and (max-width:991px){
        padding: 50px 0;
    }

    .contact-us{
        display: grid;
        grid-template-columns: 293px minmax(0, 742px);
        justify-content: space-between;
        gap: 24px;

        @media screen and (max-width: 991px){
            grid-template-columns:1fr;
        }

    }

`