//map filter arrowfns

//given a array return back a new array and every value of array is multiplied by 2
//input [ 1,2,3,4,5] output - [2,4,6,8,10]

// let input = [1,2,3,4,5]

// const newarray = [];
// for(let i = 0 ; i < input.length; i++){
//     newarray.push(input[i] * 2  )
// }

// console.log(newarray);

// //other solution
// function transform(i){
//     return i * 2;
// }

//  const ans = input.map(transform);
//  console.log(ans);

// //filtering
// //what if i tell u  , given a input array, give me back all even value

// //ugly way

// newArray = [];
// for(let i = 0 ; i < input.length; i++){
//     if(input[i] % 2 == 0){
//         newArray.push(input[i]);
//     }
// }

// console.log(newArray);

//using filter

function filterLogic(n){
    if(n%2 ==0){
        return true;
    }else{
        return false;
    }
}

const ans = input.filter(filterLogic);
console.log(ans);