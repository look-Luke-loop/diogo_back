
const UserModel = require('../models/Users')
const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/crud")

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão com o banco de dados:'));
db.once('open', () => {
    console.log('Conexão com o banco de dados estabelecida!');
});


const controllerUser = {

    getall:(req, res) => {
        UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
    },


    get:(req,res) => {
        const id = req.params.id;
        UserModel.findById({_id:id})
        .then(users => res.json(users))
        .catch(err => res.json(err))
    },

    post:(req, res) => {
        UserModel.create(req.body)
        .then(users => req.json(users))
        .catch (err => res.json(err))
    },

    put:(req,res) => {
        const id = req.params.id;
        UserModel.findByIdAndUpdate({_id:id},
            {   
                nome: req.body.nome, 
                email: req.body.email,
                idade: req.body.idade
            })
        .then(users => req.json(users))
        .catch (err => res.json(err))
    },

    delete:(req,res) => {
        const id = req.params.id;
        UserModel.findByIdAndDelete({_id:id})
        .then(users => req.json(users))
        .catch (err => res.json(err))
    
    }

}

module.exports = controllerUser;
