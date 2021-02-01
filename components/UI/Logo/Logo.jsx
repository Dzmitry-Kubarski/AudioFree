// core
import Link from 'next/link'

// libs
import styled from 'styled-components'

// images
import logoSvg from '../../../images/logo.svg'

const Logo = () => {
    return (
        <Link href='/'>
            <LogoWrapper>
                <img src={logoSvg} alt="Логотип Audio-shop" />

                <LogoText>
                    AudioFree
                    <span> | Интернет магазин беспроводных наушников по РФ</span>
                </LogoText>
            </LogoWrapper>
        </Link>
    )
}

export default Logo

// styles
const LogoWrapper = styled.a`
    display: flex;
    align-items: center;

    img {
        margin-right: 9px;
    }
`

const LogoText = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: white;

    span {
        font-size: 13px;
        font-weight: 400;
        line-height: 15px;        
    }
`