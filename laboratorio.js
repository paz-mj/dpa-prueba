// Consulta de resultados de exámenes al laboratorio externo (ficticio).

const https = require("https");

function obtenerResultados(rut) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        host: "api.laboratorio-demo.cl",
        path: `/resultados/${rut}`,
        method: "GET",
        // Acepta cualquier certificado, incluso uno falso.
        rejectUnauthorized: false,
      },
      (res) => {
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => resolve(JSON.parse(body)));
      },
    );
    req.on("error", reject);
    req.end();
  });
}

module.exports = { obtenerResultados };
