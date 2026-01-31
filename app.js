// =======================
// SUPABASE
// =======================
const SUPABASE_URL = "https://qimdzrlchnxkarwisjut.supabase.co";
const SUPABASE_KEY = "sb_publishable_51VQSvMMNVYE9p1c8VVheA_xTV9Mzj2";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

// =======================
// MAPA
// =======================
const map = L.map("map").setView([48.864, 2.417], 14);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);

let markers = [];
let lugares = [];

// =======================
// MODAL
// =======================
function abrirModal() {
  document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

// =======================
// AUTOCOMPLETE NOMINATIM
// =======================
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

// =======================
// SUPABASE CRUD
// =======================
async function cargarLugares() {
  const { data, error } = await supabase
    .from("lugares")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  lugares = data;
  renderizar();
}

async function guardarLugar() {
  if (!coordsInput.value) {
    alert("Selecciona un lugar válido");
    return;
  }

  const [lat, lon] = coordsInput.value.split(",");

  const lugar = {
    nombre: inputBuscador.value,
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

// =======================
// RENDER
// =======================
function renderizar() {
  document.getElementById("lista").innerHTML = "";
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  const filtro = document.getElementById("filtroTipo").value;

  lugares
    .filter(l => !filtro || l.tipo === filtro)
    .forEach(l => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <strong>${l.nombre}</strong><br>
        <span>${l.resena || ""}</span><br>
        <a class="btn" target="_blank"
          href="https://www.google.com/maps/dir/?api=1&destination=${l.lat},${l.lon}">
          🚶 Ruta caminando
        </a>
      `;
      document.getElementById("lista").appendChild(card);

      const m = L.marker([l.lat, l.lon]).addTo(map);
      markers.push(m);
    });
}

document.getElementById("filtroTipo").addEventListener("change", renderizar);

// =======================
// INIT
// =======================
window.onload = cargarLugares;
