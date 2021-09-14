angular.module("listaTelefonica", []);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope) {
  $scope.app = "Lista Telefônica";
    $scope.contatos = [
        { nome: "Felipe", telefone: "33345065",cor:"blue"},
        { nome: "Pamela", telefone: "33345065",cor:"yellow"},
        { nome: "Alessandro" , telefone: "33345065",cor:"red"}
      ];
      $scope.operadoras = [
      {nome :"Vivo" ,codigo : 10, categoria:"chip"},
      {nome :"Oi Fibra" , codigo  : 20, categoria:"chip"},
      {nome :"GVT" , codigo : 30, categoria:"chip"},
      {nome :"Tim" , codigo : 40, categoria:"chip"},
      {nome :"Claro" , codigo : 40, categoria:"chip"}
      ];
    $scope.addContato = function (contato) {
    $scope.contatos.push(angular.copy(contato ));
      delete $scope.contato;
    };
$scope.apagarContatos = function(contatos){
  $scope.contatos = contatos.filter(function(contato){
    if (!contato.selecionado) return contato;
  });
};
  $scope.isContatoSelecionado = function(contatos) {
    return contatos.some(function(contato) {
      return contato.selecionado;
    });
 
  };
});
