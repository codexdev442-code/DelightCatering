const show_text = document.querySelectorAll(".show");
const started = document.querySelector(".started p");
const why_us = document.querySelector(".why_us p");
const driven_by = document.querySelector(".driven_by p");
const started_span = document.querySelector(".started span");
const why_span = document.querySelector(".why_us span");
const driven_span = document.querySelector(".driven_by span");
const first_children = document.querySelector(".first_children");
const second_children = document.querySelector(".second_children");
const first_women = document.querySelector(".first_women");
const second_women = document.querySelector(".second_women");
const first_men = document.querySelector(".first_men");
const second_men = document.querySelector(".second_men");
const phone_links = document.querySelector(".phone_links");
const menu_box = document.querySelector(".menu_box");
const links = document.querySelectorAll(".phone_links li a");


// Show text click
show_text.forEach(div => {
  const plus = div.querySelector(".plus");

  div.addEventListener("click", () => {
    plus.classList.toggle("plus");
  });
});

started_span.addEventListener("click", () => {
  started.classList.toggle("increase");
});

why_span.addEventListener("click", () => {
  why_us.classList.toggle("increase");
});
driven_span.addEventListener("click", () =>{
   driven_by.classList.toggle("increase");
});

menu_box.addEventListener("click", () =>{
  phone_links.classList.toggle("toggle");
  menu_box.classList.toggle("menu_gap")
});

links.forEach(link =>{
  link.addEventListener("click", () =>{
    phone_links.classList.toggle("toggle");
    menu_box.classList.toggle("menu_gap")
  })
})

const children_cake = [
  {
    src: "buttercake.png",
    plus: "+",
    name: "Buttercake",
    cost: "20,000-₦40,000",
    describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
  },
  {
    src: "sprincleCake.jpeg",
    plus: "+",
    name: "Vanilla Flavor",
    cost: "20,000-₦40,000",
    describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
  },
  {
    src: "butterCake.jpeg",
    plus: "+",
    name: "Buttercake",
    cost: "20,000-₦40,000",
    describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
  }
];

const children_cakeTwo =  [
  {
    src: "HappyCake.jpeg",
    plus: "+",
    name: "Happy Cake",
    cost: "20,000-₦40,000",
    describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
  },
  {
    src: "sunflowerCake.jpeg",
    plus: "+",
    name: "Sunflower Cake",
    cost: "20,000-₦40,000",
    describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
  },
  {
    src: "flowerCake.jpeg",
    plus: "+",
    name: "Flower Cake",
    cost: "20,000-₦40,000",
    describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
  }
];

const women_cake = [
  {
    src: "buttercake.png",
    plus: "+",
    name: "Buttercake",
    cost: "20,000-₦40,000",
    describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
  },
  {
    src: "sprincleCake.jpeg",
    plus: "+",
    name: "Vanilla Flavor",
    cost: "20,000-₦40,000",
    describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
  },
  {
    src: "butterCake.jpeg",
    plus: "+",
    name: "Buttercake",
    cost: "20,000-₦40,000",
    describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
  }
];

const women_cakeTwo =  [
  {
    src: "HappyCake.jpeg",
    plus: "+",
    name: "Happy Cake",
    cost: "20,000-₦40,000",
    describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
  },
  {
    src: "sunflowerCake.jpeg",
    plus: "+",
    name: "Sunflower Cake",
    cost: "20,000-₦40,000",
    describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
  },
  {
    src: "flowerCake.jpeg",
    plus: "+",
    name: "Flower Cake",
    cost: "20,000-₦40,000",
    describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
  }
];

const men_cake = [
  {
    src: "buttercake.png",
    plus: "+",
    name: "Buttercake",
    cost: "20,000-₦40,000",
    describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
  },
  {
    src: "sprincleCake.jpeg",
    plus: "+",
    name: "Vanilla Flavor",
    cost: "20,000-₦40,000",
    describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
  },
  {
    src: "butterCake.jpeg",
    plus: "+",
    name: "Buttercake",
    cost: "20,000-₦40,000",
    describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
  }
];

const men_cakeTwo =  [
  {
    src: "HappyCake.jpeg",
    plus: "+",
    name: "Happy Cake",
    cost: "20,000-₦40,000",
    describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
  },
  {
    src: "sunflowerCake.jpeg",
    plus: "+",
    name: "Sunflower Cake",
    cost: "20,000-₦40,000",
    describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
  },
  {
    src: "flowerCake.jpeg",
    plus: "+",
    name: "Flower Cake",
    cost: "20,000-₦40,000",
    describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
  }
];

children_cake.forEach( cake =>{
   const container = document.createElement("div");
   const plus_div = document.createElement("div");
   const img = document.createElement ("img");
   const heading = document.createElement("h4");
   const p = document.createElement("p");
   
   plus_div.textContent = cake.plus;
   plus_div.classList.add('addbtn');
   img.src = cake.src;
   heading.textContent = cake.name;
   p.textContent = cake.cost;
   
   plus_div.addEventListener("click", ()=>{
     const items = {
       cakeImg: cake.src,
       cakeName: cake.name,
       cakePrice: cake.cost,
       cakeDescribtion: cake.describtion,
     };
     localStorage.setItem("selectedItem",JSON.stringify(items));
     location.href = 'checkout.html'
   });
   img.addEventListener("click", () => {
     const items = {
       cakeImg: cake.src,
       cakeName: cake.name,
       cakePrice: cake.cost,
       cakeDescribtion: cake.describtion,
     };
     localStorage.setItem("selectedItem",JSON.stringify(items));
     location.href = 'checkout.html'
   });
   
   container.appendChild(plus_div);
   container.appendChild(img);
   container.appendChild(heading);
   container.appendChild(p);
   first_children.appendChild(container);
});
children_cakeTwo.forEach( cake =>{
   const container = document.createElement("div");
   const plus_div = document.createElement("div");
   const img = document.createElement ("img");
   const heading = document.createElement("h4");
   const p = document.createElement("p");
   
   plus_div.textContent = cake.plus;
   plus_div.classList.add('addbtn');
   img.src = cake.src;
   heading.textContent = cake.name;
   p.textContent = cake.cost;
   
   plus_div.addEventListener("click", ()=>{
     const items = {
       cakeImg: cake.src,
       cakeName: cake.name,
       cakePrice: cake.cost,
       cakeDescribtion: cake.describtion,
     };
     localStorage.setItem("selectedItem",JSON.stringify(items));
     location.href = 'checkout.html'
   });
   img.addEventListener("click", () => {
     const items = {
       cakeImg: cake.src,
       cakeName: cake.name,
       cakePrice: cake.cost,
       cakeDescribtion: cake.describtion,
     };
     localStorage.setItem("selectedItem",JSON.stringify(items));
     location.href = 'checkout.html'
   });
   
   container.appendChild(plus_div);
   container.appendChild(img);
   container.appendChild(heading);
   container.appendChild(p);
   second_children.appendChild(container);
});

women_cake.forEach( cake =>{
   const container = document.createElement("div");
   const plus_div = document.createElement("div");
   const img = document.createElement ("img");
   const heading = document.createElement("h4");
   const p = document.createElement("p");
   
   plus_div.textContent = cake.plus;
   plus_div.classList.add('addbtn');
   img.src = cake.src;
   heading.textContent = cake.name;
   p.textContent = cake.cost;
   
   plus_div.addEventListener("click", ()=>{
     const items = {
       cakeImg: cake.src,
       cakeName: cake.name,
       cakePrice: cake.cost,
       cakeDescribtion: cake.describtion,
     };
     localStorage.setItem("selectedItem",JSON.stringify(items));
     location.href = 'checkout.html'
   });
   img.addEventListener("click", () => {
     const items = {
       cakeImg: cake.src,
       cakeName: cake.name,
       cakePrice: cake.cost,
       cakeDescribtion: cake.describtion,
     };
     localStorage.setItem("selectedItem",JSON.stringify(items));
     location.href = 'checkout.html'
   });
   
   container.appendChild(plus_div);
   container.appendChild(img);
   container.appendChild(heading);
   container.appendChild(p);
   
   first_women.appendChild(container);
});

women_cakeTwo.forEach( cake =>{
   const container = document.createElement("div");
   const plus_div = document.createElement("div");
   const img = document.createElement ("img");
   const heading = document.createElement("h4");
   const p = document.createElement("p");
   
   plus_div.textContent = cake.plus;
   plus_div.classList.add('addbtn');
   img.src = cake.src;
   heading.textContent = cake.name;
   p.textContent = cake.cost;
   
   plus_div.addEventListener("click", ()=>{
     const items = {
       cakeImg: cake.src,
       cakeName: cake.name,
       cakePrice: cake.cost,
       cakeDescribtion: cake.describtion,
     };
     localStorage.setItem("selectedItem",JSON.stringify(items));
     location.href = 'checkout.html'
   });
   img.addEventListener("click", () => {
     const items = {
       cakeImg: cake.src,
       cakeName: cake.name,
       cakePrice: cake.cost,
       cakeDescribtion: cake.describtion,
     };
     localStorage.setItem("selectedItem",JSON.stringify(items));
     location.href = 'checkout.html'
   });
   
   container.appendChild(plus_div);
   container.appendChild(img);
   container.appendChild(heading);
   container.appendChild(p);
   
   second_women.appendChild(container);
});

men_cake.forEach( cake =>{
   const container = document.createElement("div");
   const plus_div = document.createElement("div");
   const img = document.createElement ("img");
   const heading = document.createElement("h4");
   const p = document.createElement("p");
   
   plus_div.textContent = cake.plus;
   plus_div.classList.add('addbtn');
   img.src = cake.src;
   heading.textContent = cake.name;
   p.textContent = cake.cost;
   
   plus_div.addEventListener("click", ()=>{
     const items = {
       cakeImg: cake.src,
       cakeName: cake.name,
       cakePrice: cake.cost,
       cakeDescribtion: cake.describtion,
     };
     localStorage.setItem("selectedItem",JSON.stringify(items));
     location.href = 'checkout.html'
   });
   img.addEventListener("click", () => {
     const items = {
       cakeImg: cake.src,
       cakeName: cake.name,
       cakePrice: cake.cost,
       cakeDescribtion: cake.describtion,
     };
     localStorage.setItem("selectedItem",JSON.stringify(items));
     location.href = 'checkout.html'
   });
   
   container.appendChild(plus_div);
   container.appendChild(img);
   container.appendChild(heading);
   container.appendChild(p);
   
   first_men.appendChild(container);
});

men_cakeTwo.forEach( cake =>{
   const container = document.createElement("div");
   const plus_div = document.createElement("div");
   const img = document.createElement ("img");
   const heading = document.createElement("h4");
   const p = document.createElement("p");
   
   plus_div.textContent = cake.plus;
   plus_div.classList.add('addbtn');
   img.src = cake.src;
   heading.textContent = cake.name;
   p.textContent = cake.cost;
   
   plus_div.addEventListener("click", ()=>{
     const items = {
       cakeImg: cake.src,
       cakeName: cake.name,
       cakePrice: cake.cost,
       cakeDescribtion: cake.describtion,
     };
     localStorage.setItem("selectedItem",JSON.stringify(items));
     location.href = 'checkout.html'
   });
   img.addEventListener("click", () => {
     const items = {
       cakeImg: cake.src,
       cakeName: cake.name,
       cakePrice: cake.cost,
       cakeDescribtion: cake.describtion,
     };
     localStorage.setItem("selectedItem",JSON.stringify(items));
     location.href = 'checkout.html'
   });
   
   container.appendChild(plus_div);
   container.appendChild(img);
   container.appendChild(heading);
   container.appendChild(p);
   
   second_men.appendChild(container);
});