var a = 1;
function zmianazdjecia() {
    if(a == 1){
        document.getElementById("imgid").src="zdj2.jpg";
        a = a + 1;
        return a;
    }
    if(a == 2){
        document.getElementById("imgid").src="zdj3.jpg";
        a = a + 1;
        return a;
    }
    if(a == 3){
        document.getElementById("imgid").src="zdj4.jpg";
        a = a + 1;
        return a;
    }
    if(a == 4){
        document.getElementById("imgid").src="zdj5.jpg";
        a = a + 1;
        return a;
    }
    if(a == 5){
        document.getElementById("imgid").src="zdj6.jpg";
        a = a + 1;
        return a;
    }
    if(a == 6){
        document.getElementById("imgid").src="zdj7.jpg";
        a = a + 1;
        return a;
    }
    if(a == 7){
        document.getElementById("imgid").src="zdj1.jpg";
        a = 1;
    }
  } 
function cofaniezdjecia(){
    if(a == 1){
        document.getElementById("imgid").src="zdj7.jpg";
        a = 6;
        return a;
    }
    if(a == 2){
        document.getElementById("imgid").src="zdj1.jpg";
        a = a - 1;
        return a;
    }
    if(a == 3){
        document.getElementById("imgid").src="zdj2.jpg";
        a = a - 1;
        return a;
    }
    if(a == 4){
        document.getElementById("imgid").src="zdj3.jpg";
        a = a - 1;
        return a;
    }
    if(a == 5){
        document.getElementById("imgid").src="zdj4.jpg";
        a = a - 1;
        return a;
    }
    if(a == 6){
        document.getElementById("imgid").src="zdj5.jpg";
        a = a - 1;
        return a;
    }
    if(a == 7){
        document.getElementById("imgid").src="zdj6.jpg";
        a = a - 1;
    }
}
function zdj1(){
    document.getElementById("imgid").src="zdj1.jpg";
    a = 1;
    return a;
}
function zdj2(){
    document.getElementById("imgid").src="zdj2.jpg";
    a = 2;
    return a;
}
function zdj3(){
    document.getElementById("imgid").src="zdj3.jpg";
    a = 3;
    return a;
}
function zdj4(){
    document.getElementById("imgid").src="zdj4.jpg";
    a = 4;
    return a;
}
function zdj5(){
    document.getElementById("imgid").src="zdj5.jpg";
    a = 5;
    return a;
}
function zdj6(){
    document.getElementById("imgid").src="zdj6.jpg";
    a = 6;
    return a;
}
function zdj7(){
    document.getElementById("imgid").src="zdj7.jpg";
    a = 7;
    return a;
}