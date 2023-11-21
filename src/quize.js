


import { useState } from "react";
import { useLoaderData } from "react-router-dom";


let dataofquestion = [
  {
    question: "What is a machine",
    questionnumber:1,
    options: [
      "Machine is a productive tool",
      "Machine is a thing that helps humans work efficiently",
      "Machine is a name",
    ],
    Answer: "Machine is a productive tool",
  },
  {
    question: "What is a computer",
    questionnumber:2,
    options: [
      "computer is the machine",
      "Computer is the name of animal",
      "Computer is the type of car",
    ],
    Answer: "computer is the machine",
  },
  {
    question: "What is a iterator in Js",
    questionnumber:3,
    options: [
      "Iterator which iterator over the value",
      "Iterator is a method of javascript",
      "Iterator is the seconde name of ajvascript",
    ],
    Answer: "Iterator which iterator over the value",
  },
  {
    question: "Who is the founder of Islam",
    questionnumber:4,
    options: [
      "Prophet Muhamad PBUH",
      "Prophet Moses",
      "Prophet jesus ",
    ],
    Answer: "Prophet Muhamad PBUH",
  },
  {
    question: "What is computer softwear",
    questionnumber:5,
    options: [
      "A computer is the softwear  which the instruct the computer",
      "A computer enterttainment concert ",
      "A computer si computer language ",
    ],
    Answer: "A computer is the softwear  which the instruct the computer",
  },


];





































export default function Quizeapp() {

let [number2 , setnumber2] = useState(0) // to update the dive
let [number3 , setnumber3] = useState(0) // to update the dive
let [number , setnumber] = useState(0)
let [correctAnswer] = useState([])
let [totalscores , setsconre] = useState([])
let [ WrongAnwser ] = useState([])


let ForshowingResult = [{
  correctAnswer:correctAnswer,// This is array 
  question:dataofquestion.map((value=>value.question)) // and this is also array
}]
let totalquestion  = dataofquestion.map(value=>value.Answer)
let foo = (Answer)=>{
   
  if(number < dataofquestion.length - 1 ){
    setnumber(number+=1)
 
     for(let key = 0 ; key <dataofquestion.length -1 ; key++){
if(dataofquestion[key].Answer === Answer){
correctAnswer.push(Answer)
totalscores.push(5)



}









     }
  
   
    
  }
  else if(number >= dataofquestion.length-1){
    setnumber2(number2 = 1)
    setnumber3(number3 = 1 )
    
  }
}












 let question =      <div style={{ display:"flex", width: "100%", height: "100%", border: "2px solid white"  , alignContent:"center" , alignItems:"center"}}>
 <h1 style={{  fontFamily:"sans-serif",margin:"20%"}}>{dataofquestion[number].question}  ?</h1>
</div>


 
  
  let Result = <>
    <div style={{ display:"flex" , justifyContent:"space-evenly"}}>

  <h1>Result</h1>
  <h1>Score  {totalscores.reduce((a , b)=>a+b , 0)} /20  </h1>
  </div>
  {ForshowingResult.map(value=>{
    return(

<>        
      
     <div>
     {value.question.map((value , index)=>{return(<h3 style={{color:"black"}}> {index}  {value} ? </h3>)})} 
     </div>
     <div>
    {value.correctAnswer.map((value , index)=>{
      return(<h3>{index}     {value}       </h3>)
    })} 

     </div>



<div style={{border:"2px solid red" , width:"100%" , height:"100%"}}>
<div>
{WrongAnwser.map(((value , index)=>{

  return(
    <h3 style={{color:"red"}}> {index}{value}</h3>
  )
}))}

  </div>


</div>




      </>
    





    )
  })}
    
 
    
    
   </>
  let Result2 = <><h1>finished</h1></>
  let showingdata = <>
       {dataofquestion[number].options.map((value, index) => (
    <button onClick={()=>{foo(value)}} style={{backgroundColor:"white"   , marginTop:"10% "}}>
             <div key={index} style={{ display: "flex", alignItems: "center" , alignContent:"center" , alignItems:"center" , textAlign:"center" }}>
         <h3> {index}         {value}</h3>
      
  
       
       </div>

    </button>
     ))}
  </>
  let array1 = [question , Result]
  let arrray = [ showingdata , Result2]
  return (
    <div style={{ margin: "20%" }}>
      
    
      <div style={{ color: "white", backgroundColor: "orange"  , backgroundBlendMode:"lighten" , padding:"10%"}}>
      <h1 >Question {number}   / {totalquestion.length-1}</h1>
   {array1[number3]}
        <div style={{ display: "flex", flexDirection: "column" }}>
     {arrray[number2]}
       
        </div>
      </div>
    </div>
  );
}



