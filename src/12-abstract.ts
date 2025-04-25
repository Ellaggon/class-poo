import { Animal, Dog } from "./09-protected";


const animal = new Animal("elite") // ya no podremos crear una instancia de Animal porque es abstract
animal.greeting()

const chase = new Dog("chase", "jess")  // pero si podremos crear una instancia de Dog que es un hijo de Animal
chase.greeting()
chase.woof(3)