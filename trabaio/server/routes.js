const express = require ('express')
const UsuarioController = require ('../src/main/kogumine/controller/UsuarioController')
const ColecaoController = require ('../src/main/kogumine/controller/ColecaoController')
const BaralhoController = require ('../src/main/kogumine/controller/BaralhoController')

const router = express.Router()


router.get("/", (req, res)=>{
    res.send("hello gsus")
})
// usuario //
router.post("/usuarios", UsuarioController.postUsuario)
router.delete("/usuarios/:id", UsuarioController.deleteUsuario)
router.get("/usuarios", UsuarioController.listUsuario)
router.get("/usuarios/:id", UsuarioController.getUsuario)
router.put("/usuarios/:id", UsuarioController.putUsuario)

// colecao //

// router.get("/usuarios/:id/colecao", ColecaoController.listColecao)
router.get("/usuarios/colecao", ColecaoController.listColecao)


// baralho //

router.post("/usuarios/:id/baralho", BaralhoController.postBaralho)
router.delete("/usuarios/:id/baralho/:idB", BaralhoController.deleteBaralho)
router.get("/baralho/:idB", BaralhoController.getBaralho)
router.put("/usuarios/:id/editBaralho/:idB",BaralhoController.putBaralho)

router.put("/usuarios/:id/baralho/:idG/add", BaralhoController.adicionarGostei)
router.put("/usuarios/:id/baralho/:idG/rem", BaralhoController.removerGostei)




module.exports = router