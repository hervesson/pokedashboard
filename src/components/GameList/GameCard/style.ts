import Styled from 'styled-components'

export const StyledGameCard = Styled.li`
    img{
        border-radius:30px;
    }
    h3{
        margin-top: 1rem;
    }

    @media(max-width: 1000px){
        border-radius: 20px;
    }
`