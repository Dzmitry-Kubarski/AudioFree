import styled from 'styled-components'

const Сheckbox = ({ label, name, id, defaultChecked }) => {

    return (
        <СheckboxWrapper>
            <HiddenCheckbox id={id} name={name} defaultChecked={defaultChecked} />

            <СheckboxImagesBox>
                <svg width={11} height={11} viewBox="0 0 11 11">
                    <circle cx="5.5" cy="5.5" r="5.5" />
                </svg>
            </СheckboxImagesBox>

            <label htmlFor={id}>{label}</label>
        </СheckboxWrapper>
    )
}

export default Сheckbox

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px; 
`

const СheckboxWrapper = styled.div`
    position: relative;    

    label {
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
        padding-left: 34px;
    }
`

const СheckboxImagesBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 21px;
    height: 21px;
    border: 1px solid #D8D8D8;
    border-radius: 50%;
    background-color: white;    
    pointer-events: none;    
    transition: border-color .3s ease-in-out, background-color .3s ease-in-out;

    svg {
        width: 11px;
        height: 11px;
        fill: transparent;
        transition: fill .2s ease-in-out;
    }

    ${HiddenCheckbox}:checked + && {
        svg {
           fill: #8B75C8;
        }
  }

`