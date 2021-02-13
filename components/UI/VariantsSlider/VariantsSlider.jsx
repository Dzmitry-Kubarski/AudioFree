import Link from 'next/link'

import Swiper from 'react-id-swiper'
import styled from 'styled-components'

const VariantsSlider = ({ data }) => {
    const params = {
        slidesPerView: 'auto',
        spaceBetween: 0,
        grabCursor: true,
    }

    return (
        <SliderWrapper>
            <Swiper {...params}>
                {data.map((item) =>
                    <SlideWrap key={item.title} style={{ background: `url(${item.imgUrl})` }}>
                        <Link href={item.hrefUrl} target='_blank' rel='noopener noreferrer'>
                            <SlideLink>
                                <SlideTitle>{item.title}</SlideTitle>
                            </SlideLink>
                        </Link>
                    </SlideWrap>
                )}
            </Swiper>
        </SliderWrapper>
    )
}

export default VariantsSlider

const SlideTitle = styled.h3`
    position: absolute;
    max-width: 145px;
    font-weight: 900;
    font-size: 25.7998px;
    line-height: 26px;
    color: #fff;
`

const SliderWrapper = styled.div`    

    .swiper-wrapper {
        padding-left: 30px;
        padding-right: 20px;

        @media (max-width: 768px) {
            padding-left: 15px;   
        }
    }    
`

const SlideWrap = styled.div`
    position: relative;
    width: 100%;
    min-height: 330px;
    max-width: 330px;
    min-height: 330px;
    border-radius: 5px;
    opacity: 1;
    transition: opacity .2s linear;
    margin-right: 30px;

    &:hover {
        opacity: .5;
    } 
    
    &:last-child {
        margin-right: 0;
    } 
    
    &:nth-child(1) {
        ${SlideTitle} {
            left: 40px;
            top: 40px;
        }
    }

    &:nth-child(2) {
        ${SlideTitle} {
            right: 25px;
            bottom: 40px;
        }
    }

    &:nth-child(3) {
        ${SlideTitle} {
            top: 35px;
            right: 35px;
        }
    }

    &:nth-child(4) {
        ${SlideTitle} {
            top: 45px;
            left: 35px;
        }
    }

    &:nth-child(5) {
        ${SlideTitle} {
            top: 40px;
            left: 35px;
        }
    }

    &:nth-child(6) {
        ${SlideTitle} {
            top: 40px;
            left: 40px;
        }
    }

    @media (max-width: 450px) {
        min-height: 297px;
        max-width: 297px;
        min-height: 297px; 
        margin-right: 15px;
    }
`

const SlideLink = styled.a`
    display: block;
    width: 100%;
    max-width: 330px;
    min-height: 330px;

    @media (max-width: 450px) {
        min-height: 297px;
        max-width: 297px;
        min-height: 297px; 
    }
`
