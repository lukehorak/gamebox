export const getRandomNumber = () => {
    let min = 1000;
    let max = 9999;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
