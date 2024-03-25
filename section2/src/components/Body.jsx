import './Body.css';
import { useState } from 'react';

function Lightbulb({ light }) {
    return (
        <>
            {light === 'ON' ? (
                <div style={{ backgroundColor: 'orange' }}>ON</div>
            ) : (
                <div style={{ backgroundColor: 'gray' }}>OFF</div>
            )}
        </>
    );
}

function StaticLightbulb() {
    console.log('dd');
    return <div style={{ backgroundColor: 'gray' }}>OFF</div>;
}

export default function Body() {
    const [light, setLight] = useState('OFF');

    return (
        <div className="body">
            <Lightbulb light={light} />
            <StaticLightbulb />
            <button
                onClick={() => {
                    setLight('ONN');
                }}
            >
                켜기
            </button>
            <button
                onClick={() => {
                    setLight('OFF');
                }}
            >
                끄기
            </button>
        </div>
    );
}
