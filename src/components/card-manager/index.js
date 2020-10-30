import React from 'react';
import './card-manager.css';
import Card from '../card';

const TYPES = {
    ATTACK: 'attack',
    DEFENSE: 'defense'
};

const UTILITIES = {
    REGENERATION: 'regeneration'
};

const TIERS = {
    COMMON: 'common',
    RARE: 'rare',
    EPIC: 'epic'
};

const cards = [
    generateCard('Miguel', TYPES.ATTACK, TIERS.COMMON),
    generateCard('Goirs', TYPES.DEFENSE, TIERS.RARE),
    generateCard('Gornak', TYPES.ATTACK, TIERS.EPIC),
];

function generateCard(name, type, tier) {
    return {
        name: name,
        type: type,
        stats: {
            attack: 1,
            defense: 1,
            utility: [UTILITIES.REGENERATION],
            baseHP: 5
        },
        statsProjection: {
            attack: 3,
            defense: 2,
            utility: [],
            baseHP: 1
        },
        tier: tier,
        level: 1
    }
}

class CardManager extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            cards: cards
        }
    }

    _drawCards() {
        return this.state.cards.map((card) => {
            return <Card {...card} />;
        });
    }

    render() {
        return (
            <div>
                {this._drawCards()}
            </div>
        );
    } 
}

export default CardManager;
