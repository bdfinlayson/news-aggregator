angular
  .module('news')
  .controller('ArticleTableCtrl', ArticleTableCtrl);

function ArticleTableCtrl(articleFactory) {
  var vm = this;

  articleFactory.findAll(function (articles) {

  	  vm.data = articles;
  });
};
