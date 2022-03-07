import React from "react";

export const GameBlock = () => {

    const data = [
        {
            id: 'dark-souls',
            imgSrc: 'https://tinyurl.com/4dwmse5a',
            gameText: 'Dark Souls 1',
        },
        {
            id: 'kotor',
            imgSrc: 'https://tinyurl.com/bpastw7z',
            gameText: 'Star Wars: Knights of the Old Republic',
        },
        {
            id: 'metal-gear-solid',
            imgSrc: 'https://tinyurl.com/4cwkacs7',
            gameText: 'Metal Gear Solid',
        },
    ];

    return (
        <div className="game-block">
            {
                data.map((game) => {
                    const { id, imgSrc, gameText } = game;

                    return (
                        <div id={id} className='game-block-info'>
                            <div className="game-block-img">
                                <img className="game-block-game-img" src={imgSrc} />
                            </div>
                            <div className="game-block-text">
                                <h1>{gameText}</h1>
                            </div>
                        </div>
                    )
                })
            }



        </div>
    )

    /*
    return (
        <div className="game-block">
            <div id="dark-souls"></div>
            <div className="game-block-info">
                <div className="game-block-img">
                    <img className="game-block-game-img" src="https://tinyurl.com/4dwmse5a" />
                </div>
                <div className="game-block-text">
                    <h1>Dark Souls 1</h1>
                </div>
            </div>
            <div id="kotor"></div>
            <div className="game-block-info">
                <div className="game-block-img">
                    <img className="game-block-game-img" src="https://tinyurl.com/bpastw7z" />
                </div>
                <div className="game-block-text">
                    <h1>Star Wars: Knights of the Old Republic</h1>
                </div>
            </div>
            <div id="metal-gear-solid"></div>
            <div className="game-block-info">
                <div className="game-block-img">
                    <img className="game-block-game-img" src="https://tinyurl.com/4cwkacs7" />
                </div>
                <div className="game-block-text">
                    <h1>Metal Gear Solid</h1>
                </div>
            </div>

        </div>

    )
    */
}