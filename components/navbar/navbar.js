const hambergBtn = document.querySelector(".drawer-hamberg-btn");
const drawer = document.querySelector(".drawer-container");
const closBtn = document.querySelector(".drawer-close");

hambergBtn.addEventListener("click", () => {
    drawer.classList.add("drawer-trans-on");
    drawer.classList.remove("drawer-trans-off");
})

function closeDrawer() {
    drawer.classList.remove("drawer-trans-on");
    drawer.classList.add("drawer-trans-off");
}

closBtn.addEventListener("click", closeDrawer)