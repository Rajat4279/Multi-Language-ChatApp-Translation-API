const { Translate } = require('@google-cloud/translate').v2;

const API = async (credentials, text, target) => {

    try {
        const translate = new Translate({
            credentials: JSON.parse(credentials),
            projectId: JSON.parse(credentials).project_id
        });

        return translatorFunction(translate, text, target);
    } catch (error) {
        throw new Error("Error in translating the text.");
    }
};

const translatorFunction = async (translate, text, target) => {
    return await translate.translate(text, target);
}

module.exports = API;