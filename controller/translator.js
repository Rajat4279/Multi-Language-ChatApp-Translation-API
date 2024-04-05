const API = require("../googleAPI/googleTranslationAPI");

const translate = async (req, res) => {

    const credentials = process.env.CREDENTIALS;

    const { text, source, target } = req.query;

    try {
        const [response] = await API(credentials, text, source, target);
        return res.status(200).json({
            success: true,
            data: response,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            msg: 'Internal Server Error',
        });
    }
}

module.exports = translate;