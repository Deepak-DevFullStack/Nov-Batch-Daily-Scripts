//creating multiple functions with the same name but diff number of parameteres:

// function add(){
//     console.log(arguments[0],arguments[1],arguments[2]);
// }

// add();//undefined undefined undefined   --->arguments = []
// add(10);//10 undefined undefined        --->arguments = [10]
// add(10,20);//10 20 undefined            --->arguments = [10,20]
// add(10,20,30);//10 20 30                --->arguments = [10,20,30]
// add(10,20,'Priya',25);//                --->arguments = [10,20,'Priya',25]


/*
function mul() ---> Multiple parameters:
if mul(a,b) ---> a*b
if mul(a,b,c) ---> a*b*c
mul(a,b,c,d) ---> a*b*c*d
if mul function have more than 4 arguments or less than 2 then display an error msg:
Multiplication cannot be performed
*/


// function mul(){
//     if(arguments.length === 2){
//         console.log(`Multiplication of ${arguments[0]} 
//         and ${arguments[1]} is:`,arguments[0]*arguments[1]);
//     }
//     else if(arguments.length === 3){
//         console.log(`Multiplication of ${arguments[0]}, ${arguments[1]} and 
//         ${arguments[2]} is:`,arguments[0]*arguments[1]*arguments[2]);
//     }
//     else if (arguments.length === 4){
//         console.log(
//         `Multiplication of ${arguments[0]}, ${arguments[1]}, ${arguments[2]} and 
//         ${arguments[3]} is:`,arguments[0]*arguments[1]*arguments[2]*arguments[3]);
//     }
//     else {
//         console.log('Invalid number of Arguments...!!')
//     }
// }

// mul();            //---> arguments= []
// mul(10,20);       //---> arguments= [10,20]
// mul(10,20,30);    //--->arguments= [10,20,30]
// mul(10,20,30,40); //--->arguments= [10,20,30,40]


function mul(){
    //arguments = []
    let res = 1;
    for(let i=0;i<arguments.length;i++){
        res = res * arguments[i];
    } 
    console.log('Multiplication Result is:',res);
}

mul(); //Multiplication Result is: 1