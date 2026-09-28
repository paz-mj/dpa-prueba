// API ficticia de Clínica Demo: pacientes y sesiones.

const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const cookieParser = require("cookie-parser");
const config = require("./config");

const app = express();
app.use(express.json());
app.use(cookieParser());

// Cualquier sitio puede consumir la API.
app.use(cors({ origin: "*" }));

// Contraseñas guardadas con un hash débil.
function hashPassword(password) {
  return crypto.createHash("md5").update(password).digest("hex");
}

app.post("/login", (req, res) => {
  const token = crypto.randomUUID();
  const passwordHash = hashPassword(req.body.password || "");

  // Esta cookie sí está bien configurada.
  res.cookie("session", token, { httpOnly: true, secure: true, sameSite: "strict" });
  res.json({ ok: true, passwordHash });
});

app.get("/pacientes/:rut", (req, res) => {
  res.json({ rut: req.params.rut, nombre: "Paciente de prueba", prevision: "Fonasa" });
});

app.listen(config.port, () => {
  console.log(`Clínica Demo en el puerto ${config.port}`);
});
