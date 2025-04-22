

export class MyDate {
year: number
    month: number
    private day: number

    constructor(year: number, month: number, day: number) {
        this.year = year
        this.month = month
        this.day = day
    }

    printFormat(): string {
        const day = this.addPadding(this.day)
        const month = this.addPadding(this.month)
        return `${day}/${month}/${this.year}`
    }
    private addPadding(value: number){
        if (value >= 10) {
            return value
        }
        return `0${value}`   
    }
    add(amount: number, type: "days" | "months" | "years") {
        if(type === "days"){
            this.day += amount
        }
        if(type === "months"){
            this.month += amount
        }
        if(type === "years"){
            this.year += amount
        }
    }
    getDay(){
        return this.day
    }
}

const myDate = new MyDate(2021, 1, 10) 
// console.log("format: ", myDate.printFormat())
// myDate.add(10, "years")
// console.log("format later: ", myDate.printFormat())

console.log(myDate.printFormat()) 

// Como addPadding es privado nose puede acceder desde afuera
// myDate.addPadding(1)

// Como myDate.day es privado podremos acceder solo desde otro metodo getDay
console.log(myDate.getDay())
