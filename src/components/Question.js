import React from "react";

export default function Question(props) 
{
    const RigthAnswerIndex=props.rigthAnswerId
    const RightAnswer=props.answers[0]
    props.answers[0]=props.answers[RigthAnswerIndex]
    props.answers[RigthAnswerIndex]=RightAnswer
    return(
        <div className="question">
            <h4 className="ask">{props.question}</h4>
            <div className="answers">

                <button className="answer" id={0} 
                onClick={() => props.pickAnswer(props.id, 0)}
                >{props.answers[0]}</button>

                <button className="answer" id={1}
                 onClick={() => props.pickAnswer(props.id, 1)}
                 >{props.answers[1]}</button>

                <button className="answer" id={2}
                 onClick={() => props.pickAnswer(props.id, 2)}
                 >{props.answers[2]}</button>

                <button className="answer" id={3}
                 onClick={() => props.pickAnswer(props.id, 3)}
                 >{props.answers[3]}</button>

            </div>
            <hr className="solidHr"/>
        </div>
    )
}