import React from "react";
import { games } from "../mock-data/games";

export const Header = () => {
    return (
        <div className="header">
            <div className="header-inner-container">
                <ul className="header-list">
                    <li className="header-list-title">
                        <a href="#page-top" className="header-list-item">
                            Home
                        </a>
                    </li>
                    <li className="header-list-title">
                        <span className="header-list-item">
                            Games
                        </span>
                        <div className="mega-menu">
                            <ul className="mega-menu-list">

                                {
                                    games.map((game) => {
                                        const { id, title } = game;

                                        return (
                                            <li className="mega-list-item">
                                                <a href={`#${id}`}>{title}</a>
                                            </li>
                                        )
                                    }

                                    )
                                }
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}