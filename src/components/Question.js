import React from "react";

export default function Question(props) 
{
    const [checked, setChecked] = React.useState(-1)
    const RigthAnswerIndex=props.rigthAnswerId
    const RightAnswer=props.answers[0]
    props.answers[0]=props.answers[RigthAnswerIndex]
    props.answers[RigthAnswerIndex]=RightAnswer

    return(
        <div className="question">
            <h4 className="ask">{props.question}</h4>
            <div className="answers">

                <button className="answer" id={0} 
                style={{backgroundColor: !props.endQuiz ? checked===0 ? "#D6DBF5" : "white" : props.rigthAnswerId===0 ? "#94D7A2" : checked===0 ? "#F8BCBC" : "#F5F7FB",
                 border: !props.endQuiz ? checked===0 ? "none" : "" : props.rigthAnswerId===0 ? "none" : checked===0 ? "none" : ""}} 
                onClick={() => {props.pickAnswer(props.id, 0,props.endQuiz);
                setChecked(0)}}
                >{props.answers[0]}</button>

                <button className="answer" id={1}
                style = {{backgroundColor:!props.endQuiz ? checked===1 ? "#D6DBF5" : "white" : props.rigthAnswerId===1 ? "#94D7A2" : checked===1 ? "#F8BCBC" : "#F5F7FB",
                border: !props.endQuiz ? checked===1 ? "none" : "" : props.rigthAnswerId===1 ? "none" : checked===1 ? "none" : ""}} 
                 onClick={() => {props.pickAnswer(props.id, 1,props.endQuiz);
                 setChecked(1)}}
                 >{props.answers[1]}</button>

                <button className="answer" id={2}
                style={{backgroundColor: !props.endQuiz ? checked===2 ? "#D6DBF5" : "white" : props.rigthAnswerId===2 ? "#94D7A2" : checked===2 ? "#F8BCBC" : "#F5F7FB",
                border: !props.endQuiz ? checked===2 ? "none" : "" : props.rigthAnswerId===2 ? "none" : checked===2 ? "none" : ""}} 
                 onClick={() => {props.pickAnswer(props.id, 2,props.endQuiz);
                setChecked(2)}}
                 >{props.answers[2]}</button>
 
                <button className="answer" id={3} 
                style={{backgroundColor: !props.endQuiz ? checked===3 ? "#D6DBF5" : "white" : props.rigthAnswerId===3 ? "#94D7A2" : checked===3 ? "#F8BCBC" : "#F5F7FB",
                border: !props.endQuiz ? checked===3 ? "none" : "" : props.rigthAnswerId===3 ? "none" : checked===3 ? "none" : ""}} 
                 onClick={() => {props.pickAnswer(props.id, 3,props.endQuiz);
                setChecked(3)}}
                 >{props.answers[3]}</button>

            </div>
            <hr className="solidHr"/>
        </div> 
    )
}