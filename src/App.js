import React from "react";
import "./style.css"
import QuestionList from "./components/QuestionList";
import StartingPage from "./components/StartPage";

export default function App(){
    const [startQuiz, setStartQuiz] = React.useState(false)

    return(
        <div  className="Base">   
         <div className="yellowBubble"></div>
         {startQuiz ? <QuestionList gameStarted={setStartQuiz}/> 
         : <StartingPage setStartQuiz={setStartQuiz}/>}
         <div className="blueBubble"></div>
        </div>
    )
}