import express from 'express';
import config from './config.js';
import serverRender from './ServerRender';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const initialContent = serverRender();
    res.render('index', { initialContent });
});

app.listen(config.port,
    () => console.log(`listening on Port:${config.port}`));
