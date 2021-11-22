import User from "./user.js"

export default class Customer extends User{
    constructor(id, firstName, lastName, city, age, creditCardNumber) {
        // this.id = id
        // this.firstName = firstName
        // this.lastName = lastName
        // this.city = city
        // this.age = age
        super(id, firstName, lastName, city, age)
        // super user demek burada, customer'ın referansını tutabilir
        this.creditCardNumber = creditCardNumber
    }
}