// function name(name){
//     console.log("The 10 name is : " + name); 
// }
// name("Ram");
// name("Priya") 

var x = document.getElementById("my-cards"); 
x.style.display = "none"; 
function myBtn(){
    if(x.style.display == "none"){
        x.style.display = "flex"; 
    }
    else{
        x.style.display = "none"; 
    }
}