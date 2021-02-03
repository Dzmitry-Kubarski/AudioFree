// core
import styled from 'styled-components'

const Form = ({ title, subTitle, onSubmit, children }) => {
    return (
        <FormWrapper>
            <FormInner onSubmit={onSubmit}>
                {title && <FormTitle>{title}</FormTitle>}
                {subTitle && <FormSubTitle>{subTitle}</FormSubTitle>}

                {children}
            </FormInner>

            <FormShadow />
        </FormWrapper>
    )
}

export default Form

// styles
const FormWrapper = styled.div`
    position: relative;
    z-index: 99;
    width: 100%;
    max-width: 400px; 
    background: #fff;
    border-radius: 9px;
`

const FormInner = styled.form`
    height: 100%;
    box-shadow: 0 5px 18px rgb(0 0 0 / 10%);
    border-radius: 9px;
    padding: 40px;
`

const FormShadow = styled.div`
    position: relative;
    z-index: -1;
    width: 95%;
    height: 8px;
    border-radius: 0 0 9px 9px;
    box-shadow: 0 5px 18px rgb(0 0 0 / 10%);
    background-color: #fff;
    margin: 0 auto -8px;
`

const FormTitle = styled.p`
    font-weight: 500;
    font-size: 24px;
    color: #353535;
    text-align: center;
    margin-bottom: 25px;
`

const FormSubTitle = styled.p`
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    color: #3E3E3E;
    margin-bottom: 25px;
`