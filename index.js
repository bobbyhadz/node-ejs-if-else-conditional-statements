// Node & Express: EJS If-Else conditional statements

// Using ES6 modules import/export syntax
import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(
  '/static',
  express.static(path.join(__dirname, 'public')),
);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'bobbyhadz.com',
    message: 'Example message: bobbyhadz.com',
    salary: 500,
  });
});

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
