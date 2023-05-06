const openai = require("../chat_gpt");

const InformativeResponse = async (req, res) => {
    const inputData = req.body.inputValue;
    if (!inputData) {
        res.status(400).end();
        return;
    }
    const result = await openai
        .createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: `you are a professional translator. You will only respond in English. if the prompt is already in English your need to only respond with the same prompt, if it s in Romanian or any other language do respond with nothing more than the translation and translation only, not even a character. Translate this but do not forget what i told you earlier:${inputData}`,
                },
            ],
            temperature: 0.5,
        })
        .catch((error) => {
            res.status(400).end();
            return;
        });
    const translation = result.data.choices[0].message.content;
    console.log(translation);
    const Photoresult = await openai
        .createImage({
            prompt: `${translation}`,
            n: 3,
            size: "512x512",
        })
        .catch((error) => {
            res.status(400).end();
            return;
        });
    if (!Photoresult) {
        res.status(400).end();
    } else res.status(200).send(Photoresult.data);
};

module.exports = { InformativeResponse };
