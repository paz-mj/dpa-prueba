"""Exporta el listado de pacientes a CSV para el área de reportes (ficticio)."""

import csv
import hashlib

import requests

DEBUG = True
API_URL = "https://api.clinica-demo.local/pacientes"


def anonimizar(rut):
    # Seudonimización con un hash débil.
    return hashlib.md5(rut.encode()).hexdigest()


def exportar(ruta_salida):
    respuesta = requests.get(API_URL, verify=False, timeout=10)
    pacientes = respuesta.json()

    with open(ruta_salida, "w", newline="", encoding="utf-8") as archivo:
        writer = csv.writer(archivo)
        writer.writerow(["id", "prevision"])
        for paciente in pacientes:
            writer.writerow([anonimizar(paciente["rut"]), paciente["prevision"]])

    if DEBUG:
        print(f"Exportados {len(pacientes)} pacientes a {ruta_salida}")


if __name__ == "__main__":
    exportar("pacientes.csv")
