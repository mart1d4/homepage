"use client";

import { Time, Weather, Cards, Lists } from "@components";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./main.module.css";

export default function Home() {
    return (
        <AnimatePresence>
            <motion.main
                className={styles.main}
                initial={{
                    opacity: 0,
                    y: 100,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                exit={{
                    opacity: 0,
                    y: 100,
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            >
                <Time />
                <Weather />
                <Cards />
                <Lists />
            </motion.main>
        </AnimatePresence>
    );
}
