import "../styles/index.css";
import "../styles/art.css";
import sendBack from "../assets/back.png";

///configurations
// import { config } from "dotenv";
// config();

import { Configuration, OpenAIApi } from "openai";
const openai = new OpenAIApi(
    new Configuration({
        apiKey: "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",
    })
);

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

const CreateResponse = (res, input) => {
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
    const firstImg = document.createElement("img");
    firstImg.classList.add("w-32");
    const secondImg = document.createElement("img");
    secondImg.classList.add("w-32");
    const thirtImg = document.createElement("img");
    thirtImg.classList.add("w-32");
    firstImg["src"] = res.data[0].url;
    secondImg["src"] = res.data[1].url;
    thirtImg["src"] = res.data[2].url;
    container.appendChild(firstImg);
    container.appendChild(secondImg);
    container.appendChild(thirtImg);
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
        const response = await openai.createImage({
            prompt: `${input}`,
            n: 3,
            size: "256x256",
        });

        console.log(response);
        firstImg["src"] = response.data.data[0].url;
        secondImg["src"] = response.data.data[1].url;
        thirtImg["src"] = response.data.data[2].url;
        section.classList.remove("hidden");
        loading.classList.add("hidden");
    });
    section.appendChild(sendBackBtn);
    section.appendChild(container);
    section.appendChild(Regenbutton);
    body.appendChild(section);
    return Regenbutton;
};

///functionality
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputValue = form.education_input.value;
    cartonas.classList.add("hidden");
    introductiveText.classList.add("hidden");
    loading.classList.remove("hidden");
    openai
        .createImage({
            prompt: `${inputValue}`,
            n: 3,
            size: "256x256",
        })
        .then((result) => {
            console.log(result);
            console.log(result.data.data[0].url);
            loading.classList.add("hidden");
            CreateResponse(result.data, inputValue);
        });
    form.reset();
});

// implementation of chat gpt (front end)
