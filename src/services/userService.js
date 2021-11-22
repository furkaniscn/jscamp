import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService {// userComponentteki import kısmına {} koyma ihtiyacı kalmıyor

    constructor(loggerService) {
        //this.users = []
        //this.users = getCustomersFromDb()
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService// Parametre içinde bana bir loggerservice veer diyoruz
    }

    load() {
        for (const user of users) {
            //console.log(user)
            switch (user.type) {// user'ın type'ı customer ise müşteri olarak eklemek istiyoruz
                case "customer":
                    if (!this.checkCustomerValidityForErrors(user)) {
                        this.customers.push(user)
                    }

                    break;
                case "employee":
                    if (!this.checkEmployeeValidityForErrors(user)) {
                        this.employees.push(user)
                    }
                    break;
                default:
                    this.errors.push(new DataError("Wrong user type", user))
                    break;
            }
        }
    }

    // formik - yup
    checkCustomerValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {// Gönderilen user'da bu alan var mı?
            if (!user[field]) {
                hasErrors = true
                this.errors.push(
                    new DataError(`Validation problem. ${field}is required`, user))
            }
        }

        if (Number.isNaN(Number.parseInt(+user.age))) {// user'ın age'si sayı değilse hata ver
            hasErrors = true
            this.errors.push(new DataError(`Validation problem. ${user.age} 
            is not a number`, user))
        }

        return hasErrors
    }

    checkEmployeeValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {// Gönderilen user'da bu alan var mı?
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation problem. ${field} 
                is required`, user))
            }
        }
        if (Number.isNaN(Number.parseInt(user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem. ${user.age} 
            is not a number`, user))
        }

        return hasErrors
    }

    add(user) {
        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user)
                }
                break;
            case "employee":
                if (!this.checkEmployeeValidityForErrors(user)) {
                    this.employees.push(user)
                }
                break;
            default:
                this.errors.push(
                    new DataError("This user can not be added. Wrong user type", user))
                break;
        }
        //this.users.push(user)
        //console.log("Kullanıcı eklendi" + user)
        this.loggerService.log(user)// Burada o log'u çağırıyoruz
    }


    listCustomers() {
        return this.customers
        //return this.users
        //console.log("Kullanıcı listelendi")
    }

    getCustomerById(id) {
        return this.users.find(u => u.id === id)
        //return this.users.find(u => u.id === id)
        //console.log("Kullanıcı detayı getirildi")
    }

    getCustomersSorted() {
        return this.customers.sort((customer1, customer2) => {
            if (customer1.firstName > customer2.firstName) {
                return 1
            } else if (customer1.firstName === customer2.firstName) {
                return 0
            } else {
                return -1
            }
        })
    }
}









