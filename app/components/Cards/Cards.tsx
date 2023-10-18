import styles from "./Cards.module.css";
import icons from "../../assets/icons";
import { Tooltip } from "@components";
import { useState, useRef } from "react";

const cardEntries = [
    {
        title: "YouTube",
        icon: icons.youtube,
        url: "https://youtube.com",
    },
    {
        title: "GitHub",
        icon: icons.github,
        url: "https://github.com",
    },
    {
        title: "Whimsical",
        icon: icons.whimsical,
        url: "https://whimsical.com",
    },
    {
        title: "Figma",
        icon: icons.figma,
        url: "https://figma.com",
    },
    {
        title: "Gmail",
        icon: icons.gmail,
        url: "https://mail.google.com/mail/u/0/?ogbl",
    },
    {
        title: "Framer",
        icon: icons.framer,
        url: "https://www.framer.com/motion/",
    },
];

const Cards = () => {
    return (
        <section className={styles.cardsContainer}>
            {cardEntries.map((cardEntry, index) => (
                <Tooltip key={cardEntry.title} text={cardEntry.title} pos={index < 3 ? "top" : "bottom"} arrow>
                    <a href={cardEntry.url} target="_blank" rel="noopener noreferrer" className={styles.card}>
                        {cardEntry.icon}
                    </a>
                </Tooltip>
            ))}
        </section>
    );
};

export default Cards;
