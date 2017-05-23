// creating general scoped objetcs

let quiz = new QuizController();
quiz.getFocus();

let section = new SectionController();

let question = new QuestionController();

let answer = new AnswerController();

// quiz visualization
function viewQuiz(quizId) {
    quiz.viewQuiz(quizId, section, question, answer);
}