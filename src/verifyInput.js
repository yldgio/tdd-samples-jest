/**
 * Verifies a value over a list of rules
 * verifyInput
 *  params:
 *      val: String, the value
 *      rules: Array, array of callbacks
 * example:
 *  verifyInput("giovanni.ferrara", [
 *      (input) => input.length > 8, 
 *      (input) => input.length < 15, 
 * ])
 * **/

export default function verifyInput(input, rules){
    if(rules.length === 0){return true;}
    return rules.every((rule)=>rule(input));
}