angular.module('app', ['ui.router'])
  .controller('AppCtrl', AppCtrl)
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/quizzes');
    
    $stateProvider
      .state('quizzes', {
        url: '/quizzes',
        templateUrl: './app/quizzes/quiz-list.html',
        controller: 'QuizzesCtrl',
        controllerAs: 'quizzes'
      })
      .state('addQuiz', {
        url: '/add-quiz',
        templateUrl: './app/quizzes/add-quiz.html',
        controller: 'AddQuizCtrl',
        controllerAs: 'addQuiz'
      })
      
    
  });

function AppCtrl() {
  this.message = 'hello world'; 
}

