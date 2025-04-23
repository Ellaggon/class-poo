

export class MyDate {
    constructor(
        public year: number = 1993, 
        public month: number = 12, 
        private _day: number = 12
    ) {}

    printFormat(): string {
        const day = this.addPadding(this._day)
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
            this._day += amount
        }
        if(type === "months"){
            this.month += amount
        }
        if(type === "years"){
            this.year += amount
        }
    }
    get day(){
        return this._day
    }

    isLeapYear(year: number): boolean { // año biciesto
        if(this.year % 400 === 0) return true
        if(this.year % 100 === 0) return false
        return year % 4 === 0
    }
}

// const myDate = new MyDate(2021, 1, 10) 
const myDate = new MyDate() 
console.log(myDate.printFormat()) 

console.log("day con get: ", myDate.day)
console.log("isLeapYear 2025: ", myDate.isLeapYear(2025))
console.log("isLeapYear 2028: ", myDate.isLeapYear(2028))