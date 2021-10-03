import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';


const items = [{
    title: 'What is React',
    content: 'React is a FrontEnd javascript framework'
}, {
    title: 'Why use React',
    content: 'React is very a simple and lightweight library that only deals with Fast Learning Curve.'
}, {
    title: 'How do you use React',
    content: 'You use React by creating components'
}];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }
];


const App = () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <br />
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            <Dropdown
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
            />
        </div>
    );
}

export default App;