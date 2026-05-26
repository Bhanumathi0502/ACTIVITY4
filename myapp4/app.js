const express = require('express');
const app = express();
const port = 3000;

const things = require('./things');

app.use('/things', things);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});