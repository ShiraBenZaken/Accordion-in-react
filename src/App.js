import React from 'react';
import Accordion from './components/Accordion';

const items = [{
    title: 'What is React',
    content: 'React is a FrontEnd javascript framework'
},{
    title: 'Why use React',
    content: 'React is very a simple and lightweight library that only deals with Fast Learning Curve.'
},{
    title: 'How do you use React',
    content: 'You use React by creating components'
}
]


const App =()=> {
    return (
        <div>
            <br/>
            <Accordion items={items} />
        </div>
    );
}

export default App;