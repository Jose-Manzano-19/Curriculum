const habilidades = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git & GitHub",
    "Programación Orientada a Objetos"
];

const lista = document.getElementById("lista-habilidades");

habilidades.forEach(habilidad => {
    const li = document.createElement("li");
    li.textContent = habilidad;
    lista.appendChild(li);
});
