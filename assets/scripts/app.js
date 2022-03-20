

 
function addBook(){
    let form =document.getElementById("add-modal");
    form.classList.add('visible');
}
function cancelform(){
    let form =document.getElementById("add-modal");
    let backdrop =document.getElementById("backdrop");
    form.classList.remove('visible');
    backdrop.classList.remove('visible');
}

function backdrop(){
    let backdrop =document.getElementById("backdrop");
    backdrop.classList.add('visible');
}
let btn =document.getElementById('btn');
btn.addEventListener("click",addBook);
btn.addEventListener("click",backdrop);
let cancelbtn=document.getElementById('cancel');
cancelbtn.addEventListener("click",cancelform);



