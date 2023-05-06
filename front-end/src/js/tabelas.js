import "../styles/index.css";
import "../styles/tabelas.css";
import sendBack from "../assets/back.png";
const axios = require("axios");

const popCont = document.querySelector("#popup");
const Popup = `
	<div class="rectangle fixed z-30 right-0 bottom-10">
		<div class="notification-text">
			<div class="material-icons text-2xl mr-2">&#9432;</div>
			<span id = "popAddText"></span>
		</div>
	</div>
`;
///variables
const form = document.querySelector("form");
const body = document.querySelector("body");
const cartonas = document.querySelector("#cartonas");
const loading = document.createElement("div");
const introductiveText = document.querySelector("#introductive_text");
loading.setAttribute("id", "loading");
loading.classList.add("loading-dot");
body.appendChild(loading);
loading.classList.add("hidden");

//functions

const CreateResponse = (res) => {
    const section = document.createElement("section");
    section.classList.add(
        "relative",
        "m-6",
        "flex",
        "max-w-3xl",
        "flex-col",
        "items-center",
        "justify-center",
        "gap-10",
        "rounded-lg",
        "bg-gray-200",
        "p-10",
        "text-lg",
        "text-zinc-900",
        "shadow-md",
        "shadow-pink-400",
        "sm:p-20"
    );
    const img = document.createElement("img");
    img.classList.add("absolute", "top-5", "left-5", "w-8");
    const sendBackBtn = document.createElement("button");
    img["src"] = sendBack;
    img.setAttribute("id", "send_back");
    sendBackBtn.appendChild(img);
    sendBackBtn.addEventListener("click", () => {
        section.classList.add("hidden");
        cartonas.classList.remove("hidden");
        introductiveText.classList.remove("hidden");
    });
    const Table = document.createElement("div");
    Table.classList.add(
        "max-h-[200px]",
        "w-[50vw]",
        "max-w-2xl",
        "overflow-x-scroll",
        "overflow-y-scroll"
    );
    Table.innerHTML = res;
    const Regenbutton = document.createElement("button");
    Regenbutton.textContent = "Regenereaza raspunsul";
    Regenbutton.classList.add(
        "cursor-pointer",
        "rounded-md",
        "border-2",
        "border-pink-400",
        "py-1",
        "px-2",
        "font-semibold",
        "text-pink-400",
        "duration-300",
        "hover:bg-pink-400",
        "hover:text-gray-200"
    );
    Regenbutton.setAttribute("id", "regenereaza_btn");
    Regenbutton.type = "button";
    Regenbutton.addEventListener("click", async () => {
        loading.classList.remove("hidden");
        section.classList.add("hidden");
        try {
            const response = await axios.post("/tabel", {
                inputValue: form.tabelas_input.value,
            });
            Table.innerHTML = response.data;
            section.classList.remove("hidden");
            loading.classList.add("hidden");
        } catch (error) {
            console.log(error);
        }
    });
    section.appendChild(sendBackBtn);
    section.appendChild(Table);
    section.appendChild(Regenbutton);
    body.appendChild(section);
    return Regenbutton;
};

///functionality
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    cartonas.classList.add("hidden");
    introductiveText.classList.add("hidden");
    loading.classList.remove("hidden");
    try {
        const response = await axios.post("/tabel", {
            inputValue: form.tabelas_input.value,
        });
        loading.classList.add("hidden");
        CreateResponse(response.data);
    } catch (error) {
        console.log(error);
        cartonas.classList.remove("hidden");
        introductiveText.classList.remove("hidden");
        loading.classList.add("hidden");
        console.log(error);
        console.log("hello");
        loading.classList.add("hidden");
        popCont.innerHTML = Popup;
        const popColor = document.querySelector(".rectangle");
        popColor.style.backgroundColor = "red";
        popCont.style.opacity = "0.8";
        const Text = document.querySelector("#popAddText");
        Text.textContent = "Va rugam sa reincercati in 2 minute";
        popCont.classList.add("duration-500");
        setTimeout(() => {
            popCont.style.opacity = ".6";
        }, 2000);
        setTimeout(() => {
            popCont.style.opacity = ".4";
        }, 2100);
        setTimeout(() => {
            popCont.style.opacity = ".2";
        }, 2200);
        setTimeout(() => {
            popCont.style.opacity = "0";
        }, 2300);
    }
});

const blob = document.getElementById("blob");
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
