
let itemscontainerelement = document.querySelector(".menuitems");
let innerHTML = '';
let bagitems=[]
let doticon=document.getElementById("doticon");

menu_list.forEach(menu=>{
    innerHTML+=`
    <div class="itemimage">
         <img src="./IMAGES/${menu.menu_image}.png" class="imgmenu">
         <p>${menu.menu_name}</p>   
    </div>  `
});
itemscontainerelement.innerHTML=innerHTML;

function countDuplicates(array) {
    const counts = {};
  
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
  
      if (!counts[element]) {
        counts[element] = 0;
      }
  
      counts[element]++;
    }
  
    return counts;
  }

let counter = 1;
let total=0;
const counters = {};
doticon.classList.remove("dot")
for (let i = 1; i <= 32; i++) {
    counters[`counter${i}`] = 0;
}
console.log(counters)
function icon(total){
    if(total==0){
        doticon.classList.remove("dot")
    }else if(total>0){
        doticon.classList.add("dot")
    }
}

function increment(id) {
    bagitems.push(id)
}

function decrement(id) {
    if (counter > 0) {
        total--;
        counters["counter"+id]--;
        console.log(id)
        document.getElementById(id).innerText = counters["counter"+id];
        icon(total)
    }
}

let itemscontainerelement1 = document.querySelector(".order");
innerHTML = '';

food_list.forEach(food=>{
    innerHTML+=`
    <div class="card">
        <img src="./IMAGES/${food.image}.png">
        <div class="card-content">
            <a href="${food._id}"  class="reviewlink"><div class="card-title">${food.name}</div></a>
            <div class="stars">★★★★☆</div>
            <div class="card-text">Food provides essential nutrients for overall health and well-being</div>
            <div class="card-price">${food.price}</div>
            <div class="counter-container">
                <form method="post" action="/add">
                    <input type="hidden" name="id" value="${food._id}">
                    <button class="counter-button plus" onclick="increment(${food._id})">+</button>
                </form>    
            </div> 
        </div>
    </div>
    `
});
itemscontainerelement1.innerHTML=innerHTML;