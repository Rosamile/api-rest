const express = require('express');
const app = express();
const port = 3000;
const routerApi = require('./routes');
const cors = require('cors');
const { logError, errorHandle, errorBoom } = require('./middleware/error.handler')


app.listen(port, () => {
  console.log('estoy corriendo' + port);
});


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('en puerto 3000');
});

app.get('/home', (req, res) => {
  res.send('home');
});

app.get('/nuevaruta', (req, res) => {
  res.send('nueva ruta');
});

app.use(logError);
app.use(errorHandle);
app.use(errorBoom);

routerApi(app);

