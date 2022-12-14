import { motion, AnimatePresence } from 'framer-motion';
import styles from './Tooltip.module.css';

const Tooltip = ({ children, show, position, distance }) => {
    const getTooltipPosition = () => {
        switch (position) {
            case 'top': {
                return {
                    top: distance ?? '-50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                };
            }
            
            case 'bottom': {
                return {
                    bottom: distance ?? '-50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                };
            }

            case 'left': {
                return {
                    top: '50%',
                    left: distance ?? '-50px',
                    transform: 'translateY(-50%)',
                };
            }

            case 'right': {
                return {
                    top: '50%',
                    left: distance ?? '-50px',
                    transform: 'translateY(-50%)',
                };
            }

            default: {
                return {
                    top: distance ?? '-50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                };
            }
        }
    };

    const pos = getTooltipPosition();

    return (
        <AnimatePresence>
            {show && (
                <motion.span
                    className={styles.tooltip}
                    style={pos}
                    initial={{
                        opacity: 0,
                        transform: pos.transform + ' scale(0)',
                    }}
                    animate={{
                        opacity: 1,
                        transform: pos.transform + ' scale(1)',
                    }}
                    exit={{
                        opacity: 0,
                        transform: pos.transform + ' scale(0)',
                    }}
                    transition={{
                        duration: 0.15,
                    }}
                >
                    {children}
                </motion.span>
            )}
        </AnimatePresence>
    );
}

export default Tooltip
