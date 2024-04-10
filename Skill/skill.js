function Next_page(){
    let rad1 = document.querySelector("#rad1");
    let rad2 = document.querySelector("#rad2");
    let rad3 = document.querySelector("#rad3");
    if(rad1.checked || rad2.checked || rad3.checked){
        submitForm(rad1, rad2, rad3);
    }
    else{
        alert("Please Select One skill");
    }
}

function submitForm(rad1, rad2, rad3){
    // upadate database for skill selection
    window.location.href = "../Verifyemail/VerifyEmail.html";
}

flag = 0;
function press_return(){
    if(flag == 0){
        flag = 1;
        let a = document.createElement('a');
        a.href = "";
        a.innerText = "or Press RETURN";
        a.setAttribute("id", "press_return");
        document.querySelector("#finsh").append(a);
    }
}
