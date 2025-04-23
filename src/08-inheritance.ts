export class Animal {
    constructor(public name: string){}

    move(): void{
        console.log("Moving Along!")
    }
    greeting(){
        return `Hello, Im ${this.name}`
    }
}

export class Dog extends Animal {
    constructor(
        name: string, 
        public owner: string 
    ){
        super(name)
    }
    woof(times: number){
        for (let index = 0; index < times; index++) {
            console.log("Woof!")
        }
    }
}

const fifi = new Animal("fifi")
fifi.move()
console.log(fifi.greeting())

const chase = new Dog("chase", "jose")
chase.move()
console.log(chase.greeting())
chase.woof(5)
console.log(chase.owner)


