import React from 'react';

function Education() {
    return (
        <div>
            <h2>Education</h2>
            <div>
                <input type="text"
                    required
                    name='school'
                    placeholder='School'
                />
            </div>
            <div>
                <input type="text"
                    required
                    name='degree'
                    placeholder='Degree'
                />
            </div>
            <div>
                <input type="text"
                    required
                    name='graduationYear'
                    placeholder='Graduation Year'
                />
            </div>
        </div>
    )
}

export default Education;