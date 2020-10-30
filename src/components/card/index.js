import './card.css';

const TIERS = {
    COMMON: 'common',
    RARE: 'rare',
    EPIC: 'epic'
};

const TIER_COLORS = {
    [TIERS.COMMON]: 'gray',
    [TIERS.RARE]: 'green',
    [TIERS.EPIC]: 'purple'
}

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

function Card({type, stats, level, exp, tier, name}) {
    const tierColor = TIER_COLORS[tier];

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

        </div>
    );
}

export default Card;
