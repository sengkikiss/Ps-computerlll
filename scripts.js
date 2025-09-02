/*!
* Start Bootstrap - Shop Item v5.0.6 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const products = {
  1: { sku: "BST-001", name: "Asus Vivobook", price: "599.00", oldPrice: "", image: "/img/a1b.png", description: "Ram 16GB , Rom 2T , Disply: 1920x1080 2k" },
  2: { sku: "BST-002", name: "Dell 2023", price: "500.00", oldPrice: "", image: "./img/d1b.png", description: "Ram 32GB , Rom 1T , Disply: 1920x1080 4k , RTX:3060" },
  3: { sku: "BST-003", name: "Lenovo Legend", price: "550.00", oldPrice: "", image: "./img/L1b.png", description: "Ram 16GB , Rom 4T , Disply: 1920x1080 3k , GTX:1060Ti" },
  4: { sku: "BST-004", name: "Asus Zenbook14", price: "490.00", oldPrice: "", image: "./img/a2b.png", description: "Ram 64GB , Rom 2T , Disply: 1920x1080 8k , RTX:5090Ti" },
  5: { sku: "BST-005", name: "Dell model3", price: "900.00", oldPrice: "", image: "./img/d2b.png", description: "Ram 16GB , Rom 2T , Disply: 1920x1080 2k" },
  6: { sku: "BST-006", name: "Lenovo Thinkpad", price: "590.00", oldPrice: "", image: "./img/L2b.png", description: "Ram 32GB , Rom 2T , Disply: 1920x1080 3k" },
  7: { sku: "BST-007", name: "Asus ROG17", price: "400.00", oldPrice: "", image: "./img/a3b.png", description: "Ram 16GB , Rom 2T , Disply: 1920x1080 4k RTX:1060Ti" },
  8: { sku: "BST-008", name: "Dell photosot", price: "800.00", oldPrice: "", image: "./img/d3b.png", description: "Ram 6GB , Rom 2T , Disply: 1920x1080 2k GTX190Ti" },
  9: { sku: "BST-009", name: "Lenovo legend2", price: "400.00", oldPrice: "", image: "./img/l3b.png", description: "Ram 64GB , Rom 8T , Disply: 1920x1080 4k , RTX:4080" }
};


  // Get product id from URL (example: detail.html?id=1)
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  if (products[id]) {
    document.getElementById("productSKU").innerText = products[id].sku;
    document.getElementById("productTitle").innerText = products[id].name;
    document.getElementById("productPrice").innerText = products[id].price;
    document.getElementById("productOldPrice").innerText = products[id].oldPrice;
    document.getElementById("productImage").src = products[id].image;
    document.getElementById("productDesc").innerText = products[id].description;
  }
    
