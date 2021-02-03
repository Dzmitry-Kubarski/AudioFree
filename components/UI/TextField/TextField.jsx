// libs
import styled from 'styled-components'

// utils
import { vars } from '../../../styles/vars'

const TextField = ({ type = 'text', name, value, onChange, placeholder }) => {
    return (
        <Input
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
        />
    )
}

export default TextField

// styles
const Input = styled.input`
    width: 100%;
    min-height: 60px;
    font-size: 13px;
    color: #B9B9B9;
    background: #FFFFFF;
    border: 1px solid #898989;
    border-radius: 39px;
    padding: 0 34px;
    transition: border .3s linear;

    &::placeholder {
        font-style: italic;
        color: #B9B9B9;
    }

    &:focus {
        border: 1px solid ${vars.colorGreen};
    }
`