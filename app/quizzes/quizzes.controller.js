angular.module('app')
  .controller('QuizzesCtrl', QuizzesCtrl);

function QuizzesCtrl(Quizzes) {
  this.quizzes = Quizzes.quizzes; //array of quizzes from the service
}