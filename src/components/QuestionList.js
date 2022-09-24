import React from "react";
import Question from "./Question.js"

export default function QuestionList()
{
       const [questions, setQuestions] =React.useState([])
      const [endQuiz,setEndQuiz] = React.useState(false)
      React.useEffect(() => {
              fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
                  .then(res => res.json())
                  .then(data =>setQuestions(data.results))
          }, [])
           const [rigthAnswerIndex,setRightAnswerIndex] = React.useState([0,0,0,0,0])
      React.useEffect(()=>
      setRightAnswerIndex(
        [Math.floor(Math.random() * 4),Math.floor(Math.random() * 4),
          Math.floor(Math.random() * 4),Math.floor(Math.random() * 4),
          Math.floor(Math.random() * 4)]),[QuestionList])
          console.log(rigthAnswerIndex)
          let count =0
        const List =  questions.map(question => <Question question={question.question} 
              answers={[
              question.correct_answer,
              question.incorrect_answers[0],
              question.incorrect_answers[1],
              question.incorrect_answers[2]]}
              key={question.question}
              id={question.question}
              rigthAnswerId={rigthAnswerIndex[0]}
              />) 

             function endGame()
             {
              const rightAnswers=0
              setEndQuiz(true)
             }
        
  return(
    
      <div className="QuestionList">
        {List}
        {endQuiz ? <button className="Replay">Replay</button> 
        : <button className="Replay" onClick={endGame}>See Result</button>}
      </div>

  )
}