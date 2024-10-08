function calcular(){      
    /* parseFloat: converte a string recebida como argumento e a retorna como um número */
    const k = 8.9875 * Math.pow(10, 9);
    const q1 = parseFloat(document.getElementById('q1').value);
    const q2 = parseFloat(document.getElementById('q2').value);
    const D = parseFloat(document.getElementById('D').value);
 
 
    const result = k * Math.abs(q1 * q2) / Math.pow(D, 2);
 
    document.getElementById('result').innerText = result.toExponential(2);
}

function calcular1() {
    const mu0 = 4 * Math.PI * Math.pow(10, -7);
    const I1 = parseFloat(document.getElementById('valor-I1').value) / 1000;
    const I2 = parseFloat(document.getElementById('valor-I2').value) / 1000;
    const L = parseFloat(document.getElementById('valor-L').value);
    const D = parseFloat(document.getElementById('valor-D').value);
 
    const f = (mu0 * I1 * I2 * L) / (2 * Math.PI * D);
 
    document.getElementById('result1').innerText = f.toExponential(2);
}