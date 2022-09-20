// export class Person {
//     name: string;
//     id: number;
//     salary: number;
//     constructor(name: string, id: number, salalry: number) {
//         this.name = name
//         this.id = id
//         this.salary = salary
//     }
//     print() {
//         return `${this.id}, ${this.name}, ${this.salary}`
//     }
// }

// export class Person {
//     constructor(public name: string, public id: number, public salary: number) {

//     }
//     print() {
//         return `${this.id}, ${this.name}, ${this.salary}`
//     }
// }

export class Person {
    constructor(private _name: string, private _id: number, private _salary: number) {

    }
    public set name(name: string) {
        this._name = name
    }
    public get name(): string {
        return this._name
    }
    public set id(id: number) {
        this._id = id
    }
    public get id(): number {
        return this._id
    }
    public set salary(salary: number) {
        this._salary = salary
    }
    public get salary(): number {
        return this._salary
    }
    print() {
        return `${this._id}, ${this._name}, ${this._salary}`
    }
}
