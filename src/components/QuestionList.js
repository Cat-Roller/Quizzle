import React from "react";
import Question from "./Question.js"

export default function QuestionList()
{
    return(
        <div >
            <Question question="How to say goodbye in Spanish?"
         answer2="Hola" answer1="Adios" 
         answer3="Au Revoir" answer4="Salir"/>
                 <Question question="How to say goodbye in Spanish?"
         answer2="Hola" answer1="Adios" 
         answer3="Au Revoir" answer4="Salir"/>
                 <Question question="How to say goodbye in Spanish?"
         answer2="Hola" answer1="Adios" 
         answer3="Au Revoir" answer4="Salir"/>
                 <Question question="How to say goodbye in Spanish?"
         answer2="Hola" answer1="Adios" 
         answer3="Au Revoir" answer4="Salir"/>
                 <Question question="How to say goodbye in Spanish?"
         answer2="Hola" answer1="Adios" 
         answer3="Au Revoir" answer4="Salir"/>
         <button className="Replay">Play Again</button>
        </div>
    )
}