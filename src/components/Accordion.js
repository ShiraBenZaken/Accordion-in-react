import React, { Fragment, useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index)
    }

    const renderItems = items.map((item, index) => {
        return (
            <Fragment key={item.title}>
                <div >
                    <div className="title active" onClick={() => onTitleClick(index)}>
                        <i className="dropdown icon" ></i>
                        {item.title}
                    </div>
                    <div className="content active">
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
            <h1>
                {activeIndex}
            </h1>
        </div>

    );
};

export default Accordion;