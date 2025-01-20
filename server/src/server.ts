import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';
import pkg from 'pg';
const { Client } = pkg;

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const forceDatabaseRefresh = false;

// Added due to CORS error
app.use(cors());

const client = new Client({
  user: process.env.DB_USER,
  host: 'localhost',
  password: process.env.DB_PASSWORD,
  port: 5432,
});

client.connect()
  .then(() => {
    // Check if the database exists, if not, create it
    return client.query(`SELECT 1 FROM pg_database WHERE datname='kanban_db'`);
  })
  .then((res) => {
    if (res.rowCount === 0) {
      console.log('Database does not exist. Creating "kanban_db"...');
      return client.query('CREATE DATABASE kanban_db');
    } else {
      console.log('Database already exists');
      return; // Explicit return when database already exists
    }
  })
  .then(() => {
    // After the database is created (if necessary), initialize sequelize and start the server
    client.end();
    return sequelize.authenticate(); // Ensure we return the sequelize promise for chaining
  })
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    return sequelize.sync({ force: forceDatabaseRefresh });
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to PostgreSQL:', error);
    client.end();
  });

app.use(express.static('../client/dist'));
app.use(express.json());
app.use(routes);