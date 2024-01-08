import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Card from './common/Card.js'
import './Quiz.css'
const PlayQuiz = () => {

  const [quizCounter,setquizCounter]=useState(1);
  const [totalQuiz,settotalQuiz]=useState(1);
  const [quizArray,setquizArray]=useState([])
  const [quizCategory,setquizCategory]=useState('');
  const [quizDifficulty,setQuizDifficulty]=useState('');
  const [playerName,setplayerName]=useState('');
    const {state}=useLocation();
 
    useEffect(()=>{
      const {quizData,quizCount,quizType,quizLevel}=state
      settotalQuiz(quizCount)
      setquizArray(quizData)
      setquizCategory(quizType)
      setQuizDifficulty(quizLevel)
      setplayerName(localStorage.getItem('name'))
     
    },[])
    const previous=()=>{
     if(quizCounter>0)
     {
      setquizCounter(quizCounter-1)
     }
    }
    const next=()=>{
      if(quizCounter<totalQuiz)
      {
      setquizCounter(quizCounter+1)
      }
    }
   // init
var maxx = document.body.clientWidth;
var maxy = document.body.clientHeight;
var halfx = maxx / 2;
var halfy = maxy / 2;
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = maxx;
canvas.height = maxy;
var context = canvas.getContext("2d");
var dotCount = 200;
var dots = [];
// create dots
for (var i = 0; i < dotCount; i++) {
  dots.push(new dot());
}

// dots animation
function render() {
  context.fillStyle = "#000000";
  context.fillRect(0, 0, maxx, maxy);
  for (var i = 0; i < dotCount; i++) {
    dots[i].draw();
    dots[i].move();
  }
  requestAnimationFrame(render);
}

// dots class
// @constructor
function dot() {
  
  this.rad_x = 2 * Math.random() * halfx + 1;
  this.rad_y = 1.2 * Math.random() * halfy + 1;
  this.alpha = Math.random() * 360 + 1;
  this.speed = Math.random() * 100 < 50 ? 1 : -1;
  this.speed *= 0.1;
  this.size = Math.random() * 5 + 1;
  this.color = Math.floor(Math.random() * 256);
  
}

// drawing dot
dot.prototype.draw = function() {
  
  // calc polar coord to decart
  var dx = halfx + this.rad_x * Math.cos(this.alpha / 180 * Math.PI);
  var dy = halfy + this.rad_y * Math.sin(this.alpha / 180 * Math.PI);
  // set color
  context.fillStyle = "rgb(" + this.color + "," + this.color + "," + this.color + ")";
  // draw dot
  context.fillRect(dx, dy, this.size, this.size);
  
};

// calc new position in polar coord
dot.prototype.move = function() {
  
  this.alpha += this.speed;
  // change color
  if (Math.random() * 100 < 50) {
    this.color += 1;
  } else {
    this.color -= 1;
  }
  
};

// start animation
render();

  return (
    <div className='canvas'>
      <div className='flex flex-col items-center  w-full h-screen items-center  '>
      <div className='flex gap-5 '>
        <img src='large.png' className='w-12 rounded-lg mt-8 h-12'/>
        <h1 className='text-2xl font-bold mt-10 text-white'>QuizzifyMe ❓: Unleash Your Quiz Power!</h1>
      </div>
      
      
     
      <div className='flex gap-10'>
      <button disabled={quizCounter<=1?true:false} onClick={previous} type="button" className=" mt-5 text-white bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  ">Previous Question</button>
      <button disabled={quizCounter>=Number(totalQuiz)?true:false} onClick={next} type="button" className="mt-5 text-white bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Next Question</button>
     
      </div>
      
      <Card quizCounter={quizCounter} quizArray={quizArray} next={next} quizCount={totalQuiz} playerName={playerName} quizDifficulty={quizDifficulty} quizCategory={quizCategory}/>
    </div>
    
    </div>
  )
}


export default PlayQuiz
