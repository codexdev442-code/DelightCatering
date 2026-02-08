const shop_categories = document.querySelector(".shop_categories");

const shopData = [
  {
    category: "Wedding Cakes",
    products: [
      {
        id: 1,
        name: "Chocolate Cake",
        price: 5000,
        image: "flowerCake.jpeg",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
      },
      {
        id: 2,
        name: "Vanilla Cake",
        price: 4000,
        image: "butterCake.jpeg",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
      },
       {
        id: 3,
        name: "Chocolate Cake",
        price: 5000,
        image: "flowerCake.jpeg",
        describtion: "Delicious greatness.",
      },
      {
        id: 4,
        name: "Vanilla Cake",
        price: 4000,
        image: "butterCake.jpeg",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
      }
    ]
  },

  {
    category: "Birthday Cakes",
    products: [
      {
        id: 1,
        name: "Wheat Bread",
        price: 1500,
        image: "butterCake.jpeg",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
      },
      {
        id: 2,
        name: "Wheat Bread",
        price: 1500,
        image: "butterCake.jpeg",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
      },
      {
        id: 3,
        name: "Wheat Bread",
        price: 1500,
        image: "butterCake.jpeg",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
      },
      {
        id: 4,
        name: "Wheat Bread",
        price: 1500,
        image: "butterCake.jpeg",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
      }
    ]
  },

  {
    category: "Cup Cakes",
    products: [
      {
        id: 1,
        name: "love cup cakes",
        price: 800,
        image: "butterCake.jpeg",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
      },
      {
        id: 2,
        name: "love cup cakes",
        price: 800,
        image: "butterCake.jpeg",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
      },
      {
        id: 3,
        name: "love cup cakes",
        price: 800,
        image: "butterCake.jpeg",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna a metus efficitur tincidunt.",
      }
    ]
  }
];

shopData.forEach(item => {
  item.products.forEach(product =>{
   const itemsCont = document.createElement("div");
   const imgBtnCont = document.createElement("div");
  const itemImg = document.createElement("img");
  const itemBtn = document.createElement("button");
  const itemName = document.createElement("h4");
  const itemPrice = document.createElement("p");
  
  itemBtn.textContent = "Place Order";
  itemImg.src = item.image;
  
  
  itemBtn.addEventListener("click", () =>{
    location.href = "checkout.html";
  });
  itemImg.addEventListener("click", () =>{
    location.href = "checkout.html";
  });
  
  
  
  });
});
shopData.forEach(item => {
  if (item.category === "Wedding Cakes") {
    
    // CATEGORY CONTAINER (create ONCE)
    const shop_wedding_cake = document.createElement("div");
    shop_wedding_cake.className = "shop_wedding_cake";
    
    const category = document.createElement("h3");
    category.textContent = item.category;
    
    const shop_cart_cont = document.createElement("div");
    shop_cart_cont.className = "shop_cart_cont";
    
    shop_wedding_cake.append(category, shop_cart_cont);
    shop_categories.appendChild(shop_wedding_cake);
    
    // PRODUCTS (create MANY)
    item.products.forEach(product => {
      
      const productCont = document.createElement("div");
      productCont.className = "product_cont";
      
      const imgBtnCont = document.createElement("div");
      
      const itemImg = document.createElement("img");
      itemImg.src = product.image;
      
      const itemBtn = document.createElement("button");
      itemBtn.textContent = "Place Order";
      
      const itemName = document.createElement("h4");
      itemName.textContent = product.name;
      
      const itemPrice = document.createElement("p");
      itemPrice.textContent = `₦${product.price.toLocaleString()}`;
      
      itemBtn.onclick = itemImg.onclick = () => {
        const items = {
          cakeImg: product.image,
          cakeName: product.name,
          cakePrice: product.price,
          cakeDescribtion: product.describtion,
       };
       localStorage.setItem("selectedItem",JSON.stringify(items));
        location.href = "checkout.html";
      };
      
      imgBtnCont.append(itemImg, itemBtn);
      productCont.append(imgBtnCont, itemName, itemPrice);
      shop_cart_cont.appendChild(productCont);
    });
  }
  if (item.category === "Birthday Cakes") {
    
    // CATEGORY CONTAINER (create ONCE)
    const shop_wedding_cake = document.createElement("div");
    shop_wedding_cake.className = "shop_wedding_cake";
    
    const category = document.createElement("h3");
    category.textContent = item.category;
    
    const shop_cart_cont = document.createElement("div");
    shop_cart_cont.className = "shop_cart_cont";
    
    shop_wedding_cake.append(category, shop_cart_cont);
    shop_categories.appendChild(shop_wedding_cake);
    
    // PRODUCTS (create MANY)
    item.products.forEach(product => {
      
      const productCont = document.createElement("div");
      productCont.className = "product_cont";
      
      const imgBtnCont = document.createElement("div");
      
      const itemImg = document.createElement("img");
      itemImg.src = product.image;
      
      const itemBtn = document.createElement("button");
      itemBtn.textContent = "Place Order";
      
      const itemName = document.createElement("h4");
      itemName.textContent = product.name;
      
      const itemPrice = document.createElement("p");
      itemPrice.textContent = `₦${product.price.toLocaleString()}`;
      
      itemBtn.onclick = itemImg.onclick = () => {
        const items = {
          cakeImg: product.image,
          cakeName: product.name,
          cakePrice: product.price,
          cakeDescribtion: product.describtion,
       };
        localStorage.setItem("selectedItem",JSON.stringify(items));
        location.href = "checkout.html";
      };
      
      imgBtnCont.append(itemImg, itemBtn);
      productCont.append(imgBtnCont, itemName, itemPrice);
      shop_cart_cont.appendChild(productCont);
    });
  }
  if (item.category === "Cup Cakes") {
    
    // CATEGORY CONTAINER (create ONCE)
    const shop_wedding_cake = document.createElement("div");
    shop_wedding_cake.className = "shop_wedding_cake";
    
    const category = document.createElement("h3");
    category.textContent = item.category;
    
    const shop_cart_cont = document.createElement("div");
    shop_cart_cont.className = "shop_cart_cont";
    
    shop_wedding_cake.append(category, shop_cart_cont);
    shop_categories.appendChild(shop_wedding_cake);
    
    // PRODUCTS (create MANY)
    item.products.forEach(product => {
      
      const productCont = document.createElement("div");
      productCont.className = "product_cont";
      
      const imgBtnCont = document.createElement("div");
      
      const itemImg = document.createElement("img");
      itemImg.src = product.image;
      
      const itemBtn = document.createElement("button");
      itemBtn.textContent = "Place Order";
      
      const itemName = document.createElement("h4");
      itemName.textContent = product.name;
      
      const itemPrice = document.createElement("p");
      itemPrice.textContent = `₦${product.price.toLocaleString()}`;
      
      itemBtn.onclick = itemImg.onclick = () => {
        const items = {
          cakeImg: product.image,
          cakeName: product.name,
          cakePrice: product.price,
          cakeDescribtion: product.describtion,
       };
     localStorage.setItem("selectedItem",JSON.stringify(items));
        location.href = "checkout.html";
      };
      
      imgBtnCont.append(itemImg, itemBtn);
      productCont.append(imgBtnCont, itemName, itemPrice);
      shop_cart_cont.appendChild(productCont);
    });
  }
});