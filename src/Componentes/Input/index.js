import styled from "styled-components";

const Input = styled.input`
    border: 1px solid #FFF;
    background: transparent;
    border: 1px solid #FFF;
    padding: 20px 30px;
    border-radius: 50px;
    width: 300px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder {
        color: #FFF;
        font-size: 16px;
        text-align: start;
    }
    &:focus {
        outline: none;
        border-color: #007bff;
    }
`


export default Input