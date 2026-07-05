const marvel_heros=["thor","Ironman","Spiderman"]
const dc_heros=["Superman","Flash","Batman"]

// marvel_heros.push(dc_heros);        // array inside array
//console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

// const newArr=marvel_heros.concat(dc_heros);
// console.log(newArr);

// const all_new_heros = [...marvel_heros, ...dc_heros, ...newArr];
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const all_another_array = another_array.flat(1);
// console.log(another_array);
// console.log(all_another_array);

// console.log(Array.isArray('Neha'));
// console.log(Array.from("Neha"));
// console.log(Array.from({name:"Neha"}));       // empty array (imp)

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));



