

export class MyDate {
    public year: number
    public month: number
    public day: number

    constructor(year: number, month: number, day: number) {
        this.year = year
        this.month = month
        this.day = day
    }
    public printFormat() {
        return `${this.day}/${this.month}/${this.year}`
    }
    public add(amount: number, type: "days" | "months" | "years") {
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
}

const myDate = new MyDate(2021, 1, 9) 
// console.log("format: ", myDate.printFormat())
// myDate.add(10, "years")
// console.log("format later: ", myDate.printFormat())

console.log(myDate.day)

// En publico se puede editar desde afuera
myDate.day = 12
console.log(myDate.day) 

