import "../styles/index.css";
import "../styles/art.css";
import sendBack from "../assets/back.png";
import downloadImage from "../assets/download.png";
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

const CreateResponse = async (res) => {
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

    const container = document.createElement("div");
    container.classList.add("flex", "gap-10", "flex-col", "md:flex-row");
    const container1 = document.createElement("div");
    const container2 = document.createElement("div");
    const container3 = document.createElement("div");

    const download1 = document.createElement("a");
    download1.classList.add("absolute", "z-30", "hidden", "cursour-pointer");
    const imgDownload1 = document.createElement("img");
    imgDownload1["src"] = downloadImage;
    imgDownload1.classList.add("w-14");
    download1.appendChild(imgDownload1);
    const download2 = document.createElement("a");
    download2.classList.add("absolute", "z-30", "hidden", "cursour-pointer");
    const imgDownload2 = document.createElement("img");
    imgDownload2["src"] = downloadImage;
    imgDownload2.classList.add("w-14");
    download2.appendChild(imgDownload2);
    const download3 = document.createElement("a");
    download3.classList.add("absolute", "z-30", "hidden", "cursour-pointer");
    const imgDownload3 = document.createElement("img");
    imgDownload3["src"] = downloadImage;
    imgDownload3.classList.add("w-14");
    download3.appendChild(imgDownload3);

    const firstImg = document.createElement("img");
    container1.appendChild(firstImg);
    container1.classList.add(
        "border-2",
        "border-pink-400",
        "relative",
        "flex",
        "items-center",
        "justify-center"
    );
    firstImg.classList.add("duration-300", "relative");
    container1.appendChild(download1);

    firstImg.addEventListener("mouseover", () => {
        firstImg.classList.add("opacity-40");
        download1.classList.remove("hidden");
    });
    firstImg.addEventListener("mouseout", () => {
        firstImg.classList.remove("opacity-40");
        download1.classList.add("hidden");
    });

    const secondImg = document.createElement("img");
    container2.appendChild(secondImg);
    container2.classList.add(
        "border-2",
        "border-pink-400",
        "relative",
        "flex",
        "items-center",
        "justify-center"
    );
    secondImg.classList.add("duration-300", "relative");
    container2.appendChild(download2);

    secondImg.addEventListener("mouseover", () => {
        secondImg.classList.add("opacity-40");
        download2.classList.remove("hidden");
    });
    secondImg.addEventListener("mouseout", () => {
        secondImg.classList.remove("opacity-40");
        download2.classList.add("hidden");
    });

    const thirdImg = document.createElement("img");
    container3.appendChild(thirdImg);
    container3.classList.add(
        "border-2",
        "border-pink-400",
        "relative",
        "flex",
        "items-center",
        "justify-center"
    );
    thirdImg.classList.add("duration-300", "relative");
    container3.appendChild(download3);

    thirdImg.addEventListener("mouseover", () => {
        thirdImg.classList.add("opacity-40");
        download3.classList.remove("hidden");
    });
    thirdImg.addEventListener("mouseout", () => {
        thirdImg.classList.remove("opacity-40");
        download3.classList.add("hidden");
    });

    let promise1 = new Promise(function (resolve, reject) {
        try {
            const imgload1 = new Image();
            imgload1.onload = function () {
                firstImg.src = this.src;
                resolve();
            };
            imgload1.src = `${res.data[0].url}`;
            download1.href = `${res.data[0].url}`;
            download1.download = `${res.data[0].url}`;
        } catch (error) {
            reject(error);
        }
    });
    let promise2 = new Promise(function (resolve, reject) {
        try {
            const imgload2 = new Image();
            imgload2.onload = function () {
                secondImg.src = this.src;
                resolve();
            };
            imgload2.src = `${res.data[1].url}`;
            download2.href = `${res.data[1].url}`;
            download2.download = `${res.data[1].url}`;
        } catch (error) {
            reject(error);
        }
    });
    let promise3 = new Promise(function (resolve, reject) {
        try {
            const imgload3 = new Image();
            imgload3.onload = function () {
                thirdImg.src = this.src;
                resolve();
            };
            imgload3.src = `${res.data[2].url}`;
            download3.href = `${res.data[2].url}`;
            download3.download = `${res.data[2].url}`;
        } catch (error) {
            reject(error);
        }
    });
    await Promise.all([promise1, promise2, promise3]);
    container.appendChild(container1);
    container.appendChild(container2);
    container.appendChild(container3);
    section.appendChild(sendBackBtn);
    section.appendChild(container);
    body.appendChild(section);
    loading.classList.add("hidden");
};

///functionality
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        cartonas.classList.add("hidden");
        introductiveText.classList.add("hidden");
        loading.classList.remove("hidden");
        const response = await axios.post("/arta", {
            inputValue: form.art_input.value,
        });
        console.log(response);
        CreateResponse(response.data);
    } catch (error) {
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
