import React, {useState} from 'react';

const GoTo = () => {
    const [input, setInput] = useState('')
    const handleSubmit = (e) => { e.preventDefault(); console.log(input) }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Go To Item:
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                </label>
                <input type="submit" value="GoTo" />
            </form>
        </div>
    );
}

export default GoTo