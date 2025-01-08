// We have used function declarations: 
//Global Scope
add()
sub()
function sub (){
    //console.log(x+y); //Cannot access 'x' before initialization
    let x = 40;
    var y = 50;
    console.log(x+y);//90
}
function add(){
    console.log(a+b); //NaN
    var a = 50;
    var b = 60;
    console.log(a+b);//110
}