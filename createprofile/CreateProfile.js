image_flag = 0;
document.querySelector("#change-text").innerHTML = "Hello";
// document.querySelector("#change-text").innerTEXT = `${fileInput}`;
function uploadPhoto() {
    const fileInput = document.getElementById('fileInput');
    const filePath = fileInput.value;
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    
    if (!allowedExtensions.exec(filePath)) {
        alert('Invalid file type. Please upload an image.');
        fileInput.value = '';
        return false;
    } else {
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            displayUploadedPhoto(file);
        } else {
            console.error('No file selected.');
        }
    }
}

function displayUploadedPhoto(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const imgElement = document.createElement('img');
        imgElement.src = event.target.result;
        imgElement.id = "person-img";
        const uploadedPhotoDiv = document.getElementById('uploadedPhoto');
        uploadedPhotoDiv.innerHTML = '';
        uploadedPhotoDiv.appendChild(imgElement);
        image_flag = 1;
    };
    reader.readAsDataURL(file);
}

function proceed(){
    let address = document.querySelector("#address").value;
    const img = document.querySelector("#person-img");
    if(address != ""){
        if(image_flag == 1)
            window.location.href = "Skill/Skill.html";
        else{
            document.querySelector("#fileInput").style.border = "2px solid red";
        }
    }
    else{
        if(image_flag != 1){
            document.querySelector("#uploadedPhoto").style.border = "2px solid red";
            document.querySelector("#address").style.border = "2px solid red";
        }
        else{
            document.querySelector("#address").style.border = "2px solid red";
        }
    }
}
