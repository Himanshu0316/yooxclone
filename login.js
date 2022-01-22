function myForm(){
    window.location.href="https://www.facebook.com/login/"
}
function myFormg(){
    window.location.href="https://accounts.google.com/signin"
}
function raGSTR(){
    window.location.href="ragister.html"
}

document.querySelector(".bttn1").addEventListener("click",myName());
arr=[]  || JSON.parse(localStorage.getItem("todoList"))
function myName(){
    
   
    var email = document.querySelector("ipt1").value;
    var pass = document.querySelector("ipt1").value;
    var todoObj = {
         itemName: email,
         itemqty:pass,
         
     };
     arr.push(todoObj);
     localStorage.setItem("todoList",JSON.stringify(arr));
}
