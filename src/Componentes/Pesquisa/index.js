import Input from '../Input';
import styled from 'styled-components'
import React, { useState } from 'react';
import { livros } from './dadosPequisa'

const PesquisaContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    width: 100vw;
    height: 270px;
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    margin: 10px 0px;
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
    
    &:disabled {
        cursor: not-allowed;
    }
`
const LivroContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const MensagemErro = styled.p`
    color: #FF6347; /* Tom de vermelho para erro */
    margin-top: 20px;
    font-size: 14px;
`;

function Pesquisa() {
    
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    const [textoDigitado, setTextoDigitado] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    const handleInput = (e) => {
        setTextoDigitado(e.target.value.trim());
        setMensagemErro('');
    };

    const handleBuscar = () => {
        const resultadoPesquisa = livros.filter((livro) => livro.nome.toLowerCase().includes(textoDigitado.toLowerCase()));
        
        if (resultadoPesquisa.length === 0) {
            setMensagemErro('Poxa, não encontramos nenhum livro com esse nome. Tente buscar outro livro.');
            setLivrosPesquisados([]);
        } else {
            setLivrosPesquisados(resultadoPesquisa);
            setMensagemErro('');
        }
    };

    const [isFocused, setIsFocused] = useState(false);

    const handleOnFocus = () => {
            setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && textoDigitado.trim()) {
          handleBuscar();
        }
    };

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro.</Subtitulo>
            <Input 
                placeholder= {isFocused ? '' : 'Buscar livro...'} 
                onFocus={handleOnFocus}
                onBlur={handleBlur}
                onChange={handleInput}
                onKeyUp={handleKeyPress} 
            />
            <Button 
                onClick={handleBuscar}
                disabled={!textoDigitado.trim()
            }>Buscar</Button>
            <LivroContainer>
                {livrosPesquisados.map((livro) => (
                    <div>
                        <img src={livro.src} alt={livro.nome} />
                        <li key={livro.id}>{livro.nome}</li>
                    </div>
                ))}
            </LivroContainer>
            {mensagemErro && <MensagemErro>{mensagemErro}</MensagemErro>}
        </PesquisaContainer>        
    )
}

export default Pesquisa