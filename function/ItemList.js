// //const itemList = [];

//    //// function CreateItemList(){
//         let itemList = [{price: 20, name: "Chocolate Strawberry Cheesecake garnished with strawberry syrup (small)", image: "./assets/chocolate-strawberry-cheesecake-plate-garnished-with-strawberry-syrup.jpg"},
//                         {price: 10, name: "Crousant", image: "./assets/Crousant.jpg"},
//                         {price: 10, name: "Cherry Cream Danish", image: "./assets/CherryCreamDanish.jpg"},
//                         {price: 5, name: "Two Pastry Rolls", image: "./assets/two-pastry-rolls-with-raisins.jpg"},
//                         {price: 5, name: "Hot Coffee", image: "./assets/HotCoffee.jpg"},
//                         {price: 7, name: "Ice Coffee", image: "./assets/IcedCoffee.jpg"},
//                         {price: 5, name: "Pink Lemonaid", image: "./assets/PinkLemonaid.jpg"},
//                         {price: 4, name: "Traditional Lemonaid", image: "./assets/TraditionalLemonaid.jpg"},
//                         {price: 10, name: "Variety Platter", image: "./assets/VarietyPlatter.jpg"},
//         ];
//     //};

//     function loadItemData(){
//         const myCards = document.getElementById("cards");
   
//         for (let i = 0; i < itemList.length; i++){

//             const cardDiv = document.createElement("div");

            
//         // Image
//             const img = document.createElement("img");
//             img.src = itemList[i].image;                  
//             img.alt = itemList[i].name || "Item image";   
//             //img.loading = "lazy"; 

            
//         // Title (h3)
//             const h3 = document.createElement("h3");
//             h3.className = "primary-font";
//             h3.style.fontSize = "1.1rem";
//             h3.textContent = itemList[i].name;

            
//         // Price (h4)
//             const h4 = document.createElement("h4");
//             h4.className = "primary-font";
//             h4.style.fontSize = "1rem";
//             h4.textContent = "Price: $" + itemList[i].price;

            
//         // Button
//             const button = document.createElement("button");
//             button.type = "button";
//             button.textContent = "Add to Cart";
//             button.addEventListener("click", () => addItem(i));


//         // Assemble card
//             //cardDiv.appendChild(img);
//             cardDiv.appendChild(h3);
//             cardDiv.appendChild(h4);
//             cardDiv.appendChild(button);

        
//             /*cardDiv.img src= itemList[i].image;
//             cardDiv.class="primary-font";
//             cardDiv.style="font-size: 1.1rem";
//             cardDiv.textContent = itemList[i].name;
//             cardDiv.class="primary-font" 
//             cardDiv.style="font-size: 1rem">
//             cardDiv.textContent = "Price:" + $itemList[i].price;
//             cardDiv.button onclick= "addItem(i)">"Add to Cart"</button;
//             */

//             myCards.appendChild(cardDiv);

//             /*<div class="card">
//                 <img src= itemList[i].image alt="lilly" />
//                 <h3 class="primary-font" style="font-size: 1.1rem">
//                   itemList[i].name;
//                  </h3>
//                   <h4 class="primary-font" style="font-size: 1rem">Price: $itemList[i].price</h4>
//                   <button onclick= "addItem(i)">Add to Cart</button>
//              </div>
//              */
//         }
//     }

//     //CreateItemList();
//     loadItemData();

