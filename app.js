
let quiz = require('./get-quizlet');


(function() {

	"use strict";

	//function.clickGO (){
	window.onload = function(){

	

	let quizURL = 'https://quizlet.com/26463057/c-1st-test-flash-cards';

	quiz.getQuiz(quizURL).then(quiz.parseQuiz);

	document.getElementById("test").innerHTML = quiz.questions[0];

	}







})();