const express = require('express');

const app = express();

app.use(express.static('public'));

const port = 80;
app.listen(port, () => {
 console.log(`Server is running at http://localhost:${port}`);
});