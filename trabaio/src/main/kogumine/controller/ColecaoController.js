const db = require ('../../../../server/database')


class ColecaoController{
    Colecao
    ColecaoServico

    static listColecao(req,res){
        const sqlSelectAll = "SELECT * FROM colecao"
        db.query(sqlSelectAll, (err,result)=>{
            res.send(result)
        })
    }
    static adicionarCarta(req,res){
        const idColecao = req.params.idC
        const nomeCarta = req.body.nome
        const raridadeCarta = req.body.raridade
        const precoCarta = req.body.preco
        const idExterno = req.body.idExterno


        db.query("SELECT nome FROM carta WHERE nome = (?)",[nomeCarta],(err,resu)=>{
            if(err){console.log(err)}
            if(res == []){
                const sqlInsert = "INSERT INTO carta (nome,raridade,preco,idExterno) VALUE (?,?,?,?)"

                db.query(sqlInsert,[nomeCarta, raridadeCarta, precoCarta,idExterno],(err,result)=>{
                    if(err){console.log(err)}
                    const idCarta = result.insertId
                    db.query("INSERT INTO carta_colecao (idCarta,idColecao) VALUE (?,?)",[idCarta,idColecao],(err,resultado)=>{
                        if(err){console.log(err)}
                        res.send(resultado)
                    })
                })
            }
            const idCarta = resu.insertId
            db.query("INSERT INTO carta_colecao (idCarta,idColecao) VALUE (?,?)",[idCarta,idColecao],(err,result)=>{
                if(err){console.log(err)}
                res.send(result)
            })
        })


    }
    static removerCarta(req,res){
        const idColecao = req.params.idC
        const nomeCarta = req.body.nome
        const raridadeCarta = req.body.raridade
        const precoCarta = req.body.preco
        const idExterno = req.body.idExterno

        db.query("DELETE FROM colecao WHERE id = ?")

        
    }
}


module.exports = ColecaoController
