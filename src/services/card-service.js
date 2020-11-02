import { cardDefinitions } from '../definitions/cards';


export async function fetchCards(user) {
    return Promise.resolve(user.cards.map((card) => {
        const definition = cardDefinitions[card.tier][card.id];

        return {
            ...definition,
            ...card
        }
    }));
}