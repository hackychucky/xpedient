import mysql from 'mysql2/promise';
import fs from 'fs/promises';
import path from 'path';

async function initializeDatabase() {
  try {
    // Cargar el archivo SQL
    const sqlPath = path.join(__dirname, '../sql/init.sql');
    const sql = await fs.readFile(sqlPath, 'utf8');

    // Crear conexión con la base de datos
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'TU_PASSWORD_AQUI', // <-- Cambia esto
      multipleStatements: true,      // Permitir ejecutar varios comandos juntos
    });

    // Ejecutar el contenido del archivo SQL
    await connection.query(sql);
    console.log('✅ Database initialized successfully.');

    // Cerrar la conexión
    await connection.end();
  } catch (error) {
    console.error('❌ Error initializing database:', error);
  }
}

initializeDatabase();
