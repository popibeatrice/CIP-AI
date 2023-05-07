import "../styles/index.css";
import "../styles/main_page.css";
import "animejs";
import whiteGoToTest from "../assets/whiteNext.png";
import blackGoToTest from "../assets/next(1).png";
import ScrollReveal from "scrollreveal";

// scroll reveal - animatii
ScrollReveal().reveal("#educatie", {
    distance: "150px",
    origin: "left",
    reset: true,
});
ScrollReveal().reveal("#tabelas", {
    distance: "150px",
    origin: "right",
    reset: true,
});
ScrollReveal().reveal("#medicina", {
    delay: 200,
    distance: "150px",
    origin: "left",
    reset: true,
});
ScrollReveal().reveal("#arta", {
    delay: 200,
    distance: "150px",
    origin: "right",
    reset: true,
});
ScrollReveal().reveal("#title", {
    distance: "50px",
    origin: "bottom",
});
ScrollReveal().reveal("#additional", {
    delay: 150,
    distance: "50px",
    origin: "bottom",
});
ScrollReveal().reveal("#ai_intro", {
    distance: "50px",
    origin: "bottom",
});
ScrollReveal().reveal("#information_1", {
    distance: "50px",
    origin: "bottom",
});
ScrollReveal().reveal("#information_2", {
    delay: 50,
    distance: "50px",
    origin: "bottom",
});
ScrollReveal().reveal("#information_3", {
    delay: 100,
    distance: "50px",
    origin: "bottom",
});
ScrollReveal().reveal("#information_4", {
    delay: 150,
    distance: "50px",
    origin: "bottom",
});
ScrollReveal().reveal("#information_5", {
    delay: 200,
    distance: "50px",
    origin: "bottom",
});
ScrollReveal().reveal("#information_6", {
    delay: 250,
    distance: "50px",
    origin: "bottom",
});

//PRIMA SECTIUNE -> DROP DOWN MENU (mi se prajeste calculatorul :)) nu mi mai merge os ul)
const menu = document.querySelector("#dropdown_menu");
const dropdownList = document.querySelector("#dropdown_list");
const body = document.querySelector("body");
const menuSvg = document.querySelector(".ham");

// resize if open
addEventListener("resize", () => {
    if (window.screen.width >= 768 && menu.classList.contains("is_active")) {
        menu.classList.remove("is_active");
        menuSvg.classList.remove("active");
        body.classList.remove("h-screen", "overflow-hidden");
        dropdownList.classList.add("hidden");
    }
    4;
});

// isi face treaba
menu.addEventListener("click", () => {
    if (!menu.classList.contains("is_active")) {
        menu.classList.add("is_active");
        menuSvg.classList.add("active");
        body.classList.add("h-screen", "overflow-hidden");
        dropdownList.classList.remove("hidden");
    } else {
        menu.classList.remove("is_active");
        menuSvg.classList.remove("active");
        body.classList.remove("h-screen", "overflow-hidden");
        dropdownList.classList.add("hidden");
    }
});

//SECTIUNEA CARUSELULUI CU INFORMATII

let progress = 50;
let startX = 0;
let active = 0;
let isDown = false;

const speedWheel = 0.02;
const speedDrag = -0.1;

const getZindex = (array, index) =>
    array.map((_, i) =>
        index === i ? array.length : array.length - Math.abs(index - i)
    );

const items = document.querySelectorAll(".carousel-item");
const cursors = document.querySelectorAll(".cursor");
const displayItems = (item, index, active) => {
    const zIndex = getZindex([...items], active)[index];
    item.style.setProperty("--zIndex", zIndex);
    item.style.setProperty("--active", (index - active) / items.length);
};

const animate = () => {
    progress = Math.max(0, Math.min(progress, 100));
    active = Math.floor((progress / 100) * (items.length - 1));

    items.forEach((item, index) => displayItems(item, index, active));
};
animate();

items.forEach((item, i) => {
    item.addEventListener("click", () => {
        progress = (i / items.length) * 100 + 10;
        animate();
    });
});

const handleWheel = (e) => {
    const wheelProgress = e.deltaY * speedWheel;
    progress = progress + wheelProgress;
    animate();
};

const handleMouseMove = (e) => {
    if (e.type === "mousemove") {
        cursors.forEach((cursor) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
    }
    if (!isDown) return;
    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const mouseProgress = (x - startX) * speedDrag;
    progress = progress + mouseProgress;
    startX = x;
    animate();
};

const handleMouseDown = (e) => {
    isDown = true;
    startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
};

const handleMouseUp = () => {
    isDown = false;
};

// eventuri ca sa mearga tot
document.addEventListener("mousewheel", handleWheel);
document.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);
document.addEventListener("touchstart", handleMouseDown);
document.addEventListener("touchmove", handleMouseMove);
document.addEventListener("touchend", handleMouseUp);

// coursour colorat
const blob = document.getElementById("blob");
const blur = document.querySelector("#blur");
document.body.onpointermove = (event) => {
    const { clientX, clientY } = event;
    blob.animate(
        {
            left: `${clientX}px`,
            top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
    );
};

blur.style.height = window.innerHeight * 2 + "px";

// listen for the window resize event and adjust the blur height accordingly
window.addEventListener("resize", function () {
    blur.style.height = window.innerHeight * 2 + "px";
});

// A PATRA SECTIUNE

const link_testare = document.querySelectorAll(".only_hover_gradient");
const goToTest = document.querySelectorAll(".go_to_test");

console.log(link_testare);
link_testare.forEach((link, index) => {
    link.addEventListener("mouseover", () => {
        goToTest.forEach((photo, photo_index) => {
            if (photo_index == index) {
                goToTest[photo_index].src = whiteGoToTest;
            }
        });
        goToTest["src"] = whiteGoToTest;
    });
    link.addEventListener("mouseout", () => {
        goToTest.forEach((photo) => {
            photo.src = blackGoToTest;
        });
        goToTest["src"] = whiteGoToTest;
    });
});
