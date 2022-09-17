nums = [ 3 ,6 , 7 , 4 , 8]
console.log(nums)
console.log(nums[0])
let s = 0;
for(let i = 0 ; i  < 5;  i++){
     s+=nums[i];
  
}
console.log("sum is :", s);
console.log("average is  : " , s / (nums.length))


//count of even and odd number 

let eveOdd = [2,3,4,5,6,67,8,81,92,99]
let e = 0 ;
let o = 0;
for(let i = 0 ; i < eveOdd.length ; i++){
         if(eveOdd[i]%2 == 0) e++;
         else
           o++;
}
console.log("Count of Even Number is :",  e)
console.log("Count of Odd Number is  :",  o)


matri = [
    [1,2,3],
    [3,4,5],
    [7,8,9]
]

search = prompt("Enter the element for the search : ")
for(let i  = 0 ; i < 3 ; i++){
     for(let j = 0 ; j < 3 ; j++){
             if( matri[i][j] == search){
                  console.log(`${search} is found at ${i} ${j}`)
                  break;
                }
     }
}




