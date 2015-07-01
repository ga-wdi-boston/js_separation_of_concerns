'use strict';

var $ = require('jquery');
var data = require('./model');
var helper = require('./helper')

var buttonHandler = function (event) {
  event.preventDefault();
  helper.addToList(data.$list);
};

var changeHeading = function () {
  $('#name').html(data.$name);
}();

data.$button.on('click', buttonHandler);
