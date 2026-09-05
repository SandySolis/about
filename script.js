const pages = [...document.querySelectorAll(".page")];
const buttons = [...document.querySelectorAll(".dock-item")];
const title = document.getElementById("windowTitle");
const titles = {
  home:"~/portfolio/home", about:"~/portfolio/about.md", skills:"~/portfolio/skills",
  projects:"~/portfolio/projects", experience:"~/portfolio/experience.log", contact:"~/portfolio/contact.sh"
};

function openPage(id){
  pages.forEach(p => p.classList.toggle("active", p.id === id));
  buttons.forEach(b => b.classList.toggle("active", b.dataset.section === id));
  title.textContent = titles[id] || "~/portfolio";
  window.scrollTo({top:0, behavior:"smooth"});
}
buttons.forEach(b => b.addEventListener("click", () => openPage(b.dataset.section)));
document.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => openPage(b.dataset.go)));

function updateClock(){
  const now = new Date();
  document.getElementById("clock").textContent =
    now.toLocaleTimeString("es-PE",{hour:"2-digit",minute:"2-digit",hour12:false});
}
updateClock(); setInterval(updateClock,1000);

const toast = document.getElementById("toast");
let toastTimer;
function showToast(message){
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}
window.showToast = showToast;

document.getElementById("activitiesBtn").addEventListener("click", () => {
  showToast("Bienvenida a SandyOS ✨ Usa el dock para explorar mi portfolio.");
});
