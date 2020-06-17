var express = require('express')
const axios = require('axios');
var router = express.Router()
const sql = require('../../server/bdd')

///////////////////////////////////////////////////
// CLIENT -> SERVEUR
///////////////////////////////////////////////////

router.post("/getClassement", (req, res) => {

    //demande le classement dans la BDD

    sql.request(`SELECT Classement from \`Foot\` WHERE id ='1'`).then(function (result){
        console.log("\nresult get classement brut =")
        console.log(result[0])

        let classement_parse = JSON.parse(result[0].Classement)

        console.log("\nclassement_parse =")
        console.log(classement_parse)


        res.json({"tableLigue1":classement_parse})
    })

});







module.exports = router