import { motion, AnimatePresence } from 'framer-motion';
import styles from './Tooltip.module.css';

const Tooltip = ({ title, show, position }) => {
    const dist = '15px';
    const pos = position ?? 'top';

    const getTooltipPosition = () => {
        const objects = [{}, {}, {}];

        if (pos === 'top' || pos === 'bottom') {
            if (pos === 'top') {
                objects[0].bottom = `calc(100% + ${dist})`;
                objects[1].top = '100%';
                objects[2].borderTop = '4px solid var(--background-secondary)';
                objects[2].bottom = '-4px';
            } else if (pos === 'bottom') {
                objects[0].top = `calc(100% + ${dist})`;
                objects[1].bottom = '100%';
                objects[2].borderBottom = '4px solid var(--background-secondary)';
                objects[2].top = '-4px';
            }

            objects[0].left = '50%';
            objects[1].left = '50%';
            objects[2].left = '50%';
            objects[0].transform = 'translateX(-50%)';
            objects[1].transform = 'translateX(-50%)';
            objects[2].transform = 'translateX(-50%)';
            objects[1].width = '100%';
            objects[1].height = dist;
            objects[2].borderLeft = '4px solid transparent';
            objects[2].borderRight = '4px solid transparent';
        } else if (pos === 'left' || pos === 'right') {
            if (pos === 'left') {
                objects[0].right = `calc(100% + ${dist})`;
                objects[1].left = '100%';
                objects[2].borderLeft = '4px solid var(--background-secondary)';
                objects[2].right = '-4px';
            } else if (pos === 'right') {
                objects[0].left = `calc(100% + ${dist})`;
                objects[1].right = '100%';
                objects[2].borderRight = '4px solid var(--background-secondary)';
                objects[2].left = '-4px';
            }

            objects[0].top = '50%';
            objects[1].top = '50%';
            objects[2].top = '50%';
            objects[0].transform = 'translateY(-50%)';
            objects[1].transform = 'translateY(-50%)';
            objects[2].transform = 'translateY(-50%)';
            objects[1].width = dist;
            objects[1].height = '100%';
            objects[2].borderTop = '4px solid transparent';
            objects[2].borderBottom = '4px solid transparent';
        }

        return objects;
    }

    const positions = getTooltipPosition();

    return (
        <AnimatePresence>
            {show && (
                <motion.span
                    className={styles.tooltip}
                    style={positions[0]}
                    initial={{
                        opacity: 0,
                        transform: positions[0].transform + ' scale(0)',
                    }}
                    animate={{
                        opacity: 1,
                        transform: positions[0].transform + ' scale(1)',
                    }}
                    exit={{
                        opacity: 0,
                        transform: positions[0].transform + ' scale(0)',
                    }}
                    transition={{
                        duration: 0.15,
                    }}
                    onClick={(e) => e.preventDefault()}
                >
                    {title}

                    <span
                        className={styles.cursorConsistency}
                        style={positions[1]}
                    >
                    </span>

                    <span
                        className={styles.arrow}
                        style={positions[2]}
                    >
                    </span>
                </motion.span>
            )}
        </AnimatePresence>
    );
}

export default Tooltip
