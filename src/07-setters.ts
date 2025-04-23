

export class MyDate {
    constructor(
        public year: number = 1993, 
        private _month: number = 12, 
        private _day: number = 12
    ) {}

    printFormat(): string {
        const day = this.addPadding(this._day)
        const month = this.addPadding(this._month)
        return `${day}/${month}/${this.year}`
    }
    private addPadding(value: number){
        if (value >= 10) {
            return value
        }
        return `0${value}`   
    }

    get month() {
        return this._month
    }
    set month(newValue: number) { // cambia el valor de month
        if(newValue >= 1 && newValue < 12){
            this._month = newValue
        } else {
            throw new Error("Month must be between 1 and 12");
            
        }
    }
}

// const myDate = new MyDate(2021, 1, 10) 
const myDate = new MyDate() 
console.log(myDate.printFormat()) 

console.log(myDate.month) 
myDate.month = 2
console.log("month: " ,myDate.month)
myDate.month = 98
console.log("month: ", myDate.month)