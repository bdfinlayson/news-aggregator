angular
  .module('news')
  .controller('NewArticleCtrl', NewArticleCtrl);

function NewArticleCtrl($http, $location) {
  var vm = this;

  vm.newArticle = {};

  vm.submit = function () {
    $http
    .post('https://news-aggregator.firebaseio.com/articles.json', vm.newArticle)
    .success(function () {
      $location.path('/');
    });
  }
}
