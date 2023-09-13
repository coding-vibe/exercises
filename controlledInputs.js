import React, { useState } from 'react';

function ControlledInputs() {
    const [checked, setChecked] = useState(false);
    const [option, setOption] = useState('Not done');
    const handleCheckboxChange = ({ target}) => {
        setChecked(target.checked);
    };
    const handleRadioChange = ({ target}) => {
        setOption(target.value);
    };

    return (
        <>
            <p>Controlled checkbox</p>
            <label htmlFor='accept'>
                Accept
                <input
                    type='checkbox'
                    name='checkbox_name'
                    value='checked'
                    id='accept'
                    checked={checked}
                    onChange={handleCheckboxChange}
                />
            </label>
            <p>Controlled radio</p>
            <label htmlFor='done'>
                <input
                    type='radio'
                    name='status'
                    value='done'
                    id='done'
                    checked={option === 'Done'}
                    onChange={handleRadioChange}
                />
                Done
            </label>
            <label htmlFor='not done'>
                <input
                    type='radio'
                    name='status'
                    value='not done'
                    id='not done'
                    checked={option === 'Not done'}
                    onChange={handleRadioChange}
                />
                Not done
            </label>
        </>
    );
};