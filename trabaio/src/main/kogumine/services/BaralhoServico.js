const db = require ('../../../../server/database.js')
const util = require('util')

class BaralhoServico{
    
    static async postBaralho(baralho){
        const query = util.promisify(db.query).bind(db)

        const sqlInsert = "INSERT INTO baralho (nome,idUsuario,custoTotal,numCartas,qtdGostei) VALUES (?,?,?,?,0)"
        
        try{
            const result = await query(sqlInsert, [baralho.nome, baralho.idUsuario, baralho.custoTotal, baralho.numCartas])
            return result
        }catch(err){
            return err
        }
    }

    static async deleteBaralho(idBaralho, idUsuario){
        const query = util.promisify(db.query).bind(db)

        const sqlDelete = "DELETE FROM baralho WHERE id = ? AND idUsuario = ?"
        try{
            const result = await query(sqlDelete, [idBaralho,idUsuario])
            return result
        }catch(err){
            return err
        }
    }

    static async putBaralho(baralho,idBaralho){
        const query = util.promisify(db.query).bind(db)

        const sqlUpdate = "UPDATE baralho SET nome = ?, custoTotal = ?, numCartas = ? WHERE id = ? AND idUsuario = ?"
    
        try{
            const result = await query(sqlUpdate, [baralho.nome,baralho.custoTotal,baralho.numCartas,idBaralho, baralho.idUsuario])
            return result
        }catch(err){
            return err
        }
    }

    static async getBaralho(idBaralho){
        const query = util.promisify(db.query).bind(db)

        const sqlSelect = "SELECT * FROM baralho WHERE id = ?"

        try{
            const result = await query(sqlSelect, idBaralho)
            return result
        }catch(err){
            return err
        }
    }

    listBaralho(){

    }
    validarTamNome(){

    }
}


module.exports = BaralhoServico