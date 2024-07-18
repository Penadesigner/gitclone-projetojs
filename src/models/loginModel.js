const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async login(){
    this.valida();
    if(this.errors.length > 0) return;
    this.user = await LoginModel.findOne({ email: this.body.email });

    // verifica a existencia do usuario
    if(!this.user){
      this.errors.push("Usuario não existe");
      return;
    }

    //valida se a senha esta correta
    if(!bcryptjs.compareSync(this.body.password, this.user.password)){
      this.errors.push("Senha Incorreta");
      return;
    }
  }

  async userExist(){
    // Verificar se o email já está registrado
    this.user = await LoginModel.findOne({ email: this.body.email });
    if(this.user) {
      this.errors.push('E-mail já registrado.');
    }
  }

async register() {
  this.valida();
  if(this.errors.length > 0) return;

  await this.userExist();
    //CRIPTOGRAFIA DE SENHA e criação do usuario
    const salt = bcryptjs.genSaltSync();
    this.body.password = bcryptjs.hashSync(this.body.password, salt);
    this.user = await LoginModel.create(this.body);
}

valida() {
  // manda os campos no formato string
  this.cleanUp();

  // Validação
  // O e-mail precisa ser válido
  if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');

  // A senha precisa ter entre 3 e 50
  if(this.body.password.length < 3 || this.body.password.length > 50) {
    this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');
  }

  // A senha precisa ter letra maiuscula
  if(!/[A-Z]/.test(this.body.password)) {
    this.errors.push('A senha precisa ter pelo menos uma letra maiúscula.');
  }

  // A senha precisa ter numeros
  if(!/[0-9]/.test(this.body.password)) {
    this.errors.push('A senha precisa ter pelo menos um número.');
  }
}

cleanUp() {
  // verifica se os campos do body {key}, são do tipo string, e se não forem ele mesmo converte pra string vazia. {key} retorna os nomes dos campos.
  for(const key in this.body) {
    if(typeof this.body[key] !== 'string') {
      this.body[key] = '';
    }
  }
    this.body = {
      email: this.body.email,
      password: this.body.password
    };
  }
}

module.exports = Login;