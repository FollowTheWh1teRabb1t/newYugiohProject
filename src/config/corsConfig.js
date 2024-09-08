const cors = require("cors");

const corsOptions = {
    origin: "https://yugioh-project.vercel.app",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

module.exports = cors(corsOptions)