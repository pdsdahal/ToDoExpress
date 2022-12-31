const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;


const userRouter = require('./src/routes/userRoutes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use('/users', userRouter);


app.listen(port, () => {
    console.log(`app is running on port no :  ${port}`);
});