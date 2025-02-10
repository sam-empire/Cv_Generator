import React from 'react';

function PersonalInfo() {
    return (
        <div>
            <h2>Personal Information</h2>
            <div>
                <input type="text"
                    required
                    name='name'
                    placeholder='Jay doe'
                />
            </div>
            <div>
                <input type="text"
                    required
                    name='email'
                    placeholder='YYY@XXXX.com'
                />
            </div>
            <div>
                <input type="number"
                    required
                    name='phoneNumber'
                    placeholder='+234 XXXX XXXX'
                />
            </div>
        </div>

    )
}

export default PersonalInfo;