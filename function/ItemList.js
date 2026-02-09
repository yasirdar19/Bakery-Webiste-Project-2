//const itemList = [];

   //// function CreateItemList(){
        let itemList = [{price: 20, name: "Chocolate Strawberry Cheesecake garnished with strawberry syrup (small)", image: "./assets/chocolate-strawberry-cheesecake-plate-garnished-with-strawberry-syrup.jpg"},
                        {price: 10, name: "Crousant", image: "./assets/Crousant.jpg"},
                        {price: 10, name: "Cherry Cream Danish", image: "./assets/CherryCreamDanish.jpg"},
                        {price: 5, name: "Two Pastry Rolls", image: "./assets/two-pastry-rolls-with-raisins.jpg"},
                        {price: 5, name: "Hot Coffee", image: "./assets/HotCoffee.jpg"},
                        {price: 7, name: "Ice Coffee", image: "./assets/IcedCoffee.jpg"},
                        {price: 5, name: "Pink Lemonaid", image: "./assets/PinkLemonaid.jpg"},
                        {price: 4, name: "Traditional Lemonaid", image: "./assets/TraditionalLemonaid.jpg"},
                        {price: 10, name: "Variety Platter", image: "./assets/VarietyPlatter.jpg"},
        ];
    //};

    function loadItemData(){
        const myCards = document.getElementById("cards");
   
        for (let i = 0; i < itemList.length; i++){

            const cardDiv = document.createElement("div");
            cardDiv.textContent = itemList[i].name;
            console.log(itemList[i])
            myCards.appendChild(cardDiv);

            /*<div class="card">
                <img src= itemList[i].image alt="lilly" />
                <h3 class="primary-font" style="font-size: 1.1rem">
                  itemList[i].name;
                 </h3>
                  <h4 class="primary-font" style="font-size: 1rem">Price: $itemList[i].price</h4>
                  <button onclick= "addItem(i)">Add to Cart</button>
             </div>
             */
        }
    }

    //CreateItemList();
    loadItemData();
