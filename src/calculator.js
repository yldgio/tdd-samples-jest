// import DB from '../src/db';

class Calculator
{
    static Add(x, y) {
        return parseFloat(x) + parseFloat(y);
    }
    static Subtract(x, y) {
        return parseFloat(x) - parseFloat(y);
    }
    static Divide(x, y){
        return parseFloat(x) / parseFloat(y);
    }
    static Multiply(x, y){
        return parseFloat(x) * parseFloat(y);
    }
}



export default Calculator;
