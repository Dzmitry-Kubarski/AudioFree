import Link from 'next/link'

import styled from 'styled-components'

import logoSvg from 'images/logo.svg'

const Logo = ({ full }) => {
    return (
        <Link href='/'>
            <LogoWrapper>
                <img src={logoSvg} alt="Логотип магазина Audio-shop" />

                <LogoText>
                    AudioFree
                    {full && <span>Интернет магазин беспроводных наушников по РФ</span>}
                </LogoText>
            </LogoWrapper>
        </Link>
    )
}

export default Logo

const LogoWrapper = styled.a`
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
        margin-right: 9px;
    }
`

const LogoText = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: white;
    display: flex;
    align-items: center;

    span {
        position: relative;
        font-size: 13px;
        font-weight: 400;
        line-height: 15px; 
        padding-left: 10px;
        margin-left: 7px;

        &:before {
            position: absolute;
            display: block;
            content: '';
            left: 0;
            height: 15px;
            width: 2px;
            background-color: #fff;
        }  
        
        @media (max-width: 1100px) {
            display: none;   
        }
    }    
`