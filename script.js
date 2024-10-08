function calcular() {
    const mu0 = 4 * Math.PI * Math.pow(10, -7);
    const I1 = parseFloat(document.getElementById('valor-I1').value) / 1000;
    const I2 = parseFloat(document.getElementById('valor-I2').value) / 1000;
    const L = parseFloat(document.getElementById('valor-L').value);
    const D = parseFloat(document.getElementById('valor-D').value);
 
    const f = (mu0 * I1 * I2 * L) / (2 * Math.PI * D);
 
    document.getElementById('forca').innerText = f.toExponential(2);
}