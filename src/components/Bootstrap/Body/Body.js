import React from 'react';
import CONFIG_CARD from './Cards/config.cards';
import Cards from './Cards/Cards';

export default function Body() {
    // Higher Order Component.
    const allCards = CONFIG_CARD.map((elem, i) => {
        return <Cards {...elem} Key={i} />;
    });
    console.log(allCards);
    return (
        <div className="album py-5 bg-body-tertiary">
            <div className="container">
                <div className="d-flex flex-row flex-wrap justify-content-between">
                    {allCards}
                </div>
            </div>
        </div>
    );
}
