angular
  .module('news')
  .filter('iAmGroot', function () {
    return function () {
      return 'I am Groot';
    };
  })
  .filter('relativeDate', function () {
    return function (date) {
      var relDate = date ? moment(date).fromNow() : 'Unknown';

      return relDate;
    };
  });

