//programacion funcional

//1. crear un objeto express

const express= require('express');

//2. crear un objeto que represente nuestra aplicacion

const app=express();
app.use(express.json());

//configuracion de cors
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","POST");
    res.header("Access-Control-Allow-Headers", "Content-type");
    next();
}
);

//3. crear un servicio para escuchar peticiones

app.listen(3000,
    ()=>{
        console.log("Servidor ejecutandose en el puerto 3000");
    }
    );

    app.post(
        '/api/sumar',
        //se requieren dos objetos: uno representando la peticion
        //un objeto representando la respuesta
        (req, res)=>{
            // to do: aqui va el procesamiento de la peticion a esta ruta
            const {numero_1, numero_2}=req.body;
            const resultado=parseFloat(numero_1)+parseFloat(numero_2);
            res.json(resultado);
        }

    );

    app.post(
        '/api/restar',
        (req,res)=>{
            /*
            const n1=req.body.numero_1;
            const n2=req.body.numero_2;
            const resultado=n1-n2;
            */
            const {numero_1, numero_2}=req.body;
            const resultado=parseFloat(numero_1)-parseFloat(numero_2);
            res.json(resultado);
        }
    );

    app.post(
        '/api/dividir',
        (req,res)=>{
           
            const {numero_1, numero_2}=req.body;
            const resultado=parseFloat(numero_1)/parseFloat(numero_2);
            res.json(resultado);
        }
    );

    app.post(
        '/api/multiplicar',
        (req,res)=>{
           
            const {numero_1, numero_2}=req.body;
            const resultado=parseFloat(numero_1)*parseFloat(numero_2);
            res.json(resultado);
        }
    );