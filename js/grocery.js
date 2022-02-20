const buttons = document.querySelectorAll('button.btn-primary')

// Si tiene tiempo, puede mover esta variable "productos" a un archivo json y cargar los datos en este js. Se verá más profesional.
let  productos  =  [
    {
        id: 1 ,
        nombre : 'aceite de cocina' ,
        precio : 10.5 ,
        tipo : 'comestibles'
    } ,
    {
        id: 2 ,
        nombre : 'Pasta' ,
        precio : 6.25 ,
        tipo : 'comestibles'
    } ,
    {
        id: 3 ,
        nombre : 'Mezcla instantánea de cupcakes' ,
        precio : 5 ,
        tipo : 'comestibles'
    } ,
    {
        id: 4 ,
        nombre : 'Todo en uno' ,
        precio : 260 ,
        tipo : 'belleza'
    } ,
    {
        id: 5 ,
        nombre : 'Kit de maquillaje Zero' ,
        precio : 20.5 ,
        tipo : 'belleza'
    } ,
    {
        id: 6 ,
        nombre : 'Tintes de labios' ,
        precio : 12.75 ,
        tipo : 'belleza'
    } ,
    {
        id: 7 ,
        Nombre : 'Vestido de césped' ,
        precio : 15 ,
        tipo : 'ropa'
    } ,
    {
        id: 8 ,
        nombre : 'Combo de césped y gasa' ,
        precio : 19.99 ,
        tipo : 'ropa'
    } ,
    {
        id: 9 ,
        nombre : 'Vestido de niño' ,
        precio : 9.99 ,
        tipo : 'ropa'
    }
]
// console.log(productos.length)
// Array con productos (objetos) agregados directamente con push(). Los productos de esta matriz se repiten.
var  cartList  =  [] ;
console.log(cartList);
// Versión mejorada de cartList. El carrito es una matriz de productos (objetos), pero cada uno tiene un campo de cantidad para definir su cantidad, por lo que estos productos no se repiten.
var  carrito  =  [ ] ;
let  subtotal  =  {
    tiendaDeComestibles : {
        valor : 0 , 
        descuento : 0,
        cantidad : 0
    } ,
    belleza : {
        valor : 0 , 
        descuento : 0
    } ,
    ropa : {
        valor : 0 , 
        descuento : 0
    } ,
} ;
let  totales  =  0 ;
// Ejercicio 1

// console.log(cartList[i]);
function  addToCartList(id)  {
    for(let i = 0; i < productos.length ; i++){
        // console.log(productos[i])
        if(id === i + 1) {
            cartList.push(productos[i]);            
        }
    }
    console.log(cartList);
};
    // 1. Vaya a la matriz de productos para obtener el artículo para agregar al carrito
    // 2. Agregue el producto encontrado a la matriz cartList
    
// buttons.forEach(btn => btn.addEventListener('click', () => {buy()}));
// const addToShoppingButtons = document.querySelectorAll('.addToCart');
//     addToShoppingButtons.forEach((addToCartButton) => {
//     addToCartButton.addEventListener('click', () => console.log('click'));

// Ejercicio 2
function  cleanCart()  {
    cartList = []
}
// Ejercicio 3
function  calcSubtotal()  {
    for (let i = 0; i < cartList.length; i++) {
        if (cartList.length > 0) {
            switch (cartList[i].tipo) {
                case 'comestibles':
                    subtotal.tiendaDeComestibles.valor += cartList[i].precio
                    break;
                case 'belleza':
                    subtotal.belleza.valor += cartList[i].precio
                    break;
                case 'ropa':
                    subtotal.ropa.valor += cartList[i].precio
                    break;
                default:
                    console.log('El carro está vacío')
            }
        }
    }
    console.log('El subtotal de grocery es: ' +  subtotal.tiendaDeComestibles.valor + '\n' + 'El subtotal de beauty es: ' +  subtotal.belleza.valor + '\n' + 'El subtotal de clothes es: ' + subtotal.ropa.valor)
}

//     // 1. Crear un bucle for en la matriz "cartList"
//     // 2. Implementar dentro del ciclo un if...else o switch...case para sumar las cantidades de cada tipo de producto, obteniendo los subtotales: subtotalGrocery, subtotalBeauty y subtotalClothes

// // Ejercicio 4
function  calcTotal()  {

    for (let i = 0; i < cartList.length; i++) {
        totales +=  cartList[i].precio 
    }
    
    console.log('El total és: ' + totales + '$')
    
}

//     // Calcular el precio total del carrito utilizando la matriz "cartList"
// }
// // Ejercicio 5
function  generarCarro()  {
    
    for (let i = 0; i < cartList.length; i++) {
        
        if (!carrito.includes(cartList[i])) {
            carrito.push(cartList[i])
            carrito[carrito.length - 1].cantidad = 1
        }
        else {
            for (let j = 0; j < carrito.length; j++) {
                if (carrito[j].nombre == cartList[i].nombre) {
                    carrito[j].cantidad += 1
                    break;
                }
            }
        }
    }
}
    // subtotales de cada item en cart
    for (let i = 0; i < carrito.length; i++) {
        if (carrito.length > 0) {
            switch (carrito[i].nombre) {
                case 'aceite de cocina':
                    carrito[i].subtotal = carrito[i].precio * carrito[i].cantidad;
                    // carrito[i].subtotalWithDiscount = "";
                    break;
                case 'Pasta':
                    carrito[i].subtotal = carrito[i].precio * carrito[i].cantidad;
                    // carrito[i].subtotalWithDiscount = "";
                    break;
                case 'Mezcla instantánea de cupcakes':
                   carrito[i].subtotal =carrito[i].precio *carrito[i].cantidad;
                //    carrito[i].subtotalWithDiscount = "";
                    break;

                case 'Todo en uno':
                   carrito[i].subtotal =carrito[i].precio *carrito[i].cantidad;
                //    carrito[i].subtotalWithDiscount = "";
                    break;
                case 'Kit de maquillaje Zero':
                   carrito[i].subtotal =carrito[i].precio *carrito[i].cantidad;
                //    carrito[i].subtotalWithDiscount = "";
                    break;
                case 'Tintes de labios':
                   carrito[i].subtotal =carrito[i].precio *carrito[i].cantidad;
                //    carrito[i].subtotalWithDiscount = "";
                    break;

                case 'Vestido de césped':
                   carrito[i].subtotal =carrito[i].precio *carrito[i].cantidad;
                //    carrito[i].subtotalWithDiscount = "";
                    break;
                case 'Combo de césped y gasa':
                   carrito[i].subtotal =carrito[i].precio *carrito[i].cantidad;
                //    carrito[i].subtotalWithDiscount = "";
                    break;
                case 'Vestido de niño':
                   carrito[i].subtotal =carrito[i].precio *carrito[i].cantidad;
                //    carrito[i].subtotalWithDiscount = "";
                    break;
                default:
                    console.log('El carro está vacío')
            }
        }
        else {
            console.log('El carro está vacío')
        }
    }
    // Usando la matriz "carritolist" que contiene todos los artículos en el carrito de compras,
    // generar la matriz "carrito" que no contiene elementos repetidos, sino que cada elemento de esta matriz "carrito" muestra la cantidad de producto.

// // Ejercicio 6
function  applyPromotionsCart()  {
    // Aplicar promociones a cada artículo en la matriz "carrito"

    for (let i = 0; i < carrito.length; i++) {
        if ((carrito[i].nombre == 'aceite de cocina') && (carrito[i].cantidad > 3)) {
            carrito[i].subtotalWithDiscount = (((carrito[i].precio) - 10) * carrito[i].cantidad);
        }
        else if ((carrito[i].nombre == 'Mezcla instantánea de cupcakes') && (carrito[i].cantidad > 10)) {
            carrito[i].subtotalWithDiscount = (carrito[i].precio * carrito[i].cantidad) * (2 / 3);
        }
    }
}

// // Ejercicio 7
function addToCart(id)  {
    
   
    // Refactoriza el código anterior para simplificarlo
    // 1. Vaya a la matriz de productos para obtener el artículo para agregar al carrito
    // 2. Agregue el producto encontrado a la matriz del carrito o actualice su cantidad en caso de que se haya agregado anteriormente.

    for (let i = 0; i < productos.length; i++) {
        if (id == i + 1) {
            if (!carrito.includes(productos[i])) {
                carrito.push(productos[i])
                carrito[carrito.length - 1].cantidad = 1
            }
            else {
                for (let j = 0; j < carrito.length; j++) {
                    if (carrito[j].nombre == productos[i].nombre) {
                        carrito[j].cantidad += 1
                        break;
                    }
                }
            }
        }
    }
    console.log(carrito);
}

// // Ejercicio 8
// function  removeFromCart ( id )  {
//     // 1. Vaya a la matriz de productos para obtener el artículo para agregar al carrito
//     // 2. Agregue el producto encontrado a la matriz cartList
// // Ejercicio 9
// function  removeFromCart ( id )  {
//     // 1. Vaya a la matriz de productos para obtener el artículo para agregar al carrito
//     // 2. Agregue el producto encontrado a la matriz cartList
// }
// // Ejercicio 10
// function  imprimircarro ( )  {
//     // Llene el modal del carrito de compras manipulando el dom del carrito de compras
// }
// }