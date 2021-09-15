angular.module("listaTelefonica", ["ngMessages"]);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope) {
  $scope.app = "Lista Telefônica";
    $scope.contatos = [
        { nome: "Felipe", telefone: "3334-5065",data:new Date(), operadora:{nome :"Vivo" , codigo : 10, categoria:"chip"}, cor:"blue"},
        { nome: "Pamela", telefone: "4002-8922",data:new Date(),operadora:{nome :"Vivo" , codigo : 10, categoria:"chip"},cor:"yellow"},
        { nome: "Alessandro" , telefone: "3334-5065",data:new Date(),operadora:{nome :"Tim" , codigo : 10, categoria:"chip"},cor:"red"}
      ];
      $scope.operadoras = [
      {nome :"Vivo" , codigo : 10, categoria:"chip",cor:"red"},
      {nome :"Oi "  , codigo : 20, categoria:"chip"},
      {nome :"GVT"  , codigo : 30, categoria:"chip"},
      {nome :"Tim"  , codigo : 40, categoria:"chip"},
      {nome :"Claro", codigo : 40, categoria:"chip"}
      ];
    $scope.addContato = function (contato) {
    $scope.contatos.push(angular.copy(contato ));
      delete $scope.contato;
      $scope.contatoForm.$setPristine()

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
 $scope.ordenarPor = function (campo) {
  $scope.criterioDeOrdenacao  = campo;
  $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
 }
  };
});
