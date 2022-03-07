import React from "react";
import {games} from "../mock-data/games";

export const GameBlock = () => {



    return (
        <div className="game-block">
            {
                games.map((game) => {
                    const { id, imgSrc, longTitle } = game;

                    return (
                        <div id={id} className='game-block-info'>
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