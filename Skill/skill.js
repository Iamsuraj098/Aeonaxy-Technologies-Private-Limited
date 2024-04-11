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
    window.location.href = "../Verifyemail/index.html";
}

flag = 0;
function press_return(){
    if(flag == 0){
        flag = 1;
        document.querySelector("#add-text").innerText = "Anything else? You can select multiple";
        let a = document.createElement('a');
        a.href = "../createprofile/CreateProfile.html";
        a.innerText = "or Press RETURN";
        a.setAttribute("id", "press_return");
        document.querySelector("#finsh").append(a);
    }
    if(rad1.checked){
        document.querySelector("#share-design").innerText = "Share your work on Dribbble and connect with a vibrant community of design enthusiasts worldwide!";
    }
    if(rad2.checked){
        document.querySelector("#looking-design").innerText = "Find the perfect designer for your project on Dribbble. Browse top talent and transform your vision";
    }
    if(rad3.checked){
        document.querySelector("#inspiration-design").innerText = "Discover stunning designs, ignite your creativity, and connect with talented artists on Dribble today!";
    }
}
