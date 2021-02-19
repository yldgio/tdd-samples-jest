// import DB from '../src/services/db';

export default class Calculator
{
    static Add(x, y) {
        return parseFloat(x) + parseFloat(y);
    }
    static Subtract(x, y) {
        return parseFloat(x) - parseFloat(y);
    }
    static Divide(x, y){
        if(y===0){return 0;}
        return parseFloat(x) / parseFloat(y);
    }
    static Multiply(x, y){
        return parseFloat(x) * parseFloat(y);
    }
}