angular.module("listaTelefonica", []);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope) {
  $scope.app = "Lista Telefônica";
    $scope.contatos = [
        { nome: "Felipe", telefone: "33345065" },
        { nome: "Pamela", telefone: "33345065" },
        { nome: "Alessandro", telefone: "33345065" },
      ];
    $scope.addContato = function (contato) {
      debugger
      $scope.contatos.push(contato);
      delete $scope.contato;
    };
  });
