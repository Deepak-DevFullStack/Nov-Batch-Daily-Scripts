const add = (...args)=>{
    let res = args.reduce((acc,ele) => acc * ele,1);
    console.log('Result is: ',res);
}
add();//args = []
add(10,20); //args = [10,20]
add(10,20,30); //args = [10,20,30]


function mul(...args){
    let res = args.reduce((acc,ele)=> acc * ele,1);
    console.log('Multiplication is: ',res);
}
mul();
mul(10,20);
mul(1,2,3,6,7);