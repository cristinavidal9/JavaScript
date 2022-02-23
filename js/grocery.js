var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];
var  subtotal  =  {
    grocery : {
        value : 0 , 
        discount : 0
    } ,
    beauty : {
        value : 0 , 
        discount : 0
    } ,
    clothes : {
        value : 0 , 
        discount : 0
    } ,
} ;
var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList arra
    for (let i = 0; i < products.length; i++) {
        if (id == i + 1) {
            cartList.push(products[i])
        }
    }
    console.log(cartList)
}

// Exercise 2
function cleanCart() {
    cartList = []
}
// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes

    for (let i = 0; i < cartList.length; i++) {
        if (cartList.length > 0) {
            switch (cartList[i].type) {
                case 'grocery':
                    subtotal.grocery.value += cartList[i].price
                    break;
                case 'beauty':
                    subtotal.beauty.value += cartList[i].price
                    break;
                case 'clothes':
                    subtotal.clothes.value += cartList[i].price
                    break;
                default:
                    console.log('El carro está vacío')
            }
        }
        else {
            console.log('El carro está vacío')
        }
    }
}
// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    for (let i = 0; i < cartList.length; i++) {
        total +=  cartList[i].price
    }
    
    console.log('El total és: ' + total + '$')
}

// Exercise 5
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    for (let i = 0; i < cartList.length; i++) {

        if (!cart.includes(cartList[i])) {
            cart.push(cartList[i])
            cart[cart.length - 1].quantity = 1
        }
        else {
            for (let j = 0; j < cart.length; j++) {
                if (cart[j].name == cartList[i].name) {
                    cart[j].quantity += 1
                    break;
                }
            }
        }
    }
}
for (let i = 0; i < cart.length; i++) {
    if (cart.length > 0) {
        switch (cart[i].name) {
            case 'cooking oil':
                cart[i].subtotal = cart[i].price * cart[i].quantity;
                break;
            case 'Pasta':
                cart[i].subtotal = cart[i].price * cart[i].quantity;
                break;
            case 'Instant cupcake mixture':
                cart[i].subtotal = cart[i].price * cart[i].quantity;
                break;

            case 'All-in-one':
                cart[i].subtotal = cart[i].price * cart[i].quantity;
                break;
            case 'Zero Make-up Kit':
                cart[i].subtotal = cart[i].price * cart[i].quantity;
                break;
            case 'Lip Tints':
                cart[i].subtotal = cart[i].price * cart[i].quantity;
                break;

            case 'Lawn Dress':
                cart[i].subtotal = cart[i].price * cart[i].quantity;
                break;
            case 'Lawn-Chiffon Combo':
                cart[i].subtotal = cart[i].price * cart[i].quantity;
                break;
            case 'Toddler Frock':
                cart[i].subtotal = cart[i].price * cart[i].quantity;
                break;
            default:
                console.log('El carrito está vacío')
        }
    }
    else {
        console.log('El carrito está vacío')
    }
}

// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let i = 0; i < cart.length; i++) {
        if ((cart[i].name == 'cooking oil') && (cart[i].quantity > 3)) {
            cart[i].subtotalWithDiscount = (((cart[i].price) - 0.5) * cart[i].quantity);
        }
        else if ((cart[i].name == 'Instant cupcake mixture') && (cart[i].quantity > 10)) {
            cart[i].subtotalWithDiscount = (cart[i].price * cart[i].quantity) * (2 / 3);
        }
    }
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    for (let i = 0; i < products.length; i++) {
        if (id == i + 1) {
            if (!cart.includes(products[i])) {
                cart.push(products[i])
                cart[cart.length - 1].quantity = 1
            }
            else {
                for (let j = 0; j < cart.length; j++) {
                    if (cart[j].name == products[i].name) {
                        cart[j].quantity += 1
                    }
                }
            }
        }
    }
    console.log(cart);
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
