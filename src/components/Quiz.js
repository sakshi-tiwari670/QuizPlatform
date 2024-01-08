
import React, { useState } from 'react'
import SelectType from './common/SelectType';
import InputField from './common/InputField';
import SelectLevel from './common/SelectLevel';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Quiz.css'
const Quiz = () => {
  const navigate=useNavigate();
  const [quizCount,setquizCount]= useState();
    const [quizType,setquizType]= useState();
    const [quizLevel,setquizLevel]= useState();
    const [quizArray,setquizArray]= useState();
    const [name,setName]=useState('');

    const handleName=(value)=>{
      setName(value)
      localStorage.setItem('name',value)
    }

    const handleType=(event)=>{
        setquizType(event.target.value)
        
    }

    const handleLevel=(event)=>{
        setquizLevel(event.target.value)
        
    }

    const getQuiz=()=>{
      axios.get(`https://opentdb.com/api.php?amount=${quizCount}&category=${quizType}&difficulty=${quizLevel}`)
      .then(response=>{
        setquizArray(response.data.results);
        navigate('/play',
        {
          state: {
            quizData:response.data.results,
            quizCount:quizCount,
            quizType:quizType,
            quizLevel:quizLevel
          }
          

        })
      })
      // axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy')
      // .then(response=>{
      //   console.log(response.data)
      // })
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

// dots className
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
    <div className=''>
      <div className=" min-h-screen py-6 flex flex-col justify-center  canvas">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-16">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">QuizzifyMe ❓: The ultimate destination for knowledge enthusiasts! </h1>
				</div>
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-2 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input value={name} onChange={(e)=>handleName(e.target.value)}   id="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"  placeholder="Enter your name"/>
							<label for="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter your name</label>
						</div>
						<InputField setquizCount={setquizCount} quizCount={quizCount}/>
             <div>
 <SelectType setquizType={setquizType} quizType={quizType} handleType={handleType}/>
 </div>


 <div>
 <SelectLevel  quizLevel={quizLevel} handleLevel={handleLevel}/>
 </div>
						<div className="relative flex gap-5 mt-10">
							<button onClick={getQuiz} className="bg-gray-500 text-white rounded-md px-2 py-1 mt-8">Submit</button>
              <button onClick={()=>navigate('/results')}  className="bg-gray-500 text-white rounded-md px-2 py-1 mt-8">Check Leaderboard</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    </div>
  )
}

export default Quiz

