let my_arr = [1,2,3,4,5];

function array_avg (array){
let sum = array.reduce((total, one_number) => total + one_number, 0);
let avg=sum/array.length;
return avg};
console.log(array_avg(my_arr));
