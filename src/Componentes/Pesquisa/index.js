import Input from '../Input';
import styled from 'styled-components'
import React, { useState } from 'react';

const PesquisaContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Button = styled.button`
    background-color: #326589;
    color: #fff;
    font-weight: 700;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    padding: 14px 24px;
    margin-left: 15px;
`

function Pesquisa() {
    
    const [textoDigitado, setTextoDigitado] = useState('');
    const [inputValue, setInputValue] = useState('');
    
    const handleInput = (e) => {
        setInputValue(e.target.value);
    };
    const handleBuscar = () => {
        setTextoDigitado(inputValue);
    };

    const [isFocused, setIsFocused] = useState(false);

    const handleOnFocus = () => {
            setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input 
                placeholder= {isFocused ? '' : 'Buscar livro...'} 
                onFocus={handleOnFocus}
                onBlur={handleBlur}
                onChange={handleInput} 
            />
            <Button onClick={handleBuscar}>Buscar</Button>
            <p>{textoDigitado}</p>
        </PesquisaContainer>        
    )
}

export default Pesquisa