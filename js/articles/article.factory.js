angular
  .module('news')
  .factory('articleFactory', articleFactory);

//var fb = 'https://news-aggregator.firebaseio.com/'

function articleFactory($http) {
	var articles = {};

	articles.findAll = function (cb) {
		$http
		  .get('https://news-aggregator.firebaseio.com/' + '.json')
		  .success(function (data) {
		  	cb (data);
		  });
	};
	return articles;
};