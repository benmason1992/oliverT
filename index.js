const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000; //check enviroment variable first if not available then 5000





app.listen(PORT, () => console.log(`Server started on port ${PORT}`));