/**********************
 * SUPABASE
 **********************/
const SUPABASE_URL = "https://qimdzrlchnxkarwisjut.supabase.co";
const SUPABASE_KEY = "sb_publishable_51VQSvMMNVYE9p1c8VVheA_xTV9Mzj2";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

/**********************
 * ESTADO GLOBAL
 **********************/
let lugares = [];
let userLocation = null;
let markers = [];
let map;

/**********************
 * MODO NOCHE
 **********************/
function toggleNight() {
  document.body.classList.toggle("night");
}

/**********************
 * MODAL
 **********************/
function abrirModal() {
  document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

/**********************
 * GEOLOCALIZACIÓN (MANUAL)
 **********************/
function recalcular() {
  if (!navigator.geolocation) {
    alert("Geolocalización no soportada");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    pos => {
      userLocation = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      };
      renderizar();
    },
    () => {
      userLocation = null;
      renderizar();
    }
  );
}

/**********************
 * DISTANCIA (HAVERSINE)
 **********************/
function distanciaKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/**********************
 * SUPABASE
 **********************/
async function cargarLugares() {
  const { data, error } = await supabase
    .from("lugares")
    .select("*");

  if (error) {
    console.error(error);
    return;
  }

  lugares = data;
  renderizar();
}

async function guardarLugar() {
  const coordsInput = document.getElementById("coordenadas");
  if (!coordsInput.value) {
    alert("Selecciona un lugar válido");
    return;
  }

  const [lat, lon] = coordsInput.value.split(",");

  const lugar = {
    nombre: document.getElementById("buscadorLugar").value,
    tipo: document.getElementById("tipoLugar").value,
    resena: document.getElementById("resenaLugar").value,
    lat: parseFloat(lat),
    lon: parseFloat(lon)
  };

  const { error } = await supabase.from("lugares").insert([lugar]);
  if (error) {
    alert("Error al guardar");
    console.error(error);
    return;
  }

  cerrarModal();
  cargarLugares();
}

/**********************
 * RENDER
 **********************/
function renderizar() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  markers.forEach(m => map.removeLayer(m));
  markers = [];

  const tipo = document.getElementById("filtroTipo").value;
  const distanciaFiltro = document.getElementById("filtroDistancia").value;

  lugares.forEach(l => {
    if (tipo && l.tipo !== tipo) return;

    if (distanciaFiltro !== "all" && userLocation) {
      const d = distanciaKm(
        userLocation.lat,
        userLocation.lon,
        l.lat,
        l.lon
      );
      const minutos = (d / 5) * 60;
      if (minutos > parseInt(distanciaFiltro)) return;
    }

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <strong>${l.nombre}</strong><br>
      ${l.resena || ""}<br>
      <a class="btn" target="_blank"
        href="https://www.google.com/maps/dir/?api=1&destination=${l.lat},${l.lon}">
        🚶 Ruta caminando
      </a>
    `;
    lista.appendChild(card);

    const marker = L.marker([l.lat, l.lon]).addTo(map);
    markers.push(marker);
  });
}

/**********************
 * INIT (CLAVE)
 **********************/
window.onload = () => {

  // MAPA
  map = L.map("map").setView([48.864, 2.417], 14);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap"
  }).addTo(map);

  // AUTOCOMPLETE
  const inputBuscador = document.getElementById("buscadorLugar");
  const sugerenciasDiv = document.getElementById("sugerencias");
  const coordsInput = document.getElementById("coordenadas");
  const coordsTexto = document.getElementById("coordsTexto");

  let timeout;

  inputBuscador.addEventListener("input", () => {
    const q = inputBuscador.value.trim();
    if (q.length < 3) {
      sugerenciasDiv.innerHTML = "";
      return;
    }

    clearTimeout(timeout);
    timeout = setTimeout(async () => {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}&limit=5`
      );
      const data = await res.json();
      sugerenciasDiv.innerHTML = "";

      data.forEach(p => {
        const div = document.createElement("div");
        div.textContent = p.display_name;
        div.onclick = () => {
          coordsInput.value = `${p.lat},${p.lon}`;
          coordsTexto.textContent = `Lat,Lon: ${p.lat}, ${p.lon}`;
          inputBuscador.value = p.display_name;
          sugerenciasDiv.innerHTML = "";
        };
        sugerenciasDiv.appendChild(div);
      });
    }, 300);
  });

  document.getElementById("filtroTipo").addEventListener("change", renderizar);
  document.getElementById("filtroDistancia").addEventListener("change", renderizar);

  cargarLugares();
};
