// libs
import styled from 'styled-components'

// utils
import { vars } from '../../styles/vars'

// icons
import ArrowRightIcon from './../SVG/ArrowRightIcon'

const FooterCallback = () => {
    return (
        <Wrapper>
            <Title>Закажите обратный звонок:</Title>

            <Form>
                <FormInput type="tel" placeholder="Ваш номер телефона" />

                <FormButton className="callback__btn" type="button">
                    <ArrowRightIcon />
                </FormButton>
            </Form>
        </Wrapper>
    )
}

export default FooterCallback

// styles

const Wrapper = styled.div`
    margin-top: 50px;
`

const Title = styled.div`
    font-size: 12px;
    margin-bottom: 7px;
`

const Form = styled.form`
    position: relative;
    min-width: 210px;
`

const FormInput = styled.input`
    background: transparent;
    border: none;
    color: #fff;
    border: 1px solid #C4C4C4;
    border-radius: 9px;
    padding: 15px;
    padding-right: 50px;

    &::placeholder {
        font-size: 11px;
        color: #9B9B9B;
    }
`

const FormButton = styled.button`
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 40px;
    border-radius: 0 9px 9px 0;
    background-color: ${vars.colorGreen};
    transition: background-color .2s linear;
    cursor: pointer;

    svg {
        width: 10px;
        height: 10px;
    }

    &:hover {
        background-color: #fff;
    }
`
