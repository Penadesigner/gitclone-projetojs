const mongoose = require('mongoose');
const validator = require('validator');

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  senha: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

async register() {
  this.valida();
  if(this.errors.length > 0) 
    return;
}

valida() {
  this.cleanUp();
  // se o e-mail for invalido ele adiciona ao array de erros o erro a baixo.
  if(!validator.isEmail(this.body.email)) this.errors.push('E-mail invalido');

  if(this.body.password.length < 3 || this.body.password.length > 50) {
    this.errors.push('A senha precisa ter entre 3 a 50 caracteres');
  }
}

cleanUp() {
  for(const key in this.body) {
    if(typeof this.body[key] !== 'string') {
      this.body[key] = '';
    }
  }

    this.body = {
      email: this.body.email,
      pasword: this.body.pasword
    };
  }
}

module.exports = Login;