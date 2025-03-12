let products = {
data:[
{
productNam:"the smart watch blak",
catogery:"watches",
price: 150,
imge:"207.webp"

},
{
productNam:"sparklar watch",
catogery:"watches",
price: 1200,
imge:"black watch.jpeg"

},
{
 productNam:"the iron watch",
 catogery:"watches",
 price: 150,
 imge:"wactc3.jpeg"
 },
 {
 productNam:"the black watch",
 catogery:"watches",
 price: 200,
 imge:"wactch2.jpeg"
        
},
{
    productNam:"the top  watch",
    catogery:"watches",
    price: 500,
    imge:"watch.jpg"
           
},
{
    productNam:"the top  watch",
    catogery:"watches",
    price: 850,
    imge:"watch4.jpeg"
           
},



{
    productNam:"lorex camera",
    catogery:"cameras",
    price: 200,
    imge:"camrea1.jpeg"
           
},

{
    productNam:"g rx  camera",
    catogery:"cameras",
    price: 200,
    imge:"camera2.jpeg"
           
},

{
    productNam:"small camera",
    catogery:"cameras",
    price: 200,
    imge:"camera3.jpeg"
           
},

{
    productNam:"photo camera",
    catogery:"cameras",
    price: 1250,
    imge:"camera4.jpeg"
           
},

{
    productNam:"photo camera",
    catogery:"cameras",
    price: 1250,
    imge:"camera5.jpeg"
           
},





{
    productNam:"lox perfume",
    catogery:"perfumies",
    price:400,
    imge:"perfume1.jpeg"
           
},

{
    productNam:"mode perfume",
    catogery:"perfumies",
    price:400,
    imge:"perfume2.jpeg"
           
},

{
productNam:"brand perfume",
catogery:"perfumies",
price:400,
imge:"images (1).jpeg"
       
},

{
    productNam:"vitamin perfume",
    catogery:"perfumies",
    price:300,
    imge:"vitamin.jpeg"
           
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
    imge:"gray card.jpeg"
           
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
    imge:"wihte car.jpeg"
           
},





{
    productNam:"sammsung A13",
    catogery:"phones",
    price:500,
    imge:"sam2.jpeg"
           
},

{
    productNam:"sammsung A12",
    catogery:"phones",
    price:1400,
    imge:"sammsoing.jpeg"
           
},

{
    productNam:"hawawie",
    catogery:"phones",
    price:400,
    imge:"smart phone.jpeg"
           
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