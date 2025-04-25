export class MyService {

    static instance: MyService | null = null

    private constructor(private name: string){}

    get Name(): string{
        return this.name
    }

    static create(name: string){
        if(!MyService.instance){
            console.log('Creating new instance');
            MyService.instance = new MyService(name)
        }
        return MyService.instance
    }
}

const MyService2 = MyService.create("MyService2")
console.log(MyService2.Name)

const MyService1 = MyService.create("MyService1")
console.log(MyService1.Name)
console.log(MyService1 === MyService2)