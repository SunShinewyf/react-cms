export const INCREASE = 'counter/INCREASE';
export const DECREASE = 'counter/DECREASE';
export const RESET = 'counter/RESET';

export function increase(){
    return {
        type: INCREASE
    }
}

export function decrease(){
    return {
        type: DECREASE
    }
}


export function reset(){
    return {
        type: RESET
    }
}