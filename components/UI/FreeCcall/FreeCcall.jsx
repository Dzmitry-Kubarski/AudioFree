// libs
import styled from 'styled-components'

// icons
import PhoneIcon from './../../SVG/PhoneIcon'

const FreeCcall = () => {
    return (
        <Phone>
            <PhoneIconWrap>
                <PhoneIcon />
            </PhoneIconWrap>

            <PhoneContent>
                <span>Бесплатный звонок по РФ</span>
                <a href="tel:+88005519202">8 800 551-92-02</a>
            </PhoneContent>
        </Phone>
    )
}

export default FreeCcall

// styles
const Phone = styled.div`
    display: flex;
    align-items: center;
`

const PhoneIconWrap = styled.div`
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0px 5.81081px 15.1081px rgba(140, 121, 199, 0.3);
    border-radius: 50%;
    margin-right: 15px;

    svg {
        width: 24px;
        height: 24px;
    }
`

const PhoneContent = styled.div`
    span {
        display: block;
        font-size: 13px;
        color: #AEAEAE
    }

    a {
        font-size: 24px;
        font-weight: bold;
        line-height: 28px;
        color: #535353;
    }
`