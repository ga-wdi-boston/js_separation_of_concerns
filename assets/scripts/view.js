'use strict';

var $ = require('jquery');
var data = require('./model');
console.log('data is ', data);
var helper = require('./helper')

var buttonHandler = function (event) {
  event.preventDefault();
  helper.addToList(data.$list);
};
var changeHeading = function () {
  $('#name').html(data.$name);
};

$(document).ready(function() {
  changeHeading();
  data.$button.on('click', buttonHandler);
});
