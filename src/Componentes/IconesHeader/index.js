import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icones = styled.ul`
    align-items: center;
    display: flex;
}
`
const Icone = styled.li`
    width: 30px;
    padding: 0 10px;
}
`

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <Icones>
          {icones.map( (icone) => (
            <Icone><img src={icone}></img></Icone>
            ) ) }
        </Icones>
    )
}

export default IconesHeader