const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;


const userRouter = require('./src/routes/userRoutes');
const roleRoutes = require('./src/routes/roleRoutes');
const menuRoutes = require('./src/routes/menuRoutes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use('/users', userRouter);
app.use('/roles', roleRoutes);
app.use('/menus', menuRoutes)


app.listen(port, () => {
    console.log(`app is running on port no :  ${port}`);
});

//npm install nodemon bcryptjs cors dotenv express jsonwebtoken mysql