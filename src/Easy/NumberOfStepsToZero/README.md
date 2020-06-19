## Description

Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

## Starting Point

``` javascript
/**
* @param {number} num
* @return {number}
*/
var numberOfSteps  = function(num) {
let steps = 0
while( num > 0 ){
steps++
num = num % 2 ? num - 1 : num / 2
}
return steps
};
```

## Constrains

None.
