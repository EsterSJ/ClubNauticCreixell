export class Travesia {

    public id_travesia: number;
    public id_user: number;
    public fecha: Date;
    public origen: string;
    public salida: number;
    public destino: string;
    public llegada: number;
    public plazas: number;

    constructor(id_travesia: number, id_user: number, fecha: Date, origen: string, salida: number, destino: string, llegada: number, plazas: number){
        this.id_travesia = id_travesia;
        this.id_user = id_user;
        this.fecha = fecha;
        this.origen = origen;
        this.salida = salida;
        this.destino = destino;
        this.llegada = llegada;
        this.plazas = plazas;
    }

}