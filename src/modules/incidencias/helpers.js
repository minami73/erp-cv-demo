/* ─── Incidencias — Helper Functions ── */

function calcSemaforo(alumnoId, incidents) {
  const mine = incidents.filter((i) => i.alumnoId === alumnoId);
  const active = mine.filter((i) => i.estado === "activa");
  if (active.some((i) => i.gravedad === "grave") || active.length >= 3)
    return "rojo";
  if (active.length >= 1 || mine.length >= 3) return "amarillo";
  return "verde";
}

function fmtFecha(str) {
  const MONTHS = window.MONTHS_SHORT;
  const [y, m, d] = str.split("-");
  return `${+d} ${MONTHS[+m - 1]} ${y}`;
}

window.calcSemaforo = calcSemaforo;
window.fmtFecha = fmtFecha;
