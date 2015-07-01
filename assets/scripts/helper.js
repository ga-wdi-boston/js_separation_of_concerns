'use strict';

var $ = require('jquery');

module.exports.addToList = function(list) {
  var $newLi = $('<li>');
  var $newItemText = $('#new-thing');

  $newLi.html($newItemText.val());
  $newItemText.val('');

  if ($newLi.html() !== '') {
    list.append($newLi);
  }
};
