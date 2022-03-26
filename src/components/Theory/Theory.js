import React from 'react';

const Theory = () => {
    return (
        <div>
            <h1>How React works?</h1>
            <p>React is an open-source JavaScript library. It is also component-based. When we create components, React creates a Virtual DOM. If we make a change to any component, React again creates a Virtual Dom. Then React compare the new Virtual DOM to the old Virtual DOM. If React finds any change, it just updates the changes of components to actual DOM.</p>
            <h1></h1>
        </div>
    );
};

export default Theory;