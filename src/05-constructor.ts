

export class MyDate {
        constructor(
            public year: number = 1993, 
            public month: number = 12, 
            private day: number = 12
        ) {}
    
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
    
    // const myDate = new MyDate(2021, 1, 10) 
    const myDate = new MyDate() 
    console.log(myDate.printFormat()) 
    
    const myDate2 = new MyDate(2025)
    console.log("2025: ", myDate2.printFormat()) 

    const myDate3 = new MyDate(2025, 7)
    console.log("2025, 7: ", myDate3.printFormat()) 