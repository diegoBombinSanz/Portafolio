// Datos iniciales
let lugares = JSON.parse(localStorage.getItem("lugares")) || [
 {nombre:"Spicy Chick", tipo:"comida", lat:48.8672, lon:2.4150, reseña:""},
 {nombre:"Mayda Kebab", tipo:"comida", lat:48.8665, lon:2.4180, reseña:""},
 {nombre:"Fraté Italian Kitchen", tipo:"cena", lat:48.8680, lon:2.4123, reseña:""},
 {nombre:"O’Bois Pizza", tipo:"cena", lat:48.8635, lon:2.4171, reseña:""},
 {nombre:"Chez Laxmi", tipo:"cena", lat:48.8629, lon:2.4215, reseña:""},
 {nombre:"Voyage du Palais", tipo:"cena", lat:48.8641, lon:2.4137, reseña:""}
];

let map, userMarker, userLat=null, userLon=null, markers=[];

const tipoSel = document.getElementById("tipo");
const distanciaSel = document.getElementById("distancia");
const lista = document.getElementById("lista");

function toggleNight(){document.body.classList.toggle("night");}

function distancia(lat1, lon1, lat2, lon2){
    const R=6371;
    const dLat=(lat2-lat1)*Math.PI/180;
    const dLon=(lon2-lon1)*Math.PI/180;
    const a=Math.sin(dLat/2)**2+Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
    return R*2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

// Inicializamos mapa centrado en Bagnolet
map=L.map('map').setView([48.8665,2.4180],15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Render inicial
render();
tipoSel.onchange=render;
distanciaSel.onchange=render;

// GPS
function obtenerGPS(){
    document.getElementById("gpsStatus").textContent="📡 Localizando...";
    navigator.geolocation.getCurrentPosition(pos=>{
        userLat=pos.coords.latitude;
        userLon=pos.coords.longitude;
        document.getElementById("gpsStatus").textContent="📍 Ubicación actualizada";
        if(userMarker) map.removeLayer(userMarker);
        userMarker=L.marker([userLat,userLon]).addTo(map).bindPopup("📍 Estás aquí").openPopup();
        map.setView([userLat,userLon],15);
        render();
    },()=>{
        document.getElementById("gpsStatus").textContent="⚠️ Activa ubicación y pulsa Recalcular";
        render();
    });
}

// Render lista y marcadores
function render(){
    lista.innerHTML="";
    markers.forEach(m=>map.removeLayer(m));
    markers=[];
    lugares.forEach(l=>{
        let mostrar=false,minutos=null;
        if(userLat && userLon && distanciaSel.value!=="all"){
            const km=distancia(userLat,userLon,l.lat,l.lon);
            minutos=km*12;
            mostrar=minutos<=Number(distanciaSel.value);
        }else mostrar=true;
        if(mostrar&&(tipoSel.value==="all"||tipoSel.value===l.tipo)){
            if(map&&userLat&&userLon){
                const m=L.marker([l.lat,l.lon])
                    .addTo(map)
                    .bindPopup(`${l.nombre}${minutos? "<br>🚶 "+minutos.toFixed(0)+" min":""}`);
                markers.push(m);
            }
            lista.innerHTML+=`<div class="card">
                <h3>${l.nombre}</h3>
                <p class="small">${minutos?"🚶 "+minutos.toFixed(0)+" min caminando":"📍 Distancia no disponible"}</p>
                <p class="small">${l.reseña || ""}</p>
                <a class="btn" href="https://www.google.com/maps/dir/?api=1&origin=${userLat||""},${userLon||""}&destination=${l.lat},${l.lon}&travelmode=walking" target="_blank">Ir caminando</a>
            </div>`;
        }
    });
}

// Modal formulario
function mostrarFormulario(){document.getElementById("modal").style.display="block";}
function cerrarFormulario(){document.getElementById("modal").style.display="none";}

function guardarLugar(){
    const nombre=document.getElementById("nombreLugar").value.trim();
    const tipo=document.getElementById("tipoLugar").value;
    const reseña=document.getElementById("reseña").value.trim();
    const coords=document.getElementById("coordenadas").value.split(",");
    if(!nombre||coords.length!==2){alert("Nombre y coordenadas válidas obligatorias");return;}
    const lat=parseFloat(coords[0]), lon=parseFloat(coords[1]);
    if(isNaN(lat)||isNaN(lon)){alert("Coordenadas inválidas");return;}
    lugares.push({nombre,tipo,lat,lon,reseña});
    localStorage.setItem("lugares",JSON.stringify(lugares));
    cerrarFormulario();
    render();
}

const inputBuscador = document.getElementById("buscadorLugar");
const sugerenciasDiv = document.getElementById("sugerencias");
const coordenadasInput = document.getElementById("coordenadas");
const coordsText = document.getElementById("coordenadasSeleccionadas");

let timeout = null;

inputBuscador.addEventListener("input", () => {
    const query = inputBuscador.value.trim();
    if (query.length < 3) {
        sugerenciasDiv.innerHTML = "";
        return;
    }
    
    // Limitar la frecuencia de consultas
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=5`)
        .then(res => res.json())
        .then(data => {
            sugerenciasDiv.innerHTML = "";
            data.forEach(place => {
                const div = document.createElement("div");
                div.textContent = place.display_name;
                div.addEventListener("click", () => {
                    const lat = parseFloat(place.lat).toFixed(6);
                    const lon = parseFloat(place.lon).toFixed(6);
                    coordsText.textContent = `Lat,Lon: ${lat},${lon}`;
                    coordenadasInput.value = `${lat},${lon}`;
                    sugerenciasDiv.innerHTML = "";
                    inputBuscador.value = place.display_name;
                });
                sugerenciasDiv.appendChild(div);
            });
        });
    }, 300); // Espera 300ms tras teclear
});

