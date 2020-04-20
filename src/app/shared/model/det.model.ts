export class MyDet{
    id: number;
    name: string;
    status: boolean;

    constructor(id:number,name:string){
        this.id = id;
        this.name = name;
        this.status = Math.random()*2 > 1 ? true : false;
    }

    getColor(item){
        return item.status ? 'green' : 'red';
    }
}