import "../styles/index.css";
import "../styles/tabelas.css";
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
    Regenbutton.addEventListener("click", () => {
        loading.classList.remove("hidden");
        section.classList.add("hidden");
        openai
            .createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "user",
                        content: `You are a table generator and a table generator only. You will get questions that ask you to generate a table and you will do so without saying anything additional. If the question does NOT ask you to GENERATE A TABLE then answer only with "Nu va pot genera un tabel in urma cerintei dumneavoastra" and nothing more. When you generate the table generate it only in html format, always starting with the table tag, and do not say anything more, not a single character added. That being said this is you question, respond in Romanian and Romanian only even that the question is in another language and always take as keywords "generate me a table" if it does not make any sense then answer with "Nu va pot genera un tabel in urma cerintei dumneavoastra" :  ${input}`,
                    },
                ],
                temperature: 0.5,
            })
            .then((result) => {
                Table.innerHTML = result.data.choices[0].message.content;
                section.classList.remove("hidden");
                loading.classList.add("hidden");
            });
    });
    section.appendChild(sendBackBtn);
    section.appendChild(Table);
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
        .createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: `You are a table generator and a table generator only. You will get questions that ask you to generate a table and you will do so without saying anything additional. If the question does NOT ask you to GENERATE A TABLE then answer only with "Nu va pot genera un tabel in urma cerintei dumneavoastra" and nothing more. When you generate the table generate it only in html format, always starting with the table tag, and do not say anything more, not a single character added. That being said this is you question, respond in Romanian and Romanian only even that the question is in another language and always take as keywords "generate me a table" if it does not make any sense then answer with "Nu va pot genera un tabel in urma cerintei dumneavoastra" : ${inputValue}`,
                },
            ],
            temperature: 0.5,
        })
        .then((result) => {
            console.log(result.data.choices[0].message.content);
            loading.classList.add("hidden");
            CreateResponse(result.data.choices[0].message.content, inputValue);
        });
    form.reset();
});

// implementation of chat gpt (front end)
