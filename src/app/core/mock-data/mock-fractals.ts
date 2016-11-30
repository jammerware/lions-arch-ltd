import { Fractal } from '../../shared/models/fractal';

export const FRACTALS: Fractal[] = [
    {
        name: "Aquatic Ruins",
        description: "Hunt krait. Free hapless villagers. Be a dolphin, apparently.",
        isNight: false,
        paths: ["Dolphin", "Dark"],
        scales: [
            { value: 3, recommendedAR: 0, path: "Dark" },
            { value: 26, recommendedAR: 18, path: "Dolphin" },
            { value: 61, recommendedAR: 81, path: "Dark" },
            { value: 76, recommendedAR: 107, path: "Dolphin" }
        ]
    },
    {
        name: "Swampland",
        description: "Mossman & Bloomhunger: Attorneys at Swamp.",
        isNight: true,
        scales: [
            { value: 2, recommendedAR: 0 },
            { value: 21, recommendedAR: 10 },
            { value: 32, recommendedAR: 29 },
            { value: 41, recommendedAR: 45 },
            { value: 56, recommendedAR: 72 },
            { value: 67, recommendedAR: 91 },
            { value: 77, recommendedAR: 109 },
            { value: 89, recommendedAR: 131 },
        ]
    },
    {
        name: "Uncategorized",
        description: "MEOW MEOW MEOW MEOW MEOW",
        isNight: false,
        scales: [
            { value: 4, recommendedAR: 0 },
            { value: 12, recommendedAR: 0 },
            { value: 36, recommendedAR: 36 },
            { value: 44, recommendedAR: 50 },
            { value: 62, recommendedAR: 83 },
            { value: 79, recommendedAR: 113 },
            { value: 91, recommendedAR: 134 },
        ]
    },
    {
        name: "Urban Battleground",
        description: "Siegemaster Dulfy is a lot less friendly than her [eponymous website](http://dulfy.net/).",
        isNight: false,
        scales: [
            { value: 1, recommendedAR: 0 },
            { value: 11, recommendedAR: 0 },
            { value: 31, recommendedAR: 27 },
            { value: 57, recommendedAR: 74 },
            { value: 66, recommendedAR: 90 },
            { value: 78, recommendedAR: 111 },
            { value: 85, recommendedAR: 123 },
        ]
    },
    {
        name: "Molten Furnace",
        description: "Dodge tornadoes. Get hit by shockwaves. Abandon the achievement and hide in the corner.",
        isNight: false,
        scales: [
            { value: 9, recommendedAR: 0 },
            { value: 23, recommendedAR: 13 },
            { value: 39, recommendedAR: 42 },
            { value: 58, recommendedAR: 75 },
            { value: 83, recommendedAR: 120 },
        ]
    },
    {
        name: "Snowblind",
        description: "Winter is coming.",
        isNight: true,
        scales: [
            { value: 5, recommendedAR: 0 },
            { value: 16, recommendedAR: 0 },
            { value: 27, recommendedAR: 20 },
            { value: 37, recommendedAR: 38 },
            { value: 51, recommendedAR: 63 },
            { value: 74, recommendedAR: 104 },
            { value: 86, recommendedAR: 125 },
            { value: 93, recommendedAR: 138 },
        ]
    },
    {
        name: "Cliffside",
        description: "Stop! Hammertime.",
        isNight: false,
        scales: [
            { value: 7, recommendedAR: 0 },
            { value: 22, recommendedAR: 11 },
            { value: 33, recommendedAR: 31 },
            { value: 47, recommendedAR: 56 },
            { value: 59, recommendedAR: 77 },
            { value: 69, recommendedAR: 95 },
            { value: 82, recommendedAR: 118 },
            { value: 94, recommendedAR: 139 },
        ]
    },
    {
        name: "Underground Facility",
        description: "Raise your hand if you're rooting for bombs.",
        isNight: true,
        paths: ["Bombs", "Guns"],
        scales: [
            { value: 8, recommendedAR: 0, path: "Guns" },
            { value: 17, recommendedAR: 0, path: "Bombs" },
            { value: 29, recommendedAR: 24, path: "Bombs" },
            { value: 43, recommendedAR: 49, path: "Bombs" },
            { value: 53, recommendedAR: 67, path: "Bombs" },
            { value: 68, recommendedAR: 93, path: "Guns" },
            { value: 81, recommendedAR: 116, path: "Bombs" },
            { value: 95, recommendedAR: 141, path: "Bombs" },
        ]
    },
    {
        name: "Aetherblade",
        description: "Round and around and around we go. Where do we stop? Where there are two blades going at different and insane speeds.",
        isNight: false,
        scales: [
            { value: 14, recommendedAR: 0 },
            { value: 24, recommendedAR: 15 },
            { value: 49, recommendedAR: 59 },
            { value: 65, recommendedAR: 88 },
            { value: 71, recommendedAR: 99 },
            { value: 96, recommendedAR: 143 },
        ]
    },
    {
        name: "Thaumanova Reactor",
        description: "You can even see the floor now.",
        isNight: false,
        scales: [
            { value: 15, recommendedAR: 0 },
            { value: 34, recommendedAR: 33 },
            { value: 48, recommendedAR: 58 },
            { value: 55, recommendedAR: 70 },
            { value: 64, recommendedAR: 86 },
            { value: 84, recommendedAR: 122 },
            { value: 97, recommendedAR: 145 },
        ]
    },
    {
        name: "Volcanic",
        description: "Hard mode: play your mouse on your subwoofer to make that camera shake last the whole run!",
        isNight: true,
        scales: [
            { value: 6, recommendedAR: 0 },
            { value: 19, recommendedAR: 0 },
            { value: 28, recommendedAR: 22 },
            { value: 46, recommendedAR: 54 },
            { value: 52, recommendedAR: 65 },
            { value: 72, recommendedAR: 100 },
            { value: 87, recommendedAR: 127 },
            { value: 92, recommendedAR: 136 },
        ]
    },
    {
        name: "Mai Trin",
        description: "She seems angrier since she was demoted from scale 100.",
        isNight: false,
        scales: [
            { value: 18, recommendedAR: 0 },
            { value: 42, recommendedAR: 47 },
            { value: 73, recommendedAR: 102 },
            { value: 98, recommendedAR: 147 },
        ]
    },
    {
        name: "Molten Boss",
        description: "\"Oh I got it! Chredge! Hmmm. Sounds like a skin condition.\"",
        isNight: false,
        scales: [
            { value: 10, recommendedAR: 0 },
            { value: 40, recommendedAR: 43 },
            { value: 70, recommendedAR: 97 },
            { value: 90, recommendedAR: 132 },
        ]
    },
    {
        name: "Solid Ocean",
        description: "Frustrating pursuers of the [timed mote](https://wiki.guildwars2.com/wiki/Jade_Kraken_Timed_Mote) since 2013.",
        isNight: true,
        scales: [
            { value: 20, recommendedAR: 8 },
            { value: 35, recommendedAR: 34 },
            { value: 45, recommendedAR: 52 },
            { value: 60, recommendedAR: 79 },
            { value: 80, recommendedAR: 115 }
        ]
    },
    {
        name: "Chaos",
        description: "What's worse than running Snowblind? Running it with Thaumanova in front and Aetherblade stapled behind.",
        isNight: true,
        scales: [
            { value: 13, recommendedAR: 0 },
            { value: 30, recommendedAR: 26 },
            { value: 38, recommendedAR: 40 },
            { value: 54, recommendedAR: 68 },
            { value: 63, recommendedAR: 84 },
            { value: 88, recommendedAR: 129 },
            { value: 99, recommendedAR: 148 },
        ]
    },
    {
        name: "Nightmare",
        description: "Move over, Mai. There's a new kid in town.",
        isNight: true,
        scales: [
            { value: 25, recommendedAR: 17 },
            { value: 50, recommendedAR: 61 },
            { value: 75, recommendedAR: 106 },
            { value: 100, recommendedAR: 150 },
        ]
    }
];