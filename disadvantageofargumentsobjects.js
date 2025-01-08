//1. arguments object cannot be used with arrow functions:
//2.arguments object cannnot be used with filter, map, reduce, forEach

function add(){
    let res = arguments.reduce((acc, ele)=>acc * ele,1);//arguments.reduce is not a function
    console.log(res);
}
add();
add(10,20);
add(10,20,30);

