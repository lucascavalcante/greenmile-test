// creating general scoped objetcs

let quiz = new QuizController();
quiz.getFocus();

let section = new SectionController();

let question = new QuestionController();

let answer = new AnswerController();

// init collapse
$('.collapse').collapse();

// quiz visualization
function viewQuiz(quizId) {
    quiz.viewQuiz(quizId, section, question, answer);
}