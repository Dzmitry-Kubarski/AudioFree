// libs
import styled, { css } from 'styled-components'
import ReactStars from 'react-stars'

// utils
import { vars } from '../../../styles/vars'

// icons
import CheckedIcon from './../../SVG/CheckedIcon'
import FavouritesIcon from './../../SVG/FavouritesIcon'
import ComparisonIcon from './../../SVG/ComparisonIcon'

// images
import cardImg from '../../../images/models/img-1.png'

// components
import Button from './../Button/Button'
import LabelSale from '../LabelSale/LabelSale'
import LabelDays from './../LabelDays/LabelDays'
import ButtonIcon from './../ButtonIcon/ButtonIcon'

const Card = ({ variant = 'header' }) => {

    const ratingChanged = (newRating) => {
        console.log(newRating)
    }

    return (
        <CardWrapper>
            <CardInner>
                {variant === 'header' &&
                    <CardHeader>
                        <CardLabel>
                            В наличии
                            <CheckedIcon />
                        </CardLabel>

                        <CardBtnWrap>
                            <ButtonIcon>
                                <ComparisonIcon />
                            </ButtonIcon>
                        </CardBtnWrap>

                        <CardBtnWrap>
                            <ButtonIcon>
                                <FavouritesIcon />
                            </ButtonIcon>
                        </CardBtnWrap>
                    </CardHeader>}

                {variant === 'sale' &&
                    <CardLabelSaleWrap>
                        <LabelSale>15%</LabelSale>
                    </CardLabelSaleWrap>
                }

                {variant === 'limited' &&
                    <CardLabelSaleWrap>
                        <LabelDays days='50'>15%</LabelDays>
                    </CardLabelSaleWrap>
                }

                <CardImgWrap>
                    <img src={cardImg} alt="Наушники Bluetooth Baseus Encok D01 NGD01-09 (red)" />
                </CardImgWrap>

                <div>
                    <CardTitle>Наушники Bluetooth Baseus Encok D01 NGD01-09 (red)</CardTitle>

                    {variant === 'sale' &&
                        <CardText>
                            Многие думают, что Lorem Ipsum - взятый с потолка
                            псевдо-латинский набор слов, но это не совсем так.
                        </CardText>}

                    {variant !== 'limited' &&
                        <CardRow>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={19}
                                color1='#D4D4D4'
                                color2='#FFC107'
                            />
                            <CardPrice>1 950 ₽</CardPrice>
                        </CardRow>}

                    {variant !== 'limited' && <CardBtns>
                        <Button>Купить в 1 клик</Button>
                        <Button variant='outline'>В корзину</Button>
                    </CardBtns>}

                    {variant === 'limited' &&
                        <CardLimiedDays>
                            <LabelDays days='50'>15%</LabelDays>
                            <p>До конца акции <br /> на этот товар осталось:</p>
                        </CardLimiedDays>}
                </div>
            </CardInner>

            <CardShadow />
        </CardWrapper>
    )
}

export default Card

// styles
const CardWrapper = styled.div`
    position: relative;
    z-index: 99;
    width: 100%;
    max-width: 270px;
    background: #FFFFFF;
    border-radius: 9px;

    @media (max-width: 1280px) {
        width: auto;
    }   
`

const CardInner = styled.div`
    height: 100%;
    box-shadow: 0px 5px 18px rgba(0, 0, 0, 0.1);
    border-radius: 9px;
    padding: 12px 12px 25px;
`

const CardHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`

const CardLabelSaleWrap = styled.div`
    position: absolute;
    right: 15px;
    top: 15px;
`

const CardLabel = styled.div`
    position: relative;
    font-size: 12px;
    color: ${vars.colorBlack};
    text-align: center;
    border: 1px solid #DCDCDC;
    border-radius: 14px;
    padding: 5px 12px 5px 25px;   
    margin-right: auto;

    svg {
        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
        width: 14px;
        height: 14px;
    }
`

const CardBtnWrap = styled.div`
    margin-right: 10px;

    &:last-child {
        margin-right: 0;
    }
`

const CardImgWrap = styled.div`
    width: 200px;
    height: 200px;
    text-align: center;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px; 
`

const CardTitle = styled.h3`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;

    a {
        transition: color .2s linear;
    }

    &:hover {
        a {
            color: #97d413;
        }
    }
`

const CardText = styled.p`
    font-size: 12px;
    line-height: 14px;
    margin-top: 20px;
`

const CardRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const CardPrice = styled.span`
    font-weight: bold;
    font-size: 26px;
`

const CardBtns = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
`

const CardLimiedDays = styled.div`
    display: flex;
    align-items: center;
    border-top: 1px solid #ebebeb;
    padding-top: 20px;
    
    p {
        font-size: 12px;
        line-height: 14px;
        margin-left: 20px;
    }
`

const CardShadow = styled.div`
    position: relative;
    z-index: -1; 
    width: 95%;
    height: 8px;
    border-radius: 0px 0px 9px 9px;
    box-shadow: 0px 5px 18px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    background-color: #fff;
    margin-bottom: -8px;
`

