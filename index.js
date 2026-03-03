import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

dotenv.config();

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 8001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, HOST, () => console.log(`Zipper server up and running @ http://${HOST}:${PORT}`));
