const express = require('express');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', eventRoutes);

app.listen(3030, () => {
    console.log("listening...");
});