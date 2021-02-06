// libs
import styled, { css } from 'styled-components'
import Rating from 'react-rating'

// utils
import { vars } from '../../../styles/vars'

// icons
import CheckedIcon from './../../SVG/CheckedIcon'
import FavouritesIcon from './../../SVG/FavouritesIcon'
import ComparisonIcon from './../../SVG/ComparisonIcon'
import StarEmpty from './../../SVG/StarEmpty'
import StarFull from './../../SVG/StarFull'

// components
import Button from './../Button/Button'
import LabelSale from '../LabelSale/LabelSale'
import LabelDays from './../LabelDays/LabelDays'
import ButtonIcon from './../ButtonIcon/ButtonIcon'

const Card = ({ variant = 'header', item }) => {

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
                        <LabelSale>-{item.discountCount}%</LabelSale>
                    </CardLabelSaleWrap>
                }

                {variant === 'limited' &&
                    <CardLabelSaleWrap>
                        <LabelSale>-{item.discountCount}%</LabelSale>
                    </CardLabelSaleWrap>
                }

                <CardImgWrap>
                    <img src={item.imgUrl} alt={item.title} />
                </CardImgWrap>

                <div>
                    <CardTitle>{item.title}</CardTitle>

                    {variant === 'sale' &&
                        <CardText>
                            {item.text}
                        </CardText>}

                    {variant !== 'limited' &&
                        <CardRow>
                            <Rating
                                initialRating={item.ratingValue}
                                onChange={ratingChanged}
                                emptySymbol={<StarEmpty />}
                                fullSymbol={<StarFull />}
                            />

                            <CardPrice>1 950 ₽</CardPrice>
                        </CardRow>}

                    {variant !== 'limited' && <CardBtns>
                        <Button>Купить в 1 клик</Button>
                        <Button variant='outline'>В корзину</Button>
                    </CardBtns>}

                    {variant === 'limited' &&
                        <CardLimiedDays>
                            <LabelDays days={item.daysCount} />
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

