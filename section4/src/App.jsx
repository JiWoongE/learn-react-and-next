import { useState, useEffect, useRef } from 'react';
import './App.css';
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import Even from './components/Even';

//1.마운트 (탄생)
//2.업데이트 (변화,리렌더)
//3.언마운트 (죽음)

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    const isMountRef = useRef(false);

    useEffect(() => {
        if (!isMountRef.current) {
            isMountRef.current = true;
            return;
        }
        console.log('업데이트');
    });

    useEffect(() => {
        console.log('마운트');
    }, []);

    const onClickButton = (value) => {
        setCount(count + value);
    };

    const onChangeText = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <input
                    value={text}
                    onChange={onChangeText}
                />
            </section>
            <section>
                <Viewer count={count} />
                {count % 2 === 0 && <Even />}
            </section>
            <section>
                <Controller onClickButton={onClickButton} />
            </section>
        </div>
    );
}

export default App;
