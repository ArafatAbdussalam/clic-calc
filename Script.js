let display = document.getElementById("display");
function disp(a){
    display.innerHTML += a;
}
function result(){
    b=eval(display.innerHTML);
    display.innerHTML = b;
}
function calculator(){
    display.innerHTML="";
}

document.getElementById("1").addEventListener("click", function(){disp(1);});
document.getElementById("2").addEventListener("click", function(){disp(2);});
document.getElementById("3").addEventListener("click", function(){disp(3);});
document.getElementById("4").addEventListener("click", function(){disp(4);});
document.getElementById("5").addEventListener("click", function(){disp(5);});
document.getElementById("6").addEventListener("click", function(){disp(6);});
document.getElementById("7").addEventListener("click", function(){disp(7);});
document.getElementById("8").addEventListener("click", function(){disp(8);});
document.getElementById("9").addEventListener("click", function(){disp(9);});
document.getElementById("0").addEventListener("click", function(){disp(0);});
document.getElementById("decimal").addEventListener("click", function(){disp(".");});

document.getElementById("add").addEventListener("click", function(){disp("+");});
document.getElementById("subtract").addEventListener("click", function(){disp("-");});
document.getElementById("multiply").addEventListener("click", function(){disp("*");});
document.getElementById("division").addEventListener("click", function(){disp("/");});

document.getElementById("clear").addEventListener("click", function(){calculator(1);});
document.getElementById("result").addEventListener("click", function(){result(1);});
