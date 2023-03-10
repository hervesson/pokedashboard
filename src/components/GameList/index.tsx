import React from 'react'
import { gameData } from '../../data/database'
import { StyledTitle } from '../../styles/typography'
import GameListHeader from '../GameListHeader'
import GameCard from './GameCard'
import { StyledGameList } from './style'

const GameList = () => {
    const newGameData = [...gameData]
    newGameData.length = 3
    return (
        <section>
            <GameListHeader />
            <StyledGameList>
                {newGameData.map(game => (
                    <GameCard game={game} />
                ))}
            </StyledGameList>
        </section>
    )
}

export default GameList
