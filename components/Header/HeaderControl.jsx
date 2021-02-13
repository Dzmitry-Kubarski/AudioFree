import Link from 'next/link'

import styled from 'styled-components'

import { vars } from 'styles/vars'

import ComparisonIcon from '@/SVG/ComparisonIcon'
import FavouritesIcon from '@/SVG/FavouritesIcon'
import CartIcon from '@/SVG/CartIcon'
import PhoneIcon from '@/SVG/PhoneIcon'

const HeaderControl = () => {
    return (
        <Control>
            <ControlItem>
                <Link href='/comparison'>
                    <ControlLink>
                        <ComparisonIcon />
                        <ControlCounter>1</ControlCounter>
                    </ControlLink>
                </Link>
            </ControlItem>

            <ControlItem>
                <Link href='/favorites'>
                    <ControlLink>
                        <FavouritesIcon />
                        <ControlCounter>23</ControlCounter>
                    </ControlLink>
                </Link>
            </ControlItem>

            <ControlItem>
                <Link href='/cart'>
                    <ControlLink>
                        <CartIcon />
                        <ControlCounter>55</ControlCounter>
                    </ControlLink>
                </Link>
            </ControlItem>

            <ControlItem className='mobailControl'>
                <a href='tel:88005519202'>
                    <PhoneIcon />
                </a>
            </ControlItem>

        </Control>
    )
}

export default HeaderControl

const Control = styled.div`
    display: flex;
    align-items: center; 

    @media (max-width: 750px) {
        margin-left: auto;  
    }
`

const ControlItem = styled.div`
    position: relative;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0px 5.81081px 15.1081px rgba(140, 121, 199, 0.3);
    border-radius: 50%;
    margin-right: 30px;

    &:last-child {
        margin-right: 5px;

        @media (max-width: 768px) {
            margin-right: 0;   
        }
    }    

    &.mobailControl {
        display: none;

        @media (max-width: 1120px) {
            display: flex;   
        }
    }     

    @media (max-width: 450px) {
        margin-right: 15px;   
    }
`

const ControlLink = styled.a`
    cursor: pointer;

    svg {
        width: 25px;
        height: 25px;
    }

    path {        
        transition: fill .2s linear;
    }

    &:hover {
        svg, path {
            fill: ${vars.colorGreen};
        }
    }
`

const ControlCounter = styled.span`
    position: absolute;
    right: -10px;
    top: -10px;
    width: 20px;
    height: 20px;
    background-color: #34C900;
    text-align: center;
    line-height: 20px;
    border-radius: 50%;
    color: white;

    @media (max-width: 490px) {
        width: 17px;
        height: 17px;
        font-size: 9px;
        line-height: 17px;   
    }
`