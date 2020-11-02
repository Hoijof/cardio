import { TYPES, TIERS } from './consts';


function generateCommonCards() {
    return [
        generateCard('Miguel', TYPES.ATTACK, ARCHETYPES.JOE, ARCHETYPES.TANK, TIERS.COMMON)
    ];
}
function generateRareCards() {
    return [
        generateCard('Goirs', TYPES.DEFENSE, ARCHETYPES.BERSERK, ARCHETYPES.OFFTANK, TIERS.RARE)
    ];
}
function generateEpicCards() {
    return [
        generateCard('Gornak', TYPES.ATTACK, ARCHETYPES.BERSERK, ARCHETYPES.BERSERK, TIERS.EPIC)
    ];
}
function generateLegendaryCards() {
    return [];
}

function generateCard(name, type, initialStats, archetype, tier) {
    return {
        name: name,
        type: type,
        stats: initialStats,
        statsProjection: archetype,
        tier: tier
    }
}

// 10 Points to spend
const ARCHETYPES = {
    BERSERK: {
        attack: 6,
        defense: 2,
        utility: [],
        baseHP: 2
    },
    TANK: {
        attack: 2,
        defense: 6,
        utility: [],
        baseHP: 2
    },
    HEALTHS: {
        attack: 2,
        defense: 2,
        utility: [],
        baseHP: 6
    },
    OFFTANK: {
        attack: 4,
        defense: 2,
        utility: [],
        baseHP: 4
    },
    JOE: {
        attack: 3,
        defense: 3,
        utility: [],
        baseHP: 4
    }
}

export const cardDefinitions = [
    generateCommonCards(),
    generateRareCards(),
    generateEpicCards(),
    generateLegendaryCards()
];
