var http = require('http');
const contatos = [
        {id: 1 ,nome: "Macelo", telefone: 11110000, data: new Date(), operadora: { nome: "Vivo", codigo: 10, categoria: "chip", preco: 2 }},
]
const operadoras = [
        { nome: "Vivo", codigo: 10, categoria: "chip", preco: 2 },
        { nome: "Oi ", codigo: 20, categoria: "chip", preco: 2 },
        { nome: "GVT", codigo: 30, categoria: "chip", preco: 2 },
        { nome: "Tim", codigo: 40, categoria: "chip", preco: 2 },
        { nome: "Claro", codigo: 40, categoria: "chip", preco: 2 },
      ]
http.createServer(function (req, res) {
        res.setHeader('Access-Control-allow-Origin', '*')
       if(req.url === "/contatos") res.write(JSON.stringify(contatos));
       if(req.url === "/operadoras") res.write(JSON.stringify(operadoras));
        res.end();

}).listen(3412);