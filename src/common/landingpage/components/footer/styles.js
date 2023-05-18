import styled from 'styled-components';

export const FooterSection = styled.div`

    padding: 32px 0;
    background-color: #212036;

    .footer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;

        @media screen and (max-width: 768px){
            flex-direction: column;
        }

        .privacy{
            margin: 0px;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            letter-spacing: 0.1px;
            color: rgba(255, 255, 255, 0.87);
            text-align: center;
        }

        .social-icons{
            display: flex;
            align-items: center;
            gap: 16px;
        }
    }

`