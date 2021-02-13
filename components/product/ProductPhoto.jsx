import React, { useState } from 'react'

import styled from 'styled-components'

import LabelInStock from '@/UI/Labels/LabelInStock/LabelInStock'
import LabelSale from '@/UI/Labels/LabelSale/LabelSale'

const mockImagesItems = [
    '/productPage/item-1.png',
    '/productPage/item-2.jpg',
    '/productPage/item-3.jpg',
    '/productPage/item-4.jpg',
    '/productPage/item-5.jpg',
]

const mockTabsImgItems = [
    '/productPage/item-1.png',
    '/productPage/item-2.jpg',
    '/productPage/item-3.jpg',
    '/productPage/item-4.jpg',
    '/productPage/item-5.jpg',
]

const ProductPhoto = () => {
    const [activeTab, setActiveTab] = useState(1)

    const selectActiveTab = (index) => () => {
        setActiveTab(index)
    }

    return (
        <PhotoBlock>
            {mockImagesItems.map((item, index) =>
                <Photo key={index} className={activeTab === index ? 'active' : ''}>
                    <img src={item}></img>

                    <LabelInStockWrap>
                        <LabelInStock />
                    </LabelInStockWrap>

                    <LabelSaleWrap>
                        <LabelSale count={16} />
                    </LabelSaleWrap>
                </Photo>
            )}

            <Tabs>
                {mockTabsImgItems.map((item, index) =>
                    <Tab key={index}
                        className={activeTab === index ? 'active' : ''}
                        onClick={selectActiveTab(index)}
                    >
                        <img src={item} />
                    </Tab>)}
            </Tabs>
        </PhotoBlock>
    )
}

export default ProductPhoto

const PhotoBlock = styled.div`    
    width: 100%;
    max-width: 469px;    
    margin-right: 30px;  

    @media (max-width: 940px) {
        max-width: 100%;    
        margin-right: 0;
        margin-bottom: 40px;
    } 

    @media (max-width: 480px) {
        margin-bottom: 0;
    }
`

const Photo = styled.div`
    max-width: 469px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    box-shadow: 0px 0px 10.5556px rgba(0, 0, 0, 0.05);
    border-radius: 9.5px;
    overflow: hidden;    
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 12px;
    display: none;

    img {
        max-width: 427px;

        @media (max-width: 768px) {
            max-width: 300px;
        }

        @media (max-width: 480px) {
            max-width: 220px;
        }
    }

    &.active {
        display: flex;
    }

    @media (max-width: 940px) {
        max-width: 100%;    
    } 
`

const LabelInStockWrap = styled.div`
    position: absolute;
    left: 15px;
    top: 30px;

    @media (max-width: 480px) {
        top: 10px;
        left: 10px;
    }
`

const LabelSaleWrap = styled.div`
    position: absolute;
    right: 15px;
    top: 20px;

    @media (max-width: 480px) {
        right: 10px;
        top: 10px;
    }
`

const Tabs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 480px) {
        display: none;
    }
`

const Tab = styled.div`
    width: 79px;
    height: 79px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    box-shadow: 0px 0px 10.5556px rgba(0, 0, 0, 0.05);
    border-radius: 9.5px;
    cursor: pointer;

    img {
        max-width: 51px;
    }

    &.active {
        border: 2px solid tomato;
    }
`