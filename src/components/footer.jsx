import React from "react";
import { footerItems } from "../mock-data/footer";

export const Footer = () => {
    return (
        <div className="footer">
            <ul className="footer-list">
                {
                    footerItems.map((item) => {
                        const { link, text } = item;

                        return (
                            <li className="footer-list-item">
                                {
                                    link
                                    ?<a href={link}>{text}</a>
                                    :text
                                }
                            </li>
                        ) 
                    })
                }

            </ul>
        </div>
    )
} 