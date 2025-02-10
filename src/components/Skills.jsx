import React from "react";

function Skills() {
    return (
        <div>
            <h2>Skills</h2>
            <div>
                <input type="text"
                    required
                    name='skill'
                    placeholder='Skill'
                />
            </div>
            <div>
                <input type="text"
                    required
                    name='proficiency'
                    placeholder='Proficiency'
                />
            </div>
        </div>
    )
}

export default Skills;