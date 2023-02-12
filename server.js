function fruitProcessor(Apples, Oranges){
    console.log(Apples, Oranges);
    const juice = `Juice with ${Apples} Apple and ${Oranges} Oranges`;
    return juice;
}
const juiceMix = fruitProcessor(5, 10);
console.log(juiceMix);
// console.log(fruitProcessor(5, 10));