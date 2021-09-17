const router = require('./router');

const app = router(3412);

const operadoras = [
  { nome: "Vivo", codigo: 10, categoria: "chip", preco: 2 },
  { nome: "Oi ", codigo: 20, categoria: "chip", preco: 2 },
  { nome: "GVT", codigo: 30, categoria: "chip", preco: 2 },
];

var contatos = [
  { id: 1,nome: "Macelo",telefone: '1111-0000',data: new Date(),operadora: { nome: "Vivo", codigo: 10, categoria: "chip", preco: 2 }},
  { id: 2,nome: "Bruno",telefone: '1111-0000',data: new Date(),operadora: { nome: "Vivo", codigo: 10, categoria: "chip", preco: 2 }},
  { id: 3,nome: "Thiago",telefone: '1111-0000',data: new Date(),operadora: { nome: "Vivo", codigo: 10, categoria: "chip", preco: 2 }}
];
app.interceptor(function (req, res , next) {
  console.log('ola')
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.interceptor(function (req, res , next) {
  res.setHeader('Content-Type','application/json;charset=utf=8');
  next();
});

app.get('/operadoras',function (req,res) {
        res.write(JSON.stringify(operadoras));
        res.end();
});

app.get('/contatos',function (req,res) {
        res.write(JSON.stringify(contatos));
        res.end();
}); 

app.post('/contatos',function (req,res){
  contatos.push(req.body)
  res.end();
});