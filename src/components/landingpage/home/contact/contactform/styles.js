import { styled } from "styled-components";

export const ContactFormWrapper = styled.div`

.title{
    font-weight: 700;
    font-size: 48px;
    line-height: 64px;
    color: #FFFFFF;
    margin-bottom: 16px;
}

.contact-text{
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #FFFFFF;
}

.form_wrapper{

    margin-top: 27px;
    display: flex;
    flex-direction: column;
    gap: 24px;


    .text-field,
    .email-field{
        background-color: #212036;
        border: 1px solid #17162C;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
        width: 100%;
        padding: 12px 16px;

        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
        outline:none !important;
    }

    .textarea{
        height: 109px;
        width: 100%;
        background: #212036;
        border: 1px solid #17162C;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
        padding: 12px 16px 12px 16px;
        color: #ffffff;
        resize: none;
        outline:none !important;
    }

    .submit-btn{
        background: #086A8F;
        border: 1px solid #338BC2;
        box-shadow: 0px 0px 10px rgba(75, 255, 247, 0.5);
        border-radius: 50px;
        padding: 12px 34.5px;

        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #FFFFFF;

        width: fit-content;
    }
}
`