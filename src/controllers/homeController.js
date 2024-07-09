exports.index = (req, res) => {
  res.render('index');
};


/* TESTAR BANCO - NECESSARIO EXPORTAR A MODEL HomeModel
const HomeModel = require('../models/homeModel')
HomeModel.create({
  titulo: 'nome',
  descricao: 'teste descr'
}).then(dados => console.log(dados)).catch(e => console.log(e))
*/