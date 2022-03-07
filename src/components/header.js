import React from "react";

export const Header = () => {
    return(
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
                                <li className="mega-list-item">
                                    <a href="#dark-souls">Dark Souls</a>
                                </li>
                                <li className="mega-list-item">
                                    <a href="#kotor">Kotor</a>
                                </li>
                                <li className="mega-list-item">
                                    <a href="#metal-gear-solid">Metal Gear Solid</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}