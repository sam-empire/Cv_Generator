import React from 'react';

function Experience() {
    return (
        <div>
            <h2>Experience</h2>
            <div>
                <input type="text"
                    required
                    name='company'
                    placeholder='Company'
                />
            </div>
            <div>
                <input type="text"
                    required
                    name='position'
                    placeholder='Position'
                />
            </div>
            <div>
                <input type="text"
                    required
                    name='years'
                    placeholder='Years'
                />
            </div>
        </div>
    )
}

export default Experience;