export interface Driver { // contrato
    database: string // atributo obligatorio 
    password: string
    port: number

    connect(): void
    disconect(): void
    isConnected(name: string): boolean
}

// const driver: Driver = {
//     database: "",
//     password: "",
//     port: 123, 
// }

class PostgresDriver implements Driver {
    constructor(
        public database: string,
        public password: string,
        public port: number,
        private host: number // opcional
    ){} 

    connect(): void {
        console.log("conecting to database")
    }
    disconect(): void {
        throw new Error("Method not implemented.")
    }
    isConnected( ): boolean {
        return true
    }
}