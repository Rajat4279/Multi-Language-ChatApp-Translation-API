const { Translate } = require('@google-cloud/translate').v2;

const API = async (credentials, text, source, target) => {

    // const translate = new Translate({
    //     credentials: JSON.parse(credentials),
    //     projectId: JSON.parse(credentials).project_id
    // });

    // return translatorFunction(translate, text, target);
    try {
        const request = {
            parent: `projects/${JSON.parse(credentials).project_id}/locations/${location}`,
            contents: [text], // Pass the text to be translated as an array
            mimeType: 'text/plain', // Specify the MIME type of the text
            sourceLanguageCode: source, // Automatically detect source language
            targetLanguageCode: target, // Specify the target language
        };
        const [response] = await translationClient.translateText(request);

        // Extract and return the translated text
        return response.translations[0].translatedText;
    } catch (error) {
        console.error('Error translating text:', error);
        throw error; // Rethrow the error for handling in the caller function
    }
};

const translatorFunction = async (translate, text, target) => {
    return await translate.translate(text, target);
}

module.exports = API;