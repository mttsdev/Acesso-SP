// Inicializa o mapa dentro da div com id="map"
// [-23.5616, -46.6385] são as coordenadas aproximadas da Av. da Liberdade, SP
// O número 16 é o nível do zoom (mais perto ou mais longe)
const map = L.map('map').setView([-23.5616, -46.6385], 16);

// Adiciona as "camadas" visuais do mapa (OpenStreetMap clássico)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Adiciona um marcador de pino (opcional, caso queira destacar o ponto exato)
L.marker([-23.5616, -46.6385]).addTo(map)
    .bindPopup('Região da Liberdade')
    .openPopup();