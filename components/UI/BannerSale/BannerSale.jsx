// core
import Link from 'next/link'

// libs
import styled from 'styled-components'

// utils
import { vars } from '../../../styles/vars'

// images
import bannerImg from '../../../images/discount/sale.png'

// components
import Button from './../Button/Button';

const BannerSale = () => {
    return (
        <BannerWrapper>
            <BannerInner>
                <BannerImgWrap>
                    <img src={bannerImg} alt="Наушники Bluetooth Baseus Encok D01 NGD01-09 (red)" />
                </BannerImgWrap>

                <div>
                    <BannerTitle>Распродажа</BannerTitle>
                    <BannerText >
                        За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по
                        ошибке, некоторые - намеренно
                    </BannerText>

                    <BannerBtnWrap>
                        <Link href="/about" passHref>
                            <Button variant='green' full medium>В каталог скидок</Button>
                        </Link>
                    </BannerBtnWrap>
                </div>
            </BannerInner>

            <BannerShadow />
        </BannerWrapper>
    )
}

export default BannerSale

// styles
const BannerWrapper = styled.div`
    position: relative;
    z-index: 99;
    width: 270px;
    background: #fff;
    border-radius: 9px;
`

const BannerInner = styled.div`
    background-color: ${vars.colorPurple};
    height: 100%;
    box-shadow: 0 5px 18px rgb(0 0 0 / 10%);
    border-radius: 9px;
    padding: 25px 25px;
`

const BannerImgWrap = styled.div`
    width: 180px;
    height: 195px;
    text-align: center;
    overflow: hidden;
    margin-right: auto;
`

const BannerTitle = styled.h3`
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 20px;
`

const BannerText = styled.p`
    font-size: 14px;
    line-height: 20px;
    color: white;
`

const BannerBtnWrap = styled.div`
    width: 100%;
    margin-top: 30px;
`

const BannerShadow = styled.div`
    position: relative;
    z-index: -1;
    width: 95%;
    height: 8px;
    background-color:${vars.colorPurple};
    border-radius: 0 0 9px 9px;
    box-shadow: 0 5px 18px rgb(0 0 0 / 10%);
    margin: 0 auto -8px;
`
