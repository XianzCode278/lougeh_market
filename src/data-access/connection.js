
const connect = ({ dotenv, pg }) => {
    return async function conn() {
      dotenv.config();
      const { Pool } = pg;
        console.log(process.env.PGDATABASE)
    const pool = new Pool({
        host: process.env.PGHOST,
        port: process.env.PGPORT,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
  
  })

      return pool;
    };
  };
  
  module.exports = connect;
  