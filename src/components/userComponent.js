import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logging.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let logger1 = new MongoLogger()// Burayı değiştirirsek Loger çıktısı değişir
//let logger1 = new ElasticLogger() // TEK TEK DENE HEPSİNİ HANGİ LOGUN NESNESİNİ OLUŞTURSAK
//let logger1 = new MongoLogger() // ONUN ÇIKTISINI ALIYORUZ
let userService = new UserService(logger1)

let user1 = new User(1, "Engin", "Demiroğ", "Ankara")
let user2 = new User(1, "Baran", "Gökçekli", "Muğla")

// userService'in içerisindeki add fonksiyonuna user1 i ekledik
userService.add(user1)
userService.add(user2)
//console.log(userService.list()) // userService hata verdiği için kod satırına aldık 4. GÜN
//console.log(userService.getById(2))

//userService.getById(1) 
//userService.list()



let customer = { id: 1, firstName: "Engin" }
// Prototyping js'e sonradan böyle bir değer ekleyebiliyoruz
customer.lastName = "Demiroğ"
console.log(customer.lastName)

console.log("-------------------------------------")
userService.load()

let customerToAdd = new Customer(1,"Seda","Yılmaz","Ankara","adsasdas")
customerToAdd.type = "customer"

userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())
