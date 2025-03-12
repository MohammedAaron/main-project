let products = {
data:[
{
productNam:"the smart watch blak",
catogery:"watches",
price: 150,
imge:"https://raw.githubusercontent.com/MohammedAaron/main-project/refs/heads/main/img/207.webp"

},
{
productNam:"sparklar watch",
catogery:"watches",
price: 1200,
imge:"https://github.com/MohammedAaron/main-project/blob/main/img/black%20watch.jpeg?raw=true"

},
{
 productNam:"the iron watch",
 catogery:"watches",
 price: 150,
 imge:"https://github.com/MohammedAaron/main-project/blob/main/img/wactc3.jpeg?raw=true"
 },
 {
 productNam:"the black watch",
 catogery:"watches",
 price: 200,
 imge:"https://github.com/MohammedAaron/main-project/blob/main/img/wactch2.jpeg?raw=true"
        
},
{
    productNam:"the top  watch",
    catogery:"watches",
    price: 500,
    imge:"https://github.com/MohammedAaron/main-project/blob/main/img/watch.jpg?raw=true"
           
},
{
    productNam:"the top  watch",
    catogery:"watches",
    price: 850,
    imge:"https://github.com/MohammedAaron/main-project/blob/main/img/watch4.jpeg?raw=true"
           
},



{
    productNam:"lorex camera",
    catogery:"cameras",
    price: 200,
    imge:"https://github.com/MohammedAaron/main-project/blob/main/img/camrea1.jpeg?raw=true"
           
},

{
    productNam:"g rx  camera",
    catogery:"cameras",
    price: 200,
    imge:"https://github.com/MohammedAaron/main-project/blob/main/img/camera2.jpeg?raw=true"
           
},

{
    productNam:"small camera",
    catogery:"cameras",
    price: 200,
    imge:"https://github.com/MohammedAaron/main-project/blob/main/img/camera3.jpeg?raw=true"
           
},

{
    productNam:"photo camera",
    catogery:"cameras",
    price: 1250,
    imge:"https://github.com/MohammedAaron/main-project/blob/main/img/camera4.jpeg?raw=true"
           
},

{
    productNam:"photo camera",
    catogery:"cameras",
    price: 1250,
    imge:"https://github.com/MohammedAaron/main-project/blob/main/img/camera5.jpeg?raw=true"
           
},





{
    productNam:"lox perfume",
    catogery:"perfumies",
    price:400,
    imge:"https://github.com/MohammedAaron/main-project/blob/main/img/perfume1.jpeg?raw=true"
           
},

{
    productNam:"mode perfume",
    catogery:"perfumies",
    price:400,
    imge:"https://github.com/MohammedAaron/main-project/blob/main/img/perfume2.jpeg?raw=true"
           
},

{
productNam:"brand perfume",
catogery:"perfumies",
price:400,
imge:""
       
},

{
    productNam:"vitamin perfume",
    catogery:"perfumies",
    price:300,
    imge:"https://github.com/MohammedAaron/main-project/blob/main/img/vitamin.jpeg?raw=true"
           
},






{
    productNam:"the blac car",
    catogery:"cars",
    price:3000,
    imge:"https://github.com/MohammedAaron/main-project/blob/main/img/black%20car.jpeg?raw=true"
           
},

{
    productNam:"the gray car",
    catogery:"cars",
    price:3500,
    imge:"https://github.com/MohammedAaron/main-project/blob/main/img/gray%20card.jpeg?raw=true"
           
},

{
    productNam:"the red car",
    catogery:"cars",
    price:3500,
    imge:"img/red car.jpeg"
           
},

{
    productNam:"the white car",
    catogery:"cars",
    price:3500,
    imge:"https://github.com/MohammedAaron/main-project/blob/main/img/wihte%20car.jpeg?raw=true"
           
},





{
    productNam:"sammsung A13",
    catogery:"phones",
    price:500,
    imge:"https://github.com/MohammedAaron/main-project/blob/main/img/sam2.jpeg?raw=true"
           
},

{
    productNam:"sammsung A12",
    catogery:"phones",
    price:1400,
    imge:"https://github.com/MohammedAaron/main-project/blob/main/img/sammsoing.jpeg?raw=true"
           
},

{
    productNam:"hawawie",
    catogery:"phones",
    price:400,
    imge:"https://github.com/MohammedAaron/main-project/blob/main/img/smart%20phone.jpeg?raw=true"
           
},
]}

for (let i of products.data) {
let storge = document.createElement(`div`);
storge.classList.add("card" , i.catogery , "hide");
// we can create the imge container 
let imgecontainer = document.createElement(`div`);
imgecontainer.classList.add(`imge-container`);
// create ime tag Element 
let imge = document.createElement(`img`);
imge.setAttribute(`src` ,i.imge);
imge.classList.add(`imge-sorce`);
// appenchild the ime tag to the imecontainer
imgecontainer.appendChild(imge);

// create the div container which have prive and productname
let container = document.createElement(`div`);
container.classList.add(`container`);
// we can create h5 tag and his innertext is productname 
let productName = document.createElement(`h5`);
productName.classList.add(`product-name`);
productName.innerText = i.productNam.toUpperCase();
// we can creat h6 and his innertext is price
let price = document.createElement(`h6`);
price.classList.add(`price`);
price.innerText =  "$" +i.price;
// we stor the productname and the price into the containerDiv
container.appendChild(productName);
container.appendChild(price);

// we stor the container into the imgecontainer
imgecontainer.appendChild(container);
storge.appendChild(imgecontainer);


let products = document.querySelector(`.products`);
products.appendChild(storge);  
};


function filterproduct(value) {
let buttons = document.querySelectorAll(`.button-value`);
buttons.forEach( (element) => {
if (value.toUpperCase() == element.innerText.toUpperCase()) {
    element.classList.add(`active`); 
}
else
{
element.classList.remove(`active`); 
}
});



let storge = document.querySelectorAll(`.card`);
storge.forEach((element) =>{
if (value == "all") {
 element.classList.remove(`hide`)   
}
 else
 {
    if (element.classList.contains(value)) {
        element.classList.remove("hide")
    } 
    else {
        element.classList.add("hide")
    }
}


})};


 document.querySelector(`.search-button`).addEventListener("click" ,()=>{
 let searchvalue = document.querySelector(`.input-search`).value;
 let cards = document.querySelectorAll(`.card`);
 let productName = document.querySelectorAll(`.product-name`);
 productName.forEach((element,index) => {
 if (element.innerText.includes(searchvalue.toUpperCase())) {
    cards[index].classList.remove("hide");
 }
  else 
  {
    cards[index].classList.add("hide");  
 }

})
});






window.onload = () => {

    filterproduct(`all`);


}