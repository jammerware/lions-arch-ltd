import { Fractal } from '../../shared/models/fractal';

export const FRACTALS: Fractal[] = [
    {
        name: "Aquatic Ruins",
        isNight: false,
        paths: ["Dolphin", "Dark"],
        scales: [
            { value: 3, recommendedAR: 0, path: "Dark" },
            { value: 18, recommendedAR: 0, path: "Dolphin" },
            { value: 26, recommendedAR: 18, path: "Dolphin"},
            { value: 42, recommendedAR: 47, path: "Dolphin"},
            { value: 61, recommendedAR: 81, path: "Dark" },
            { value: 76, recommendedAR: 107, path: "Dolphin" }
        ]
    },
    {
        name: "Swampland",
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
        isNight: false,
        scales: [
            { value: 9, recommendedAR: 0 },
            { value: 23, recommendedAR: 13 },
            { value: 39, recommendedAR: 42 },
            { value: 58, recommendedAR: 75 },
            { value: 73, recommendedAR: 102 },
            { value: 83, recommendedAR: 120 },
        ]
    },
    {
        name: "Snowblind",
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
        isNight: true,
        paths: [ "Bombs", "Guns" ],
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
    }
];