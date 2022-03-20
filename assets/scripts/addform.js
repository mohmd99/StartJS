function addform() {
  let form = document.getElementById("add-modal");
  let backdrop = document.getElementById("backdrop");
  form.classList.remove("visible");
  backdrop.classList.remove("visible");
}
//---------------------
function displayform() {
  let entery = document.getElementById("book-list");
  
  let newItem = new Array();
  newItem = JSON.parse(localStorage.getItem("list"))
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  if (newItem.length != 0) {
    document.getElementById("empty").classList.add("hidden");
    for (let i = 0; i < newItem.length; i++) {
      let li = document.createElement("li");
      li.className = "book-element";
      li.id = i + 1;
      entery.appendChild(li);
      let div1 = document.createElement("div");
      div1.className = "book-element__image";
      let img = document.createElement("img");
      img.src = newItem[i].url;
      div1.appendChild(img);
      let div2 = document.createElement("div");
      div2.className = "book-element__info";
      let h2 = document.createElement("h2");
      div2.appendChild(h2);
      h2.innerHTML = newItem[i].title;
      let p = document.createElement("p");
      p.innerText = newItem[i].rating + "/5";
      div2.appendChild(p);
      li.appendChild(div1);
      li.appendChild(div2);
    }
  } else {
    document.getElementById("empty1").classList.add("hidden");
  }
}
//------------------------
function savedata() {
  var i=0;
  let title = document.getElementById("title").value;
  let url = document.getElementById("image-url").value;
  let rating = document.getElementById("rating").value;
  let newItem = new Array();
  newItem = JSON.parse(localStorage.getItem("list"))
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  newItem.push({
    id: ++i,
    title: title,
    url: url,
    rating: rating,
  });
  localStorage.setItem("list", JSON.stringify(newItem));
}
//validation form 
error1 = document.getElementById("error1");
error2 = document.getElementById("error2");
error3 = document.getElementById("error3");
var bookTitle = document.querySelector("#title");
bookTitle.addEventListener("mouseout", function () {
  if (bookTitle.value.length == 0) {
    bookTitle.style.border = "1px solid red";
    return false;
  } else {
    bookTitle.style.border = "1px solid green";
    error1.classList.add("hidden");
  }
});
var url_link = document.querySelector("#image-url");
url_link.addEventListener("mouseout", function () {
  if (url_link.value.length == 0) {
    url_link.style.border = "1px solid red";
    return false;
  } else if (!url_link.value.match(/\.(jpg|jpeg|gif|png)$/)){
  
    url_link.style.border = "1px solid red";
  
    return false;
  }
  else{
    url_link.style.border = "1px solid green";
    error2.classList.add("hidden");
  }
});
var ratingBook = document.querySelector("#rating");
ratingBook.addEventListener("mouseout", function () {
  if (
    ratingBook.value.length == 0 ||
    ratingBook.value > 5 ||
    ratingBook.value < 0
  ) {
    ratingBook.style.border = "1px solid red";
    return false;
    
  } else {
    ratingBook.style.border = "1px solid green";
    error3.classList.add("hidden");
  }
});
let addbtn = document.getElementById("add");
//---------------------------
function validate() {
  if (bookTitle.value.length == 0) {
    error1.innerHTML = "Title Field is required";
    error1.style.color = "red";
  }
  if (url_link.value.length == 0) {
    error2.innerHTML = "url Field is required";
    error2.style.color = "red";
  } else 
    if (!url_link.value.match(/\.(jpg|jpeg|gif|png)$/)){
      
      url_link.style.border = "1px solid red";
         error2.innerHTML='url must be for a photo';
      return false;
  }
  if (
    ratingBook.value.length == 0 
  ) {
    error3.innerHTML = "rating Field is required";
    error3.style.color = "red";
    return false;
  } else if (ratingBook.value > 5 ||
    ratingBook.value < 0){
      error3.innerHTML = "rating must be from 0-5";
    error3.style.color = "red";
    return false;
    }else {
   addform() ,
   savedata()
   
  }
}
//----------------------
 document.getElementById("book-list").innerHTML='';
displayform()
addbtn.addEventListener("click",function(e){
  e.preventDefault();
  document.getElementById("book-list").innerHTML='';
   validate();
   displayform();
 bindEventToListener();
location.reload;
}
 )

