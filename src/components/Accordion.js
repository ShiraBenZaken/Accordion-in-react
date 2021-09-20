import React, { Fragment, useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index)
    }

    const renderItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : ''

        return (
            <Fragment key={item.title}>
                <div >
                    <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                        <i className="dropdown icon" ></i>
                        {item.title}
                    </div>
                    <div className={`content ${active}`}>
                        <p>{item.content}</p>
                    </div>
                </div>
            </Fragment>
        );
    });

    return (
        <div>
            <div className="ui styled accordion">
                {renderItems}
            </div>
        </div>

    );
};

export default Accordion;