/*========================
Elementos del DOM
========================= */

const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll (".btn");    

/*Variables para almacenar la operación */
let numeroAnterior = "";
let operador = "";
let operacionActual = "";

/*========================
Asignación de eventos a todos los botones
========================= */

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.textContent;

        /* Si el boton es un número */
        if (!isNaN(valor)) {
            operacionActual += valor;
            pantalla.value = operacionActual;
        }

        /* Si es un operador */
        else if (valor === "+" || valor === "-" || valor === "*" || valor === "/") {
            numeroAnterior = operacionActual;             // Guardar el número actual como número anterior
            operador = valor;                            // Guardar el operador
            operacionActual = "";                        // Limpiar la operación actual
        }

        /* Si es el botón de igual (=) */
        else if (valor === "=") {
            if (numeroAnterior !== "" && operacionActual !== "") {
                const num1 = parseFloat(numeroAnterior);
                const num2 = parseFloat(operacionActual);
                let resultado = 0;

                switch (operador) {
                    case "+": resultado = num1 + num2; break;
                    case "-": resultado = num1 - num2; break;
                    case "*": resultado = num1 * num2; break;
                    case "/": resultado = num2 !== 0 ? num1 / num2 : "Error"; break;
                }
                pantalla.value = resultado;
                operacionActual = resultado.toString(); // para permitir operaciones consecutivas
            }
        }

        /* Si es el botón de borrar (C) */
        else if (valor === "C") {
            pantalla.value = "";
            numeroAnterior = "";
            operador = "";
            operacionActual = "";
        }
    });
});


