import styled from 'styled-components'

const Opcao = styled.li`
    min-width: 120px;
    font-size: 16px;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer
`
const Opcoes = styled.ul`
    display: flex;
`

const textoOpcoes = ['Categorias', 'Favoritos', 'Minha Estante']

function OpcoesHeader() {
    return (
          <Opcoes>
          {textoOpcoes.map( (texto) => (
            <Opcao><p>{texto}</p></Opcao>
            ) ) }
        </Opcoes>
    )
}

export default OpcoesHeader