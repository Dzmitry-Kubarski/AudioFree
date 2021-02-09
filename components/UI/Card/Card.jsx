// libs
import styled from 'styled-components'
import Rating from 'react-rating'

// icons
import StarEmpty from './../../SVG/StarEmpty'
import StarFull from './../../SVG/StarFull'

// components
import Button from './../Button/Button'
import CardHeader from './CardHeader'
import CardLabelSale from './CardLabelSale'
import CardLimitedDays from './CardLimitedDays'

const Card = ({ variant = 'header', item }) => {

    const ratingChanged = (newRating) => {
        console.log(newRating)
    }

    return (
        <CardWrapper>
            <CardInner>
                {variant === 'header' && <CardHeader />}
                {variant === 'sale' && <CardLabelSale count={item.discountCount} />}
                {variant === 'limited' && <CardLabelSale count={item.discountCount} />}

                <CardImgWrap>
                    <img src={item.imgUrl} alt={item.title} />
                </CardImgWrap>

                <div>
                    <CardTitle>{item.title}</CardTitle>

                    {variant === 'sale' && <CardText>{item.text}</CardText>}

                    {variant !== 'limited' &&
                        <CardRow>
                            <Rating
                                initialRating={item.ratingValue}
                                onChange={ratingChanged}
                                emptySymbol={<StarEmpty />}
                                fullSymbol={<StarFull />}
                            />

                            <CardPrice>{item.price} ₽</CardPrice>
                        </CardRow>}

                    {variant !== 'limited' &&
                        <CardBtns>
                            <Button>Купить в 1 клик</Button>
                            <Button variant='outline'>В корзину</Button>
                        </CardBtns>}

                    {variant === 'limited' && <CardLimitedDays countDay={item.daysCount} />}
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
    background: #FFFFFF;
    border-radius: 9px;

    @media (max-width: 1280px) {
        width: auto;
    }   
`

export const CardInner = styled.div`
    height: 100%;
    box-shadow: 0px 5px 18px rgba(0, 0, 0, 0.1);
    border-radius: 9px;
    padding: 12px 12px 25px;
`

export const CardImgWrap = styled.div`
    width: 200px;
    height: 200px;
    text-align: center;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;   
`

export const CardTitle = styled.h3`
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

export const CardText = styled.p`
    font-size: 12px;
    line-height: 14px;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const CardRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 450px) {
        flex-direction: column;   
    }
`

export const CardPrice = styled.span`
    font-weight: bold;
    font-size: 26px;
`

export const CardBtns = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;   
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

