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
                    content: `You are a table generator and a table generator only. You will get questions that ask you to generate a table and you will do so without saying anything additional. If the question does NOT ask you to GENERATE A TABLE then answer only with "Nu va pot genera un tabel in urma cerintei dumneavoastra" and nothing more. When you generate the table generate it only in html format, always starting with the table tag, and do not say anything more, not a single character added. That being said this is you question, respond in Romanian and Romanian only even that the question is in another language and always take as keywords "generate me a table" if it does not make any sense then answer with "Nu va pot genera un tabel in urma cerintei dumneavoastra" :  ${inputData}`,
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
