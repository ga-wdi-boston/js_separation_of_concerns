'use strict';

var $ = require('jquery');

var queryDom = function () {
  var $newLi = $('<li>');
  var $newItemText = $('#new-thing');

  return {
    $newLi: $newLi,
    $newLiText: $newItemText
  };
};

$(document).ready(function () {
  module.exports = queryDom();

  module.exports.addToList = function(list) {
    this.$newLi.html(this.$newLiText.val());
    this.$newLiText.val('');

    if (this.$newLi.html() !== '') {
      list.append(this.$newLi);
    }
  };
});


