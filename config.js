// Configuración de la API de Clínica Demo.
// Valores ficticios escritos en el código a propósito, para la demostración.

const port = 3000;
const dbPassword = "clinica-demo-2026";
const jwtSecret = "secreto-de-la-clinica-demo";
const databaseUrl = "postgres://admin:clinica2026@db.clinica-demo.local:5432/pacientes";

module.exports = { port, dbPassword, jwtSecret, databaseUrl };
