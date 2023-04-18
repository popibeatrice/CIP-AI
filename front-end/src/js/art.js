import "../styles/index.css";
import "../styles/art.css";
import sendBack from "../assets/back.png";
import downloadImage from "../assets/download.png";
const axios = require("axios");

///configurations
// import { config } from "dotenv";
// config();

import { Configuration, OpenAIApi } from "openai";
const PhotoGenerator = new OpenAIApi(
    new Configuration({
        apiKey: "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",
    })
);
const Translation = new OpenAIApi(
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

const result = async (file_path) => {
    await axios({
        url: `${file_path}`,
        method: "GET",
        responseType: "blob",
    });
};

const CreateResponse = async (res, input) => {
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
            const imgload1 = new Image();
            imgload1.onload = function () {
                secondImg.src = this.src;
                resolve();
            };
            imgload1.src = `${res.data[1].url}`;
            download2.href = `${res.data[1].url}`;
            download2.download = `${res.data[1].url}`;
        } catch (error) {
            reject(error);
        }
    });
    let promise3 = new Promise(function (resolve, reject) {
        try {
            const imgload1 = new Image();
            imgload1.onload = function () {
                thirdImg.src = this.src;
                resolve();
            };
            imgload1.src = `${res.data[2].url}`;
            result(`${res.data[2].url}`).then((cred) => {
                download3.href = window.URL.createObjectURL(
                    new Blob([cred.data])
                );
            });
        } catch (error) {
            reject(error);
        }
    });
    await Promise.all([promise1, promise2, promise3]);
    container.appendChild(container1);
    container.appendChild(container2);
    container.appendChild(container3);
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
        const response = await PhotoGenerator.createImage({
            prompt: `${input}`,
            n: 3,
            size: "512x512",
        });

        console.log(response);
        firstImg["src"] = response.data.data[0].url;
        secondImg["src"] = response.data.data[1].url;
        thirdImg["src"] = response.data.data[2].url;
        section.classList.remove("hidden");
        loading.classList.add("hidden");
    });
    section.appendChild(sendBackBtn);
    section.appendChild(container);
    section.appendChild(Regenbutton);
    body.appendChild(section);
    loading.classList.add("hidden");
};

///functionality
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let inputValue = form.education_input.value;
    cartonas.classList.add("hidden");
    introductiveText.classList.add("hidden");
    loading.classList.remove("hidden");
    const englishPrompt = await Translation.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user",
                content: `Translate this in english and do not respond with nothing more than the translation and translation only, not enev a character: ${inputValue}`,
            },
        ],
        temperature: 0.5,
    });
    console.log(englishPrompt.data.choices[0].message.content);
    PhotoGenerator.createImage({
        prompt: `${englishPrompt.data.choices[0].message.content}`,
        n: 3,
        size: "512x512",
    }).then((result) => {
        console.log(result);
        console.log(result.data.data[0].url);
        CreateResponse(
            result.data,
            englishPrompt.data.choices[0].message.content
        );
    });
    form.reset();
});

// implementation of chat gpt (front end)
