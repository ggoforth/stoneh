angular.module('app')
  .controller('AddQuizCtrl', AddQuizCtrl);

function AddQuizCtrl(Quizzes) {
  this.addQuiz = Quizzes.addQuiz;
}