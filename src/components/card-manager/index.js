import React from 'react';
import './card-manager.css';
import Card from '../card';
import { fetchCards } from '../../services/card-service';

const user = 
{
    username: 'mike',
    cards: [
        {id: 0, tier: 0, level: 2, number: 0},
        {id: 0, tier: 1, level: 1, number: 1},
        {id: 0, tier: 2, level: 4, number: 2}
    ],
    money: 3024
};

class CardManager extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            cards: [],
            money: 0,
            username: ''
        };
    }

    async componentDidMount(props) {
        this.setState({
            username: user.username,
            money: user.money,
            cards: await fetchCards(user)
        });
    }

    findCard(tier, id, cards) {
        return cards.find(card => card.tier === tier && card.id === id);
    }

    levelUpCard = (tier, id, nextLevelNumber, updateCost) => {
        const card = this.findCard(tier, id, this.state.cards);

        card.level++;
        card.number -= nextLevelNumber;

        this.setState({
            money: this.state.money - updateCost
        });
    }

    _drawCards() {
        return this.state.cards.map((card, index) => {
            return <Card {...card} money={this.state.money} levelUpCard={this.levelUpCard} number={index + 1} />;
        });
    }

    render() {
        const { money, username } = this.state;

        return (
            <div>
                <section>
                    <span>Money: {money}</span>
                    <span> User: {username}</span>
                    <button onClick= {() => { this.setState({money: money + 100}) }} >
                        Add money
                    </button>
                </section>
                <div>
                    {this._drawCards()}
                </div>
            </div>
        );
    } 
}

export default CardManager;
