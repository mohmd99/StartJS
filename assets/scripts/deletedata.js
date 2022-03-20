var liID;
function show(liID){
    let form =document.getElementById("delete-modal");
    form.classList.add('visible');
    let backdrop =document.getElementById("backdrop");
    backdrop.classList.add('visible');
    window.value=this.id;
    return liID;
    //deletebook(liID);
}
function bindEventToListener(){
    var elements = document.getElementsByClassName("book-element");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', show, false);
} 
}
function canceldelete(){
    let form =document.getElementById("delete-modal");
    let backdrop =document.getElementById("backdrop");
    form.classList.remove('visible');
    backdrop.classList.remove('visible');
    
}
function deletebook(){
let id=window.value-1;
    let form =document.getElementById("delete-modal");
    let backdrop =document.getElementById("backdrop");
    form.classList.remove('visible');
    backdrop.classList.remove('visible');
    let newItem=JSON.parse(localStorage.getItem("list"));
newItem.splice(id,1)
localStorage.setItem('list', JSON.stringify(newItem));

}
document.getElementById("book-list").innerHTML='';
displayform();



let yes =document.getElementById('yes');
let no =document.getElementById('no');
newItem=localStorage.getItem('list')
yes.addEventListener('click',function(e){
  
    e.preventDefault();
    document.getElementById("book-list").innerHTML='';
   deletebook();  
   displayform();
   bindEventToListener();
    location.reload;
});
no.addEventListener('click',canceldelete);

bindEventToListener();
