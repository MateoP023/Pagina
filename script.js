// Lista de retos diarios
const challenges = [
    "Mantén la espalda recta por 10 minutos mientras sirves mesas.",
    "Flexiona las rodillas al levantar una bandeja pesada.",
    "Haz un calentamiento de 5 minutos antes de empezar tu turno.",
    "Realiza un estiramiento de cuello durante 30 segundos."
];

// Lista de consejos desbloqueables
const tips = [
    "Consejo 1: Mantén los hombros relajados para evitar tensión.",
    "Consejo 2: Usa ambos brazos para repartir el peso al cargar bandejas.",
    "Consejo 3: Haz pausas cortas para estirarte cada hora."
];

let points = 0;
let tipIndex = 0;

// Elementos del DOM
const challengeText = document.getElementById("challenge-text");
const completeBtn = document.getElementById("complete-btn");
const pointsDisplay = document.getElementById("points");
const tipsList = document.getElementById("tips-list");

// Seleccionar un reto aleatorio al cargar la página
function loadChallenge() {
    const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
    challengeText.textContent = randomChallenge;
}

completeBtn.addEventListener("click", () => {
    // Sumar puntos
    points += 10;
    pointsDisplay.textContent = points;

    // Desbloquear un consejo si se alcanzan ciertos puntos
    if (points >= (tipIndex + 1) * 20 && tipIndex < tips.length) {
        const newTip = document.createElement("li");
        newTip.textContent = tips[tipIndex];
        tipsList.appendChild(newTip);
        tipIndex++;
    }

    // Cargar un nuevo reto
    loadChallenge();
});

// Cargar el primer reto al iniciar
loadChallenge();
