import React from "react";

export default function StartingPage(props) 
{
    function startQuiz()
    {
    props.setStartQuiz(true)
    }
    return(     
        <div className="StartMenu">
            <h2 className="startTitle">Quizzle</h2>
            <h5 className="startText">Question number one is...</h5>
            <button className="StartButton" onClick={startQuiz}>Start Quiz</button>
        </div>
    )
}