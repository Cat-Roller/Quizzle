import React from "react";
import Question from "./Question.js"

export default function QuestionList(props)
{
      const [questions, setQuestions] =React.useState([])
      const [endQuiz,setEndQuiz] = React.useState(false)
      const [poinst, setPoints] = React.useState(0)
      const [pickedAnswers, setPickedAnswers]= React.useState([-1,-1,-1,-1,-1])
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
          let count =0

        const List =  questions.map(question => <Question question={question.question} 
              answers={[
              question.correct_answer,
              question.incorrect_answers[0],
              question.incorrect_answers[1],
              question.incorrect_answers[2]]}
              key={question.question}
              id={count}
              rigthAnswerId={rigthAnswerIndex[count++]}
              pickAnswer={pickAnswer}
              pickedAnswers={pickedAnswers}
              endQuiz={endQuiz}
              />) 
             function pickAnswer(questionId, answerId, endQuiz){
              if (!endQuiz) {
                {setPickedAnswers(answers => {return [
                  ...answers.slice(0,questionId),
                  answers[questionId]=answerId,
                   ...answers.slice(questionId+1) ]})}
                }  
              }
              
             function endGame()
             {
              for (let i = 0; i < 5; i++) {
                if(rigthAnswerIndex[i]===pickedAnswers[i])
                {
                  setPoints(score => score+1)
                }     
              }
              setEndQuiz(true)
             }
        
             function restartGame()
             {
              props.gameStarted(false)
             }
  return(
    
      <div className="QuestionList">
        {List}
        {endQuiz ? <div> <span className="rightMargin">You answered {poinst} questions right</span>
        <button className="Replay" onClick={restartGame}>Replay</button></div>
        : <button className="Replay" onClick={endGame}>See Result</button>}
      </div>

  )
}