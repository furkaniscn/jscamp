console.log("Merhaba Kodlama.io")

let dolarDun = 9.20
//dolarDun = "Ankara"
let dolarBugun = 9.30
dolarDun = "Ankara"// JS typesafe değildir, dolarDun sayıda olsa string olarak yazabiliyoruz

{
    let dolarDun = 9.10// Değişkenler tanımlandıkları kapsamda geçerlidir burası başka bir blok
    // var ile kullansaydık dolar 9.10 şeklinde çıktı verecekti ve kod hatalı çalışacaktı
    // VAR KULLANMA KULLANDIRTMA!!!
}

console.log(dolarDun)
//var dolarDun = 9.20// undefined hatası verir göstermek için böyle yazdık
// var kullanmayı bırak let kullan

const euroDun = 11.2// const ile veri tanımladığında başka bir şey atanamaz
//euroDun = 11 // Hata veriyor çünkü const ile tanımlamıştık

console.log(euroDun)

// array-dizi
// camelCasing
// PascalCasing
//let konutKredileri = [12,"Emlak Konut Kredisi",["a","b","c"]]
//let users = getUsersFromApi()// https://jsonplaceholder.typicode.com/users buradan baktık
let konutKredileri = ["Konut Kredileri","Emlak Konut Kredisi","Kamu Konut Kredileri","Özel Konut Kredileri"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")// Kısaca html ürettik burada
    //const element = array[index];
    
}
console.log("</ul>")


console.log(konutKredileri)