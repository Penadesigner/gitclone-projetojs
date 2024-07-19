const Login = require('../models/loginModel')

exports.index = (req, res) => {
    res.render('login');
};

<<<<<<< HEAD
exports.register = (req, res) => {
  const login = new Login(req.body)
  res.send(login.body);
=======
exports.register = async function(req, res) {
  try {
    const login = new Login(req.body);
    await login.register();
    
    //mensagem de erro ao tentar criar usuario.
    if(login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function() {
        return res.redirect('back');
      });
      return;
    }

    //mensagem de sucesso ao criar usuario.
    req.flash('success', 'Seu usuário foi criado com sucesso.');
    req.session.save(function() {
      return res.redirect('back');
    });
  } catch(e) {
    console.log(e);
    return res.render('404');
  }
};


exports.login = async function(req, res) {
  try {
    const login = new Login(req.body);
    await login.login();

    //se der erro no login
    if(login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function() {
        return res.redirect('back');
      });
      return;
    }

    //mensagem de sucesso ao logar
    req.flash('success', 'Logado com sucesso.');
    req.session.save(function() {
      return res.redirect('back');
    });
  } catch(e) {
    console.log(e);
    return res.render('404');
  }
>>>>>>> 7f30c1e5e2b4fd40c32dc8a222541924903f6c80
};