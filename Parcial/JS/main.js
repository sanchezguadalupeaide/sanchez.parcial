let numeros = [];

    function generarNumero() {
        const numeroGenerado = Math.floor(Math.random() * 100) + 1;
        document.getElementById('numeroGenerado').value = numeroGenerado;
    }

    function agregarNumeroATabla() {
        const numeroGenerado = document.getElementById('numeroGenerado').value;
        numeros.push(Number(numeroGenerado));

        const tablaNumeros = document.getElementById('tablaNumeros');
        const newRow = tablaNumeros.insertRow(-1);
        const cell = newRow.insertCell(0);
        cell.textContent = numeroGenerado;
    }

    function calcularPromedio() {
        const promedioElement = document.getElementById('promedio');
        if (numeros.length === 0) {
            promedioElement.textContent = 'No hay números para calcular el promedio.';
        } else {
            const suma = numeros.reduce((acc, num) => acc + num, 0);
            const promedio = suma / numeros.length;
            promedioElement.textContent = 'Promedio: ' + promedio.toFixed(2);
        }
    }