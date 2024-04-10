flag = 0;
function slide_bar(){
    if(flag == 0){
        document.querySelector("#left-icon-ul").style.opacity = "1";
        document.querySelector("#left-icon-ul").style.zIndex = "3";
        flag = 1;
    }
    else{
        document.querySelector("#left-icon-ul").style.opacity = "0";
        document.querySelector("#left-icon-ul").style.zIndex = "-1";
        flag = 0;
    }
}