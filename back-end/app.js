// const http = require("http");
// const PORT = 5000;
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const configuration = new Configuration({
    apiKey: ProcessingInstruction.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
async function runCompletion() {
    console.log("e bine");
    const completion = await openai.createCompletion({
        model: "gpt-3.5-turbo",
        prompt: "You are an all subject teacher and you do not have any personal life outside the collage and you do not posses any other knowledge about investment and politics. You need to respond only to questions that are appropriate for school education. Your audience are your students so do not forget to not respond with advice about personal life, investment or politics. If the question you get has one of those topics or does not have an educational scope respond only with `As a teacher I cannot provide this information` and only this. If the question is appropriate respond as compact and formal as possible and maybe bring a fun example or an interesting fact related to the question's topic so the students can understand better. Your question is the following but do not forget what we talked about personal life problems or advice, questions that do not fall into the category of education, politics and investments : what is an apple",
    });
    console.log(completion.data.choices[0].text);
}
runCompletion();
// app.listen(PORT,()=>{
//     console.log("server is on")
// })
