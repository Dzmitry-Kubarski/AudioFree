import React, { useState } from 'react'
import Link from 'next/link'

import styled from 'styled-components'
import Rating from 'react-rating'

import StarEmpty from '@/SVG/StarEmpty'
import StarFull from '@/SVG/StarFull'

import BreadCrumbs from '@/UI/BreadCrumbs/BreadCrumbs'
import Checkbox from '@/UI/Checkbox/Checkbox'
import Button from '@/UI/Button/Button'


const ProductInfo = ({ cardItemObj }) => {
    const [value, setValue] = useState(3)

    const ratingChanged = (newRating) => {
        console.log(newRating)
    }

    return (
        <ProductInfoBlock>
            <BreadCrumbsWrap>
                <BreadCrumbs>
                    <>
                        <Link href='/'>
                            <a>Главная /</a>
                        </Link>

                        <Link href='/products'>
                            <a>Каталог /</a>
                        </Link>
                    </>

                    <span>Bluetooth Baseus Encok</span>
                </BreadCrumbs>
            </BreadCrumbsWrap>

            <CardTitle>{cardItemObj.title}</CardTitle>
            <RatingWrap>
                <Rating
                    initialRating={value}
                    onChange={ratingChanged}
                    emptySymbol={<StarEmpty />}
                    fullSymbol={<StarFull />}
                />
                <RatingCount>(4.8 из 5)</RatingCount>
            </RatingWrap>

            <Price>
                {cardItemObj.price} ₽
                <span>{cardItemObj.oldPrice} ₽</span>
            </Price>

            <Quantity>
                <QuantityTitle>Количество:</QuantityTitle>
                <QuantityInner>
                    <button>+</button>
                    <b>5</b>
                    <button>-</button>
                </QuantityInner>
            </Quantity>

            <Color>
                <ColorTitle>Цвет:</ColorTitle>
                <ColorRow>
                    <CheckboxWrap>
                        <Checkbox id='black' name='black' label='Чёрный' />
                    </CheckboxWrap>

                    <CheckboxWrap>
                        <Checkbox id='white' name='white' label='Белый' />
                    </CheckboxWrap>
                </ColorRow>
            </Color>


            <BtnsRow>
                <BtnWrap className='buy'>
                    <Button full medium>Купить в 1 клик</Button>
                </BtnWrap>

                <BtnWrap className='addCart'>
                    <Button variant='outline' medium full>В корзину</Button>
                </BtnWrap>
            </BtnsRow>
        </ProductInfoBlock>
    )
}

export default ProductInfo

const ProductInfoBlock = styled.div`
    width: 100%;
    max-width: 366px;
    margin-right: 30px;

    @media (max-width: 1180px) {
        width: auto;
        margin-right: 0;
    }

    @media (max-width: 940px) {        
        margin-bottom: 40px;
        max-width: 100%;
    } 
`

const BreadCrumbsWrap = styled.div`
    margin-bottom: 15px;

    @media (max-width: 1180px) {
        display: none;
    }
`

const CardTitle = styled.h1`
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 20px;

    @media (max-width: 480px) {
        font-size: 18px;
        line-height: 25px;
    }
`

const RatingWrap = styled.div`
    display: flex;
    align-items: center;   
    margin-bottom: 30px; 
`

const RatingCount = styled.span`
    font-weight: 500;
    font-size: 14px;
    margin-left: 11px;
`

const Price = styled.div`
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 30px;

    span {
        position: relative;
        font-weight: 200;
        font-size: 19px;
        color: #CBCBCB;
        margin-left: 10px;

        &:after {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            height: 2px;
            background-color: #CBCBCB;
        }
    }
`

const Quantity = styled.div`
    margin-bottom: 20px;    
`

const QuantityTitle = styled.span`
    display: block;
    font-weight: 500;
    font-size: 14px;
    color: #353535;
    margin-bottom: 10px;
`

const QuantityInner = styled.div`
    max-width: 140px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFFFFF;
    border: 0.8px solid #E3E3E3;
    border-radius: 12px;

    button {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        color: #737373;
        font-size: 19px;
        flex-shrink: 0;
        cursor: pointer;
    }

    b { 
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 19px;
        color: #737373;
        border-left: 1px solid #F5F5F5;
        border-right: 1px solid #F5F5F5;      
    }
`

const Color = styled.div`
    margin-bottom: 40px;
`

const ColorTitle = styled(QuantityTitle)``

const ColorRow = styled.div`
    display: flex;
    align-items: center;
`

const CheckboxWrap = styled.div`
    margin-right: 15px;

    &:last-child {
        margin-right: 0;
    }
`

const BtnsRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1180px) {
        justify-content: flex-start;
    }

    @media (max-width: 360px) {
        flex-direction: column;
    }
`

const BtnWrap = styled.div`
    width: 100%;

    &.buy {
        max-width: 195px;
        margin-right: 25px;
    }

    &.addCart {
        max-width: 142px;
    }  

    @media (max-width: 360px) {
        &.buy, &.addCart {
            max-width: 100%;
        }

        &.buy {
            margin-bottom: 15px;
            margin-right: 0;
        }
    }  
`