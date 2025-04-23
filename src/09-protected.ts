export class Animal {
    constructor(protected name: string){} // protected permite a las clases hijas acceder a name

    move(): void{
        console.log("moving along!")
    }
    greeting(){
        console.log(`hola, soy ${this.name}`)
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
            console.log("Woof! another dog")
        }
    }
    move(): void {
        console.log("Moving like another dog!", this.name) // se puede usar this.name porque es protected
        super.move()
    }
}

const fifi = new Animal("fifi")
fifi.move()
fifi.greeting()
// fifi.name = "fifito" // no se puede cambiar el nombre porque es protected

const jess = new Dog("chase", "jess")
jess.move()