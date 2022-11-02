function calculateX(lvl: number) {
    const result = (lvl + 81 - 92) * 0.02;
    if (result < 0) return 0;
    return result;
}

export default function calculateRunes(lvl: number) {
    const x = calculateX(lvl);
    return Math.floor((x + 0.1) * Math.pow(lvl + 81, 2) + 1);
}
