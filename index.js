//*1. amen metodi hamar grel custom functionnery

//1. amen elementi vra katarum e gorcoxutyun aranc nor aaray stexcelu, kam edit anelu
//const arr2 = [100,200,300]

function createForEach(arr){
    for(let i=0; i<arr.length; i++){
       arr[i]=arr[i]+3
    }
    return arr;
}
//console.log(createForEach([100,200,300]))

//arr.forEach((elem, index, array) => console.log(elem+3, index, array))

//2 map stexcum e nor array u gorcoxuttyunner e katarum
// const arrMap = arr.map((elem) => {
//     return elem -3
// })
// console.log(arr, arrMap);

function createMap(arr){
    arrAcc=[]
    for(let i=0; i<arr.length; i++){
        arrAcc.push(arr[i]+3)
     }
     return arrAcc;
}
//console.log(createMap([100,200,300]))

//3 filter bavararox bolor arjeqnery veradardznum e,(aranc poxelu orginaly)
// let filter = [10,20,300].filter((elem) => elem < 40)
// console.log(filter)

function createFilter(arr){
    arrAcc=[]
    for(let i=0; i<arr.length; i++){
        if(arr[i]<40){
            arrAcc.push(arr[i])
        }     
     }
     return arrAcc;
}
//console.log(createFilter([10, 15, 20, 40, 50, 60]))
//4. miacnum e arraynery
//const newArr = arr.concat(arr2)
// console.log(newArr);

 function createCustomConcat(arr1, arr2){
    arrAcc=[]
    for(let i=0; i<arr1.length; i++){
        arrAcc.push(arr1[i])    
    }
    for(let j=0; j<arr2.length; j++){
        arrAcc.push(arr2[j])
    }
     return arrAcc;
 }
//console.log(createCustomConcat([1, 3, 5, 9], [11, 19, 89, 90]))
//5. Array of
//-------------------------------------------
//const result = Array.of(10,20,30, {name: 'Varduhi'}, 'Lily')
//console.log(result);

function createArrayOf(arr){
    //
}
//6. Array from
// const str = 'Hello world'
// const result = Array.from(str)
// console.log(result);
function createArrayFrom(str){
    arr=[]
    for(let i=0; i<str.length; i++){
        arr.push(str[i])
    }
    return arr;
}
//console.log(createArrayFrom('Hello world'))

//7. findindex
function createFindIndex(arr){
    let index=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>10){
            index=i
            break
        }
    }
    return index;
}
//console.log(createFindIndex([4, 10, 11, 13, 15]))
//const result = arr.findIndex((elem) => elem > 10)
// console.log(result);

//8 flat
//-----------------------------------
// const arr1 = [0,1,[2,3]]
// console.log(arr1.flat())

//9 includes veradardznum e true or false
// const inc = arr.includes(100)
// console.log(inc);

function createIncludes(arr) {
    let returnValue=false;
    for(let i=0; i<arr.length; i++){
        if(arr[i]===100){
            returnValue = true
            break
        }
    }
    return returnValue
  }
//console.log(createIncludes([100, 15, 500, 15, 50]))
//10 indexof
arr=[100, 15, 500, 15, 50, 220]
const index = arr.indexOf(220)
//console.log(index);

function createIndexOf(arr, index){
    if(index=0)
    for(let i=0; i<arr.length; i++){
        if(arr[i]===220){

        }
    }
}
// 11. join sarqum e string

// const join = arr.join(',')
// console.log(join);


function testJoin(arr, sep){
    let newArray = arr.map((val) => val +",");
    let str=""
   for(let i=0; i<newArray.length; i++){
        str=str+newArray[i]
   }
    return str;
}

console.log(testJoin(["d", 1, "p"]), ", ")
//12. splice

// arr.splice(2,2)
// console.log(arr);

//13. split

// let str = 'Hello joxovur jan'

// const newArr = str.split("");
// console.log(newArr);

// 14 toString
function customToString(arr){
    let str=''
    for(let i=0; i<arr.length; i++){
        str=str.concat(arr[i])
    }
    return str;
}
//console.log(customToString(["s", "i", "l", "v", "e", "r"]))

// const str = arr.toString()
// console.log(str);

//15 reduce

// const arr = [10,20,30,40,50]

// let reduce = arr.reduce((acc, elem, currentindex, array) => {
// console.log(currentindex, array)
//     return acc + elem
// }, -1)
// console.log(reduce);

//16
//օգտագորխել reduce որ output-ը լինի "Lorem Ipsum is simply dummy text of the printing and typesetting industry . Lorem Ipsum has been"
/*
let data = [
    ["Lorem", "Ipsum", "is"],
    ["simply", "dummy", "text", "of"],
    ["the", "printing", "and", "typesetting", "industry"],
    [".", "Lorem", "Ipsum", "has", "been"],
  ];
function createSentance(data){
    fullData = data.map(function(arr){
         return arr.join(' ')
         });
    let str= fullData.reduce(function (acc, value) {
        return  acc + value;
    }, ' ')
    sentance = str.replace(',', '')
    return sentance
}

console.log(createSentance(data));
*/


//17 //arjeqnery veradardznel aranc duplicate ogtagorcelov reduce
/*
let array = [1, 2, 5, "a", "a", "f", 3, 4, 2, "d", 5, "j"];

function findUniqueValues(arr) {
    let newArray = arr.reduce(function (acc, currentValue) {
        if (!acc.includes(currentValue))
            acc.push(currentValue);
        return acc;
    }, []);
    return newArray;
}
//console.log(findUniqueValues(array));
*/

//18 const str = "Hello"; tvyal stringy reverse anel reduce-i ognutyamb
/* const str = "Hello"
 let array=Array.from(str)
 let newStr= array.reduce((acc, val)=>{
    return val+acc;
}, "")
console.log(newStr)
*/

//19
//veradardznel drakan tvery qarakusi bardzracrac zangvac, ogtagorcel reduce
/*let array = [-3, 4, 7, 2, -5,  4] 

function findPositiv(arr){
    let newArray = arr.reduce(function (acc, currentValue) {
        if (currentValue>0)
            acc.push(currentValue*currentValue);
        return acc;
    }, []);
    return newArray
}
console.log(findPositiv(array))
*/