import React from 'react'

const SelectLevel = ({quizLevel,handleLevel}) => {
  return (
    <div>
      <label for="countries" className="block  text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
<select onChange={handleLevel} value={quizLevel} id="countries" className=" border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Difficulty Level</option>
  <option value="easy">Easy</option>
  <option value="medium">Medium</option>
  <option value="hard">Hard</option>
  
</select>
    </div>
  )
}

export default SelectLevel
