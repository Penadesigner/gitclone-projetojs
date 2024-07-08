const HomeModel = require('../models/homeModel')

HomeModel.create({
  titulo: 'teste',
  descricao: 'teste descricao'
}).then(dados => console.log(dados))
.catch(e => console.log(e))


exports.paginaInicial = (req, res) => {
    res.render('index');
  };
  
  exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST.');
  };