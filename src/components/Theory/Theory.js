import React from 'react';
import './Theory.css'

const Theory = () => {
    return (
        <div className='theory-section'>
            <h3>How React works?</h3>
            <p>React is an open-source JavaScript library. It is also component-based. When we create components, React creates a Virtual DOM. If we make a change to any component, React again creates a Virtual Dom. Then React compare the new Virtual DOM to the old Virtual DOM. If React finds any change, it just updates the changes of components to actual DOM.</p>

            <h3>What is the Difference Between Props and State?</h3>
            <p>In React, Props are used to pass data between components. It is short form of 'properties'. On the other hand, State is a build-in object of React, that can create and manage data in components.The difference between Props and State are:</p>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Props</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Data can't be changed or modified. We can't assign value.</td>
                        <td>Data can be changed or modified.</td>
                    </tr>
                    <tr>
                        <td>Data is passed from parent component to child component by Props.</td>
                        <td>Data isn't passed, but data is created and managed by State</td>
                    </tr>
                    <tr>
                        <td>Read-only</td>
                        <td>Read and write</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Theory;