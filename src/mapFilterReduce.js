let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150}
]
// Bizim array'imizi(hepsiburada sepeti gibi) tek tek dolaşmaya yarıyor
//cart.map(product => console.log(product.productName))// Sepeti dolaş ve her bir product için bu harreketi yap diyoruz
console.log("<ul>")
cart.map(product => {
    console.log("<li>" + product.productName + " : " 
    + product.unitPrice * product.quantity + "</li>")
})
console.log("</ul>")

// Ürünün unitPrice'ını akümülatör'e yaz diyoruz akümülator değerini 0 verdik
let total = cart.reduce((acc,product)=>acc + product.unitPrice * product.quantity, 0)


console.log(total)


// Her bir product için sepeti listele
let quantityOver2 = cart.filter(product=>product.quantity > 2)// quantity'si 2'den fazla olan eşyaları getir
console.log(quantityOver2)


function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
}


addToCart(cart)// Buraya kartın bellekteki adresini atıyoruz 
console.log(cart)


let sayi = 10;// Değer tiplerde ise değer atanır ve işi biter 
function sayiTopla(number) {
    number += 1;
}
sayiTopla(sayi)
console.log(sayi)
