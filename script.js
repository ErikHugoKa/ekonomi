function calcSparande() {
  const startkapital = parseFloat(document.getElementById("startkapital").value);
  const sparande = parseFloat(document.getElementById("sparande").value);
  const ranta = parseFloat(document.getElementById("ranta").value) / 100;
  const ar = parseFloat(document.getElementById("ar").value);

  let kapital = startkapital;
  let totalSkatt = 0;

  for (let i = 1; i <= ar; i++) {
    kapital += sparande * 12;
    let avkastning = kapital * ranta;
    let skatt = avkastning * 0.30; // 30% skatt på avkastning
    kapital += avkastning - skatt;
    totalSkatt += skatt;
  }

  document.getElementById("sparResult").textContent = kapital.toFixed(2) + " kr";
  document.getElementById("skattResult").textContent = totalSkatt.toFixed(2) + " kr";
}