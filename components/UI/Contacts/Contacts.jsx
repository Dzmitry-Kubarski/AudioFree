// libs
import styled, { css } from 'styled-components'

// icons
import PhoneIcon from '../../SVG/PhoneIcon'
import GeoIcon from '../../SVG/GeoIcon'
import EmailIcon from '../../SVG/EmailIcon'

const Contacts = ({ phone, geo, email, subTitle, title, number, darkIcon, shadow }) => {
    return (
        <Wrapper>
            <IconWrap darkIcon={darkIcon} shadow={shadow}>
                {phone && <PhoneIcon />}
                {geo && <GeoIcon />}
                {email && <EmailIcon />}
            </IconWrap>

            <div>
                <SubTitle phone={phone}>{subTitle}</SubTitle>
                {!email && <Title>{title}</Title>}
                {email && <TitleEmail href={`mailto:${title}`}>{title}</TitleEmail>}
                {number && <PhoneNumber href={`tel:${number}`}>{number}</PhoneNumber>}
            </div>
        </Wrapper>
    )
}

export default Contacts

// styles
const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

export const IconWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #97d413;
    border-radius: 50%;
    margin-right: 15px;

    svg, path {
        fill: white;
    }   

    ${props => props.darkIcon && css`
        svg, path {
            fill: #251C41;
        }
    `}

    ${props => props.shadow && css`
        background: #fff;
        box-shadow: 0 5.81081px 15.1081px rgb(140 121 199 / 30%);

        svg, path {
            fill: #251C41;
        }
    `}
`

const SubTitle = styled.span`
    display: block;
    font-size: 14px;
    margin-bottom: 5px;

    ${props => props.phone && css`
        font-size: 13px;
        color: #aeaeae;
        margin-bottom: 0;
    `}
`

const Title = styled.span`
    font-weight: 700;
`

const TitleEmail = styled.a`
    font-weight: 700;
    transition: color .3s linear;

    &:hover {
        color: #97d413;
    }
`

const PhoneNumber = styled.a`
    font-weight: 700;
    font-size: 24px;
    transition: color .3s linear;

    &:hover {
        color: #97d413;
    }
`