// core
import Link from 'next/link'

// libs
import styled from 'styled-components'

// utils
import { vars } from '../../../styles/vars'

// icons
import AppleIcon from './../../SVG/AppleIcon'
import SamsungIcon from './../../SVG/SamsungIcon'
import XiaomiIcon from './../../SVG/XiaomiIcon'
import HuaweiIcon from './../../SVG/HuaweiIcon'
import SaleIcon from './../../SVG/SaleIcon'

// images
import moreBtnImg from '../../../images/models/more.png'

const Tabs = () => {
    return (
        <TabsWrapper>
            <TabsList>
                <TabsItem>
                    <TabsBtn type='button'>
                        <TabsIconWrap>
                            <AppleIcon />
                        </TabsIconWrap>
                        Для iphone
                    </TabsBtn>
                </TabsItem>

                <TabsItem>
                    <TabsBtn type='button'>
                        <TabsIconWrap>
                            <SamsungIcon />
                        </TabsIconWrap>
                        Для Samsung
                    </TabsBtn>
                </TabsItem>

                <TabsItem>
                    <TabsBtn type='button'>
                        <TabsIconWrap>
                            <XiaomiIcon />
                        </TabsIconWrap>
                        Для Xiaomi
                    </TabsBtn>
                </TabsItem>

                <TabsItem>
                    <TabsBtn type='button'>
                        <TabsIconWrap>
                            <HuaweiIcon />
                        </TabsIconWrap>
                        Для Huawei
                    </TabsBtn>
                </TabsItem>

                <TabsItem>
                    <TabsBtn type='button'>
                        <TabsIconWrap>
                            <SaleIcon />
                        </TabsIconWrap>
                        Со скидкой
                    </TabsBtn>
                </TabsItem>

                <TabsItem className='more'>
                    <Link href='/more'>
                        <TabsMore>Смотреть больше <br /> моделей</TabsMore>
                    </Link>
                </TabsItem>
            </TabsList>
        </TabsWrapper>
    )
}

export default Tabs

// styles
const TabsWrapper = styled.div`
    width: 100%;
    flex-shrink: 0;

    @media (max-width: 1280px) {
        max-width: 100%;   
        margin-right: 0;
        margin-bottom: 15px;
    }
`

export const TabsList = styled.ul`

    
`

export const TabsItem = styled.li`
    position: relative;  
    background-color: #fff;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
    border-radius: 9px;
    margin-bottom: 15px;
    transition: box-shadow .2s linear;   

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0px;
        height: 100%;
        width: 5px;
        background-color: #DFDFDF;
        border-radius: 0px 8px 8px 0px;
        transition: background-color .2s linear;
    }

    &:hover {
        box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.07);

        &::after {
           background-color: #816BC2;
        }

        svg {
            fill: #8D77C8;
        }
    }    

    &.more {
        &::after {
           display: none;
        }
    }

    @media (max-width: 1280px) {
        width: calc(33.33333% - 30px);
        margin-left: 15px;
        margin-right: 15px;   
    }
`

const TabsBtn = styled.button`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    min-height: 55px;
    font-weight: 500;
    font-size: 14px;
    background: transparent;
    color: ${vars.colorBlack};
    text-align: left;
    cursor: pointer;
    padding-right: 15px;

    svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        fill: #C4C4C4;
        transition: fill .2s linear;
    } 

    @media (max-width: 1280px) {
        min-height: 100px;   
    }

    @media (max-width: 940px) {
        min-height: 55px;   
    }
`

const TabsIconWrap = styled.div`
    width: 39px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 12px;
    margin-right: 24px;

    @media (max-width: 450px) {
        margin-right: 15px;   
    }
`

const TabsMore = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    font-weight: 500;
    font-size: 14px;
    color: #fff;
    border-radius: 9px;
    box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.1);
    background-image: url(${moreBtnImg});
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;

    @media (max-width: 940px) {
        min-height: 55px; 
        background-position: right bottom;
    }
`