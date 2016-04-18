angular.module('app')
  .service('Quizzes', Quizzes);

function Quizzes($state) {
  var vm = this;

  /**
   * Main Quiz storage.
   * 
   * @type {Array}
   */
  this.quizzes = [{
    title: 'Spelling Quiz',
    questions: []
  }];

  /**
   * Add a quiz to quiz storage.
   * 
   * @param quiz
   */
  this.addQuiz = function (quiz) {
    quiz.questions = [];
    vm.quizzes.push(quiz);         
    $state.go('quizzes');
  };
}
