
export class Proyecto{

    private _nombre: string;
    private _presupuesto: string;

    constructor(){
        this._nombre = '';
        this._presupuesto = '';
    }

    public setNombre(nombre: string){
        this._nombre = nombre;
    }
    
    public getNombre(){
        return this._nombre;
    }

    public setPresupuesto(presupuesto: string){
        this._presupuesto = presupuesto;
    }

    public getPresupuesto(){
        return this._presupuesto;
    }
}