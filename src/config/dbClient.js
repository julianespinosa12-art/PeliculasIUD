import 'dotenv/config';  // ← Carga las variables de .env
import { MongoClient } from "mongodb";

class dbClient {
    constructor() {
        const queryString = process.env.MONGODB_URI;
        this.client = new MongoClient(queryString);
        this.conectarBD();
    }

    async conectarBD() {
        try {
            await this.client.connect();
            this.db = this.client.db('PeliculasIUD');
            console.log("Conectado al servidor de base de datos");
        } catch (e) {
            console.log(e);
        }
    }
}

export default new dbClient();