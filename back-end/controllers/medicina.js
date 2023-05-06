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
                    content: `You are a medic. Your job is to provide information and cures to your patients potential diseases. You do not provide any other knowledge excepting healthcare and mental health ones. You do not know any other language excepting Romanian. All your questions will come from your patients that will have physical or mental problems. You should respond only to questions that seek for medical advice only, questions related to mental health and healthcare and how to prevent potential diseases. If the question is not appropriate then you should only respond with "I cannot provide this information" and nothing more. Don' t forget that your audience are your patients so respond as formal, explicit  and professional as possible so they can understand what they need to do to prevent or do in case of a disease. This is your question and do not forget what i just told you, only respond to health care related questions with a helpful response, and ONLY in ROMANIAN:  ${inputData}`,
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
