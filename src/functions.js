
function addToCart(quantity,productName="Elma") {// qunatity = adetini belirler
    // Eğer herhangi bir değer yollanmazsa default elma olacak
    console.log("Ürün sepete eklendi: " + productName + ", adet " + quantity)
}

//addToCart()// Tanımsız olarak çıktı veriyor typesafe olmadığı için
addToCart(10,"Yumurta")
addToCart("Limon")
addToCart(10)
//addToCart(15)

let sayHello = ()=>{// Sen bir fonksiyonsun ve çağrıldığın zaman bu kod bloğunu çalıştıracaksın
    console.log("Hello Word")

}
sayHello()

let sayHello2 = function (params) {// Bu şekilde de yapılabiliyor
    console.log("Hello Word2")
}
sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    
}
addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün: " + product.productName)
    console.log("Adet: " + product.quantity)
    console.log("Fiyat: " + product.unitPrice)
}
addToCart3(product1)// Gönderdiğimiz product1 - product'a gönderiliyor

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

// Sayılar değer tiptir
//​Yani referans tipte odaklanmamız gereken konu adres tutma. 
//Değer tipte ise sadece değeri
// Objeler, arraylar referans tiptir

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
    console.log(products)// Buraya products yazsakta çıktı products oluyor 
}
let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]
addToCart4(products)

function add(bisey,...numbers) {// Rest operatörü
    // Operatörle başka bir parametre kullanacaksak önce yazmalıyız
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]  
    }
    console.log(total)
    console.log(bisey)
}
add(20,30)// Array yapıp numbers isminde göndermiş oluyor
//add(20,30,40)
//add(20,30,40,50)

// function add2(number1, number2, number3) {// Bu şekilde yazmak yerine rest kullandık
//     console.log(number1 + number2 + number3)
// }
// function add3(number1, number2, number3, number4) {
//     console.log(number1 + number2 + number3 + number4)
// }

//​​SPREAD AYRIŞTIRIR, REST TOPLAR
//Spread
let numbers = [30,10,500,600,120]
//console.log(numbers)
console.log(Math.max(...numbers))// Sayıların en büyüğünü verir
// Bu array'i bölmemizi sağlar

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name: "İç Anadolu", population: "20M"},// Hepsini bir değişkene atayıp onları kullandık
    {name: "Marmara", population: "30M"},// 2. eleman
    {name: "Karadeniz", population: "10M"},// 3. eleman
    [
        ["Ankara","Konya"],// 4. eleman komple array
        ["İstanbul","Bursa"],// Eger icAnadoluSehirlerini göstermek istiyorsak array'ı parçalamak zorundayız
        ["Sinop","Trabzon"]// Yukarıda ekstra dizi oluşturduk
    ]
]
console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)


let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity }
= {productName:"Elma", unitPrice:10, quantity:5})
// Burada sen bir kod bloğu değilsin diyoruz ve parantez ekliyoruz yoksa hata verecek
console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)

// login({title}){
//     console.log("<h1>" + title + "<h1>")
// }