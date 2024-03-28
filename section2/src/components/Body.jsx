import './Body.css';
import { useState } from 'react';

export default function Body() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [bio, setBio] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeGender = (e) => {
        setGender(e.target.value);
    };

    const onChangeBio = (e) => {
        setBio(e.target.value);
    };
    return (
        <div className="body">
            <div>
                <input
                    value={name}
                    onChange={onChangeName}
                />
            </div>
            <div>
                <select
                    value={gender}
                    onChange={onChangeGender}
                >
                    <option value="">밝히지 않음</option>
                    <option value="female">여성</option>
                    <option value="male">남성</option>
                </select>
            </div>
            <div>
                <textarea
                    value={bio}
                    onChange={onChangeBio}
                />
            </div>
        </div>
    );
}
