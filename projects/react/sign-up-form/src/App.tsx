import styles from './App.module.css';
import {MouseEventHandler, useState} from "react";

interface SyntheticEvent<T> {
    e: EventTarget & T
}

const App = () => {

    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    const handleMouseMove = (e: any) => {
        setPosition(prev => {
            return {
                x: e.clientX < 0 ? prev.x: e.clientX,
                y: e.clientY < 0 ? prev.y: e.clientY
            }
        });
    }

    const normal = {
        transform: `translateX(${position.x}px) translateY(${position.y}px)`
    };

    const zoom = {
        transform: `translateX(${position.x}px) translateY(${position.y}px) scale(2)`,
        backgroundColor: '#0077ff',

    };

    return (
        <>
            <div className={styles.container}
                 onMouseMove={handleMouseMove}>
                <div className={styles.circle}
                     style={ position.y > 400 ? normal : zoom }></div>
            </div>
        </>
    )
}

export default App;
