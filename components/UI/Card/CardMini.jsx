// core
import Link from 'next/link'
import { useState } from 'react'

// libs
import styled from 'styled-components'
import Rating from 'react-rating'

// utils
import { vars } from '../../../styles/vars'

// icons
import StarEmpty from './../../SVG/StarEmpty'
import StarFull from './../../SVG/StarFull'

const CardMini = ({ item }) => {
    const [value, setValue] = useState(3)

    const ratingChanged = (newRating) => {
        console.log(newRating)
    }

    return (
        <CardWrapper>
            <CardInner>
                <CardImgWrap>
                    <img src={item.imgUrl} alt='Наушники Bluetooth Baseus Encok D01 NGD01-09 (red)' />
                </CardImgWrap>

                <div>
                    <Link href='/test'>
                        <CardLink>
                            <CardTitleWrap>
                                {item.title}
                            </CardTitleWrap>
                        </CardLink>
                    </Link>

                    <CardStarsWrap>
                        <Rating initialRating={value} onChange={ratingChanged} emptySymbol={<StarEmpty />} fullSymbol={<StarFull />} />
                    </CardStarsWrap>

                    <CardPrice>{item.price} ₽</CardPrice>
                </div>
            </CardInner>

            <CardShadow />
        </CardWrapper>
    )
}

export default CardMini

// styles
const CardWrapper = styled.div`
    width: 100%;
    position: relative;
    z-index: 99;
    border-radius: 9px;
`

const CardInner = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    box-shadow: 0px 0px 10.5556px rgba(0, 0, 0, 0.05);
    border-radius: 9.5px;
    padding: 18px 20px 18px 5px;
`

const CardImgWrap = styled.div`
    width: 200px;
    height: auto;
    text-align: center;
    overflow: hidden;
    margin-right: 15px;
`

const CardTitleWrap = styled.h3`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;    
`

const CardLink = styled.a`
    cursor: pointer;
    transition: color .3s linear;

    &:hover {
        color: ${vars.colorGreen};
    }
`

const CardStarsWrap = styled.div`
    margin-bottom: 10px;   

    svg {
        margin-right: 7px;        
    }
`

const CardPrice = styled.span`
    font-weight: 700;
    font-size: 26px;
`

const CardShadow = styled.div`
    position: relative;
    z-index: -1;
    width: 97.5%;
    height: 8px;
    border-radius: 0 0 9.5px 9.5px;
    box-shadow: 0px 0px 10.5556px rgba(0, 0, 0, 0.05);
    margin: 0 auto -8px;
    background-color: #fff;
`