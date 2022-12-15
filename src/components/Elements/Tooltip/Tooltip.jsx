import { motion, AnimatePresence } from 'framer-motion';
import styles from './Tooltip.module.css';

const Tooltip = ({ children, show, position, distance, arrow }) => {
    const dist = distance ?? '20px';
    const pos = position ?? 'top';
    const showArrow = arrow ?? true;

    const getTooltipPosition = () => {
        const objects = [{}, {}];

        if (pos === 'top' || pos === 'bottom') {
            objects[0], objects[1] = {
                left: '50%',
                transform: 'translateX(-50%)',
            }

            if (pos === 'top') {
                objects[0].bottom = `calc(100% + ${dist})`;
                objects[1].top = '100%';
            } else if (pos === 'bottom') {
                objects[0].top = `calc(100% + ${dist})`;
                objects[1].bottom = '100%';
            }

            objects[1].width = '100%';
            objects[1].height = dist;
        } else if (pos === 'left' || pos === 'right') {
            objects[0], objects[1] = {
                top: '50%',
                transform: 'translateY(-50%)',
            }

            if (pos === 'left') {
                objects[0].right = `calc(100% + ${dist})`;
                objects[1].left = '100%';
            } else if (pos === 'right') {
                objects[0].left = `calc(100% + ${dist})`;
                objects[1].right = '100%';
            }

            objects[1].width = dist;
            objects[1].height = '100%';
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
                    {children}

                    <div
                        className={styles.cursorConsistency}
                        style={positions[1]}
                    >
                    </div>

                    {showArrow && (
                        <div
                            className={styles.arrow}
                        >
                        </div>)}
                </motion.span>
            )}
        </AnimatePresence>
    );
}

export default Tooltip
