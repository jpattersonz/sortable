'use strict';

function App() {
  this.todos = [
    'Win the lottery',
    'Go sky diving',
    'Eat a gallon of ice cream',
    'Binge watch Game of Thrones',
    'Ride a lion',
    'Date a celebrity',
    'Build a Rube Goldberg machine',
    'Solve P = NP',
    'Create a sentient artifact',
    'Sleep'
  ];
}

App.prototype.toJson = angular.toJson;

angular.module('blvd').component('app', {
  controller: App,
  templateUrl: 'components/app/app.html'
});
