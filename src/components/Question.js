import React from "react";

export default function Question(props) 
{
    
    return(
        <div className="question">
            <h4 className="ask">{props.question}</h4>
            <div className="answers">
                <button className="answer">{props.answer1}</button>
                <button className="answer">{props.answer2}</button>
                <button className="answer">{props.answer3}</button>
                <button className="answer">{props.answer4}</button>
            </div>
            <hr className="solidHr"/>
        </div>
    )
}