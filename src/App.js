import React from "react";
import "./style.css"
import Quiz from "./components/Game";
import StartingPage from "./components/StartPage";

export default function App(){
    const [startQuiz, setStartQuiz] = React.useState(false)
    return(
        <div>
         {startQuiz ? <Quiz/> : <StartingPage setStartQuiz={setStartQuiz}/>}
        </div>
    )
}