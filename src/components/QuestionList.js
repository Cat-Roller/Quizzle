import React from "react";
import Question from "./Question.js"

export default function QuestionList()
{
        const [questions, setQuestions] =React.useState([])
        React.useEffect(() => {
                fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
                    .then(res => res.json())
                    .then(data =>setQuestions(data.results))
            }, [])
            
          const List =  questions.map(question => <Question question={question.question} 
                answer1={question.correct_answer} answer2={question.incorrect_answers[0]} 
                answer3={question.incorrect_answers[1]} answer4={question.incorrect_answers[2]} />) 

    return(
        <div className="QuestionList">
          {List}
         <button className="Replay">See Result</button>
        </div>
    )
}