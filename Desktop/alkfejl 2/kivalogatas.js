"use strict";

//var, let, const
const szamok = [2, 4, -3, 6, 15, -87, -45, -1];

function kivalogatas(arr, tulFn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if ( tulFn(arr[i]) ) {
            result.push(arr[i]);
        }
    }
    return result;
}

/*
function negativE(p) {
    return p < 0;
}
*/

console.log( kivalogatas(szamok, function (p) {
    return p < 0;
}) ); 

console.log( szamok.filter(function negativE(p) {
    return p < 0;
}) );

console.log( szamok.filter( p => p < 0) );