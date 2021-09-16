angular.module("listaTelefonica",["ngMessages"]);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http) {
    $scope.app = "Lista Telefônica";
    $scope.contatos = [];
    $scope.operadoras = [
      { nome: "Vivo", codigo: 10, categoria: "chip", preco: 2 },
      { nome: "Oi ", codigo: 20, categoria: "chip", preco: 2 },
      { nome: "GVT", codigo: 30, categoria: "chip", preco: 2 },
      { nome: "Tim", codigo: 40, categoria: "chip", preco: 2 },
      { nome: "Claro", codigo: 40, categoria: "chip", preco: 2 },
    ];

    var carregarContatos = function () {
      $http.get("http://localhost:3412/contatos").then(function (data, status) {
        //deu sucesso
        $scope.contatos = data;
        }).catch(function (data,status) {
          $scope.message = "Aconteceu um problema:" + data;
          //deu erro
        });
      };
      var carregarOperadoras = function () {
        $http.get("http://localhost:3412/operadoras").then(function (data) {
          $scope.operadoras = data;
          });
        };
    $scope.addContato = function (contato) {
      contato.data = new Date()
      $http.post("http://localhost:3412/contatos", contato).then(function (data) {
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      carregarContatos();
      });
    };
    $scope.apagarContatos = function (contatos) {
      $scope.contatos = contatos.filter(function (contato) {
        if (!contato.selecionado) return contato;
      });
    };
    $scope.isContatoSelecionado = function (contatos) {
      return contatos.some(function (contato) {
        return contato.selecionado;
      });
    };
    $scope.ordenarPor = function (campo) {
      $scope.criterioDeOrdenacao = campo;
      $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
    carregarContatos();
    carregarOperadoras();

  });

// ||||||||||||||||||||||-----Footer-----|||||||||||||||||| //

angular.module("listaTelefonica").controller("footer", function ($scope) {
  $scope.laranja = new Date();
});
 