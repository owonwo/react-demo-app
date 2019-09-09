let name = 'James';

export function getName(){
    return name
}


function getAge(){
    return 30;
}

export function setName(value){
    name = value;
}

const bottles = Array(30).fill({ brand: 'Malta Guinness' });
const addBottleCap = (bottle) => {
    bottle.cap = true;
    return bottle
}

const fillBottle = (bottle) => {
    bottle.filling = true
    return bottle;
}

const addBottleLabel = (bottle) => {
    bottle.lable = 'The Malta Guiness'
    bottle.expiryMsg = 'Best before 2022'
    return bottle;
}

const packagedBottles = bottles
    .map(addBottleCap)
    .map(fillBottle)
    .map(addBottleLabel);

export default packagedBottles