export class User {

    public id_user: number;
    public nombre: string;
    public email: string;
    public password: string;
    public rol: string;

    constructor(id_user: number, nombre: string, email: string, password: string, rol: string){
        this.id_user = id_user;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.rol = rol;
    }

}