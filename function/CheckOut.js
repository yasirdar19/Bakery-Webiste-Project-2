const cart = []; //Array holding food items

    function loadCart(){
        let cart = [];
    };

    function addItem(Key){
        cart.push(itemList[key]);
    };

    function remove(key){
        cart = cart.filter(item => item.name != key);
    };

    function getCartSize(){
        return cart.length;
    }
