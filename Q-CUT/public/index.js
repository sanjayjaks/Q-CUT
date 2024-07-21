
let itemscontainerelement = document.querySelector(".menuitems");
let innerHTML = '';


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
let bagitems=[]
function decrement(id) {
    if (counter > 0) {
        bagitems.push(id);
    }
}

let itemscontainerelement1 = document.querySelector(".order");
innerHTML = '';

food_list1.forEach(food => {
    innerHTML += `
    <div class="card" id="order-success">
        <img src="./IMAGES/${food.image}.png">
        <div class="card-content">
            <div class="card-title"><a href="${food._id}" class="reviewlink">${food.name}</a></div>
            <div class="stars">★★★★☆</div>
            <div class="card-text">Food provides essential nutrients for overall health and well-being</div>
            <div class="card-price">${food.price}</div>
            <div class="counter-container">
                <form method="post" action="/add">
                    <input type="hidden" name="id" value="${food._id}">
                    <input type="submit" value="+" class="counter-button plus" onclick="increment(${food._id})">
                </form>
            </div> 
        </div>
    </div>
    `;
});

itemscontainerelement1.innerHTML=innerHTML;


document.getElementById('add-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/add', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('Form successfully submitted');
            const orderDiv = document.getElementById('order-success');
            orderDiv.classList.add('highlight');
            orderDiv.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('Error submitting form');
        }
    };

    xhr.send(formData);
});