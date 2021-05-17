
const express = require('express');
const app = express();
const uri = "mongodb+srv://fabioventurini:ciaopimpa@cluster0.zx7mf.mongodb.net/Cluster0?retryWrites=true&w=majority"
const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb

/* GET users listing. */




app.get('/', function (req, res, next) {

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("adottamy").collection("animals"); //Mi connetto alla collection movies
        // perform actions on the collection object
        collection.find().limit(20).toArray((err, result) => {
           
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else console.log(result);
            res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback
    });

});
app.get('/taglia/:taglia', function (req, res, next) {
  
    const t = req.params.taglia;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("adottamy").collection("animals"); //Mi connetto alla collection movies
        console.log("prova");
        // perform actions on the collection object
        collection.find({'taglia': t}).limit(29).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else console.log(result);

            res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });

});
app.get('/sesso/:sesso', function (req, res, next) {
  
    const s = req.params.sesso;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("adottamy").collection("animals"); //Mi connetto alla collection movies
        console.log("prova");
        // perform actions on the collection object
        collection.find({'sesso': s}).limit(29).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else console.log(result);

            res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });

});
app.get('/pelo/:pelo', function (req, res, next) {
  
    const p = req.params.pelo;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("adottamy").collection("animals"); //Mi connetto alla collection movies
        console.log("prova");
        // perform actions on the collection object
        collection.find({'pelo': p}).limit(29).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else console.log(result);

            res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });

});
app.get('/sterilizzato/:sterilizzato', function (req, res, next) {
  
    const st = req.params.sterilizzato;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("adottamy").collection("animals"); //Mi connetto alla collection movies
        console.log("prova");
        // perform actions on the collection object
        collection.find({'sterilizzato': st}).limit(29).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else console.log(result);

            res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });

});
app.get('/nome/:nome', function (req, res, next) {
  
    const n = req.params.nome;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("adottamy").collection("animals"); //Mi connetto alla collection movies
        console.log("prova");
        // perform actions on the collection object
        collection.find({'nome': n}).limit(29).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else console.log(result);

            res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });

});

app.listen(3000, () => { console.log('Example app listening on port 3000!'); });


