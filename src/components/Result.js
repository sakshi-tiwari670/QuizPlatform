import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {database} from '../firebase-config'
import { getDocs,collection } from 'firebase/firestore'
const Result = () => {
  const [leaderboard,setLeaderboard]=useState([]);
    const {state}=useLocation();
   
    const navigate=useNavigate();
    const databaseRef=collection(database,'Leaderboard')


    const getData=async ()=>{
      const data=await getDocs(databaseRef)
      setLeaderboard(data.docs.map((doc)=>({...doc.data(),id:doc.id}))
      .sort((a,b)=>parseFloat(b.score)-parseFloat(a.score))
      )

    }
    useEffect(()=>{
      getData();
    })
    const playAgain=()=>{
        navigate('/')
    }
  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
      <h1 class="text-3xl font-bold mt-5">Leaderboard 🥇</h1>
      <h2>Congratulations 🎉! You've completed the quiz.</h2>
     
     

<div class="relative overflow-x-auto rounded-lg w-1/2 my-10">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Player Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Quiz Level
                </th>
                <th scope="col" class="px-6 py-3">
                    Quiz Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Score
                </th>
            </tr>
        </thead>
        <tbody>
           {
            leaderboard.map((person)=>{
              return(
                <>
                 <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {person.playerName}
                </th>
                <td class="px-6 py-4">
                    {person.quizDifficulty}
                </td>
                <td class="px-6 py-4">
                    {person.quizCategory}
                </td>
                <td class="px-6 py-4">
                    {person.score}
                </td>
            </tr>
            
           
                </>
              )
            })
           }
        </tbody>
    </table>
</div>

      
      <button onClick={playAgain} type="button" className="shadow-lg mt-5 text-white bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  ">Play Again</button>
    </div>
  )
}

export default Result
