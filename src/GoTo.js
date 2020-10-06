import React, {useState} from 'react';
import PropTypes from 'prop-types';

const GoTo = ({handle}) => {
    const [input, setInput] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        handle(input.trim())
    }

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

GoTo.propTypes = {
    handle: PropTypes.func,
}

export default GoTo