console.log("Math.PI", Math.PI)
console.log("Math.max", Math.max(1,2,3,4,5))

class MyMath {
    static readonly PI = 3.14

    static max(...numbers: number[]){
        return numbers.reduce((a,b) => a >= b ? a : b)
    }
}

// MyMath.PI = 3.12 // nose puede cambiar el valor porque es readonly
console.log("MyMath.PI", MyMath.PI)
console.log(MyMath.max(1,2,3,5,456))
console.log(MyMath.max(-1,-2,-3,-5,-456, -1))

const numbers = [12,223,323,4,55]
console.log("MyMath.max(...numbers): ", MyMath.max(...numbers))