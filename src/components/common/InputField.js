import React from 'react'

const InputField = ({setquizCount,quizCount}) => {
  const handleCount=(event)=>{
setquizCount(event.target.value)

  }
  return (
    <div>
      {/* <input value={quizCount} onChange={handleCount} id="countries" placeholder='Number of Questions' className="placeholder-red-500  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/> */}
      <div class="relative">
							<input value={quizCount} onChange={handleCount} id="ques" name="ques" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Number of questions" />
							<label for="ques" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Number of Questions</label>
						</div>
    </div>
  )
}

export default InputField
