const btnElement = document.querySelector('.cart-js');
const cartElement = document.querySelector('.fa-cart-shopping');

const items = [];
let cartQuantity = 0;

    btnElement.addEventListener('click', () =>{
        //console.log('clicked')
        items.push(btnElement);
        console.log(items);
    })
    items.forEach(item => {
        if(item){
            cartQuantity++;
        }else{
            cartQuantity += item;
        }
        console.log(cartQuantity)
    })
    
