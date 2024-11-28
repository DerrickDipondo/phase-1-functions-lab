function distanceFromHqInBlocks(block) {
    const hq = 42;
    return Math.abs(block - hq);

}

function distanceFromHqInFeet(block) {
    const hq = 42;
    const feetPerBlock = 88;

    const distanceInBlocks = Math.abs(block - hq);

    return distanceInBlocks * feetPerBlock * 3;
    

}

function distanceTravelledInFeet(start, destination) {
const feetPerBlock = 264;

const distanceInBlocks = Math.abs(start - destination);

return distanceInBlocks * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(destination, start);

    
    if (distance <= 400) {
        return 0;
    } 
    
    else if (distance > 400 && distance <= 2000) {
        const chargeableDistance = distance - 400;
    
        return 0.02 * (distance - 400);
    } 
    
    else if (distance > 2000 && distance <= 2500) {
        return 25;
    } 
    
    else {
        return 'cannot travel that far';
    }

}

