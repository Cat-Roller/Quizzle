import React from "react";
import "./style.css"
import Question from "./components/Question";
import StartingPage from "./components/StartPage";

export default function App(){
    const [startQuiz, setStartQuiz] = React.useState(false)
    return(
        <div  className="Base">   
         <div className="yellowBubble"></div>
         {startQuiz ? <Question question="How to say goodbye in Spanish?"
         answer2="Hola" answer1="Adios" 
         answer3="Au Revoir" answer4="Salir" /> 
         : <StartingPage setStartQuiz={setStartQuiz}/>}
         <div className="blueBubble"></div>
        </div>
    )
}