import { styled } from "styled-components";

export const BlogsWrapper = styled.div`
    padding-top:72px;
    padding-bottom: 30px;

    .title{
        font-weight: 500;
        font-size: 18px;
        line-height: 32px;
        text-align: center;
        text-transform: uppercase;
        color: #45E8E1;
    }

    .title2{
        font-weight: 700;
        font-size: 46px;
        line-height: 64px;
        text-align: center;
        color: #FFFFFF;

        max-width: 708px;
        margin: auto;
    }

    .blogs-grid{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
        gap: 20px;

        margin-top: 40px;

        @media screen and (max-width:375px){
            grid-template-columns:1fr;
        }

        .blog-card{
            padding: 16px;
            background: #212036;
            border-radius: 12px;
            transition: all .3s ease-in;

            &:hover{
                transform: translateY(-3px);
            }

            .image{
                height: 296px;
                width: 100%;
                overflow: hidden;
                border-radius: 12px 12px 0px 0px;

                img{
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    object-position: center;
                }

            }

            .blog-title{
                font-weight: 600;
                font-size: 16px;
                line-height: 32px;
                color: #FFFFFF;

                display: -webkit-box;
                display: -moz-box;
                display: box;
                -webkit-line-clamp: 2;
                -moz-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
                -moz-box-orient: vertical;
                box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;

                margin: 13px 0;
            }

            .blog-para{
                font-weight: 400;
                font-size: 16px;
                line-height: 32px;
                color: #E0E0E0;

                display: -webkit-box;
                display: -moz-box;
                display: box;
                -webkit-line-clamp: 5;
                -moz-line-clamp: 5;
                line-clamp: 5;
                -webkit-box-orient: vertical;
                -moz-box-orient: vertical;
                box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                margin: 0px;
            }

            .link{
                font-weight: 400;
                font-size: 12px;
                line-height: 32px;
                text-transform: uppercase;
                color: #45E8E1;
            }
        }
    }

`