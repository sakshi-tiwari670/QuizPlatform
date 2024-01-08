import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import {database} from '../../firebase-config'
import { addDoc,collection } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Card = ({quizCounter,quizArray,next,quizCount,playerName,quizDifficulty, quizCategory}) => {
  const [score,setScore]=useState(0)
  const navigate=useNavigate();
  const databaseRef=collection(database,'Leaderboard')
    
    const handleOption=(option)=>{
       
        if(option===quizArray[quizCounter-1].correct_answer)
        {
          setScore(score+1)
          toast.warn("Right answer",{
            position: "top-right",
            autoClose: 1000,
          });
          
        }
        else{
          setScore(score-1)
          toast.warn("Wrong answer",{
            autoClose: 1000,
           
          });
        }
        next();

       
    }
    const submitQuiz=()=>{
      addDoc(databaseRef,{
        playerName:playerName,
        quizCategory:quizArray[0].category,
        quizDifficulty:quizDifficulty,
        score:score
      }).then(()=>{
        navigate('/results',{
          state:{
            finalResult:score
          }
        })

      })
     
      
    }
  return (
    <div className='w-1/2 text-white' >
      <ToastContainer />
       <div className=" p-8 rounded-lg w-full flex flex-col items-center ">
        <h2 className='font-bold mb-5 p-2 shadow-xl'> Your Score : {score}</h2>
        {/* <h1 className='mb-2'> Category: {quizArray[quizCounter-1].category}</h1> */}
   {quizArray.length >0 ? (<>
    <h2 className="text-xl font-semibold mb-4">Question {quizCounter} : {quizArray[quizCounter-1].question}</h2>

    <div className="grid grid-cols-1 gap-4 w-full">
      
     {
        [
            ...quizArray[quizCounter-1].incorrect_answers,
            quizArray[quizCounter-1].correct_answer
        ].map((option,i)=>{
           return(
           <div  className='border-b-[1px] w-full  text-center'><p onClick={()=>{handleOption(option)}} className=' hover:shadow-lg w-full p-3 cursor-pointer rounded-lg '>Option {i+1}: <span className='font-bold'>{option}</span></p></div> 
           )
        })
     }

    </div>
    {
      quizCounter===Number(quizCount) ?( <button onClick={submitQuiz}  type="button" className="shadow-lg mt-5 text-white bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  ">Submit</button>
      ):("")
    }

   </>) : (<h1>No data</h1>)}
   
  </div>
    </div>
  )
}

export default Card
