import React from "react";

export default function StartingPage(props) 
{
    function startQuiz()
    {
    props.setStartQuiz(true)
    }
    return(     
        <div className="StartPage">
            <div className="yellowBubble"></div>
            <h2 className="startTitle">Quizzle</h2>
            <h5 className="startText">Question number one is...</h5>
            <button className="StartButton" onClick={startQuiz}>Start Quiz</button>
            <div className="blueBubble"></div>
        </div>
    )
}