export default class User {
    constructor(id, firstName, lastName, city, age) {
        this.id = id
        this.firstName = firstName // this'te firstname diye bir şey oluştur ve gönderilen firstname olsun
        this.lastName = lastName
        this.city = city
        //console.log("User oluştu")
        this.age = age
    }
}