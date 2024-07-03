const express = require('express');
const app = express();
const routes = require('./route');
//incluir caminho absoluto dos arquivos
const path = require('path');

// Configuraçoes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs')


/* conexão */
app.listen(3000, () => {
    console.log('Escutando http://localhost:3000')
})

