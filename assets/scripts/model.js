'use strict';

var $ = require('jquery');

var queryDom = function () {
  var yourName = prompt('What is your name?');
  var $thingList = $('#fav-list');
  var $button = $('#new-thing-button');

  return {
    $name: yourName,
    $list: $thingList,
    $button: $button
  };
};

module.exports = queryDom();
