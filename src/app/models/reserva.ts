export class Reserva {

    public id_reserva: number;
    public id_user: number;
    public tipo: string;
    public inicio: Date;
    public fin: Date;

    constructor(id_reserva: number, id_user: number, tipo: string, inicio: Date, fin: Date){
        this.id_reserva = id_reserva;
        this.id_user = id_user;
        this.tipo = tipo;
        this.inicio = inicio;
        this.fin = fin;
    }

}