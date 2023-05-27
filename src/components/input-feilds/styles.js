import { styled } from "styled-components";

export const ContactFormWrapper = styled.div`

.form_wrapper{
    display: flex;
    flex-direction: column;
    // gap: 24px;


    .text-field,
    .email-field{
        background-color: #212036;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
        width: 100%;
        padding: 12px 16px;
        border: 1.5px solid #64748B;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
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