const res = require('express/lib/response')
const db = require ('../../../../server/database')
const Usuario = require('../model/Usuario')
const UsuarioServico = require('../services/UsuarioServico')

class UsuarioController {
    Usuario
    UsuarioServico

    static postUsuario(req,res){
        const username = req.body.username
        const senha = req.body.senha
        const email = req.body.email

        const usuario = new Usuario(username,senha,email)

        UsuarioServico.cadastrarUsuario(usuario).then((result)=>{
            res.send(result)
        })
    }

    static deleteUsuario(req,res){
        const id = req.params.id
        
        UsuarioServico.deletarUsuario(id).then((result)=>{
            res.send(result)
        })
    }
    
    static listUsuario(req,res){
        UsuarioServico.listUsuario().then((result)=>{
            res.send(result)
        })
    }
    
    static getUsuario(req,res){
        const id = req.params.id
        UsuarioServico.getUsuario(id).then((result)=>{
            res.send(result)
        })
    }

    static putUsuario(req,res){
        const id = req.params.id
        const username = req.body.username
        const email = req.body.email
        const senha = req.body.senha

        const usuario = new Usuario(username,senha,email)

        UsuarioServico.putUsuario(usuario,id).then((result)=>{
            res.send(result)
        })
    }
}

module.exports = UsuarioController