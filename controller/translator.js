const API = require("../googleAPI/googleTranslationAPI");
const credentials = require("../cred.js");

const translate = async (req, res) => {

    // const credentials = process.env.CREDENTIALS;
    console.log(credentials);

    const { text, target } = req.query;

    try {
        const [response] = await API(credentials, text, target);
        return res.status(200).json({
            success:true,
            data:response,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success:false,
            msg: 'Internal Server Error',
        });
    }
}

module.exports = translate;