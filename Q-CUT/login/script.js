
const form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const username=form.username.value;
    const password=form.password.value;
    console.log(username);
    if(username=="saran" && password=="puvesh"){
        window.location.href="file:///C:/Users/cheed/OneDrive/Desktop/Q-CUT/homepage.html";
    }
    else{
        alert("wrong");
    }
});
function fn1(){
    window.location.href="file:///C:/Users/cheed/OneDrive/Desktop/Q-CUT/index.html";
}
