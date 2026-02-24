import mysql from 'mysql2/promise';
import 'dotenv/config';

//criar conexão
const pool = mysql.createPool({
    //item que iremos setar o valor
    host:process.env.HOST,
    user:process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT_MYSQL,
    waitForConnections:true,
    // waitForConnections é "se eu tiver mais conexões do que eu liberar, vai ter uma 'fila' para que elas aguardem sua vez."
    connectionLimit: 10,
    queueLimit:0,
});

export default pool;
