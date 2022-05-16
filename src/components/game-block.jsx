import React from "react";
import {games} from "../mock-data/games";

export const GameBlock = ({activeFilters}) => {

const filteredGames = games.filter((game) => {
    if (activeFilters === '') return game;
    const {genre} = game;
    const hasMatch = genre.includes(activeFilters);
    if (hasMatch) return game;
    return false;
})
// console.log(filteredGames);
    return (
        <div className="game-block">
            {
                filteredGames.map((game) => {
                    const { id, imgSrc, longTitle, genre } = game;

                    return (
                        <div id={id} data-game-genres={genre} className='game-block-info'>
                            <div className="game-block-img">
                                <img className="game-block-game-img" src={imgSrc} />
                            </div>
                            <div className="game-block-text">
                                <h1>{longTitle}</h1>
                            </div>
                        </div>
                    )
                })
            }



        </div>
    )
}