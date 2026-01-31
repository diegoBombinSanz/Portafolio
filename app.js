/*************************
 * SUPABASE
 *************************/
const SUPABASE_URL = "https://qimdzrlchnxkarwisjut.supabase.co";
const SUPABASE_KEY = "sb_publishable_51VQSvMMNVYE9p1c8VVheA_xTV9Mzj2";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

/*************************
 * ESTADO
 *************************/
let map;
let lugares = [];
let markers = [];
let userLocation = null;

/*************************
 * DOM READY (CLAVE)
 *************************/
document.addEventListener("DOMContentLoaded", () => {

  // ===== MAPA =====
  map = L.map("map").setView([48.864, 2.417], 14);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap"
  }).addTo(map);

  // ===== FILTROS =====
  document.getElementById("filtroTipo").addEventListener("change", renderizar);
  document.getElementById("filtroDistancia").addEventListener("change", renderizar);

  // ===== AUTOCOMPLETE =====
  initAutocomplete();

  // ===== CARGAR DATOS =====
  cargarLugares();
});

/*************************
 * MODAL
 *************************/
function abrirModal() {
  document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

/*************************
 * MODO NOCHE
 *************************/
function toggleNight() {
  document.body.classList.toggle("night");
}

/*************************
 * GEOLOCALIZACIÓN
 *************************/
function recalcular() {
  if (!navigator.geolocation) return;

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

/*************************
 * DISTANCIA
 *************************/
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

/*************************
 * AUTOCOMPLETE (NOMINATIM)
 *************************/
function initAutocomplete() {
  const input = document.getElementById("buscadorLugar");
  const sugerencias = document.getElementById("sugerencias");
  const coords = document.getElementById("coordenadas");
  const texto = document.getElementById("coordsTexto");

  let t;

  input.addEventListener("input", () => {
    const q = input.value.trim();
    if (q.length < 3) {
      sugerencias.innerHTML = "";
      return;
    }

    clearTimeout(t);
    t = setTimeout(async () => {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}&limit=5`
      );
      const data = await res.json();
      sugerencias.innerHTML = "";

      data.forEach(p => {
        const div = document.createElement("div");
        div.textContent = p.display_name;
        div.onclick = () => {
          coords.value = `${p.lat},${p.lon}`;
          texto.textContent = `Lat,Lon: ${p.lat}, ${p.lon}`;
          input.value = p.display_name;
          sugerencias.innerHTML = "";
        };
        sugerencias.appendChild(div);
      });
    }, 300);
  });
}

/*************************
 * SUPABASE
 *************************/
async function cargarLugares() {
  const { data, error } = await supabase.from("lugares").select("*");
  if (error) {
    console.error(error);
    return;
  }
  lugares = data;
  renderizar();
}

async function guardarLugar() {
  const coords = document.getElementById("coordenadas").value;
  if (!coords) {
    alert("Selecciona un lugar");
    return;
  }

  const [lat, lon] = coords.split(",");

  const lugar = {
    nombre: document.getElementById("buscadorLugar").value,
    tipo: document.getElementById("tipoLugar").value,
    resena: document.getElementById("resenaLugar").value,
    lat: parseFloat(lat),
    lon: parseFloat(lon)
  };

  const { error } = await supabase.from("lugares").insert([lugar]);
  if (error) {
    console.error(error);
    alert("Error al guardar");
    return;
  }

  cerrarModal();
  cargarLugares();
}

/*************************
 * RENDER
 *************************/
function renderizar() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  markers.forEach(m => map.removeLayer(m));
  markers = [];

  const tipo = document.getElementById("filtroTipo").value;
  const dist = document.getElementById("filtroDistancia").value;

  lugares.forEach(l => {
    if (tipo && l.tipo !== tipo) return;

    if (dist !== "all" && userLocation) {
      const d = distanciaKm(userLocation.lat, userLocation.lon, l.lat, l.lon);
      const min = (d / 5) * 60;
      if (min > dist) return;
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

    markers.push(L.marker([l.lat, l.lon]).addTo(map));
  });
      }
