import './card.css';
import { TIER_COLORS } from '../../definitions/consts';

/*
 {
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
*/

function Card({id, type, stats, level, tier, name, number, levelUpCard, money}) {
    const tierColor = TIER_COLORS[tier];

    const computeNextLevelNumber = () => {
        return Math.pow(2, level);
    };

    const computeLevelUpCost = () => {
        return computeNextLevelNumber() * 50;
    };

    const canLevelUp = () => {
        return computeNextLevelNumber() <= number;
    };

    const renderLevelUpButton = () => {
        const hasMoney = money >= computeLevelUpCost();

        return (
            <button disabled={!hasMoney} onClick={() => {levelUpCard(tier, id, computeNextLevelNumber(), computeLevelUpCost())}} >
                {computeLevelUpCost()}
            </button>
        );
    };

    return (
        <div className="Card">
            <div class="Card-name" style={{background: tierColor}}>
                {name}
            </div>
            <div class="Card-type">
                {type}
            </div>
            <br/>
            <div class="Card-stats">
                {JSON.stringify(stats)}
            </div>
            <br/>
            <div class="Card-level">
                Level: {level}
            </div>
            <div class="Card-levelup">
                {number} / {computeNextLevelNumber()}
            </div>
            <div class="Card-levelUpCost">
                {canLevelUp() ? renderLevelUpButton() : computeLevelUpCost()}
            </div>

        </div>
    );
}

export default Card;
