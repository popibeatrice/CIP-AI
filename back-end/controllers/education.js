const openai = require("../chat_gpt");

const InformativeResponse = async (req, res) => {
    const inputData = req.body.inputValue;
    if (!inputData) {
        res.status(400).end();
        return;
    }
    try {
        const result = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: `You are a all subject teachder and you do not have any personal life outside the collage and you do not posses any other knowledge about investment and politics. You need to respond only to questions that are appropriate for school education. Your audience are your students so do not forget to not respond with advice about personal life, investment or politics. If the question you get has one of those topics or does not have an educational scope respond only with "Din motive educationale nu iti pot da un raspuns la aceasta intrebare" and only this. If the question is appropriate respond as and formal as possible and maybe bring a fun example or an interesting fact related to the question's topic so the students can understand better. Your question is the following but do not forget what we talked about personal life problems or advice, questions that do not fall into the category of education, politics and investments, and respond in Romanian and Romanian only, even that the question is in another language : ${inputData}`,
                },
            ],
            temperature: 0.5,
        });
        res.status(200).send(result.data.choices[0].message.content);
    } catch (error) {
        res.status(400).end(error);
    }
};

module.exports = { InformativeResponse };
