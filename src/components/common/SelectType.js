import React from 'react'

const SelectType = ({setquizType,quizType,handleType}) => {
  return (
    <div>
      <label for="countries" className="block  text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
<select value={quizType} onChange={handleType} label="type" id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Select Category</option>
  <option value={9}>General Knowledge</option>
                    <option value={10}>Entertainment: Books</option>
                    <option value={11}>Entertainment: Film</option>
                    <option value={12}>Entertainment: Music</option>
                    <option value={13}>Entertainment: Musical and Theatres</option>
                    <option value={14}>Entertainment: Television</option>
                    <option value={15}>Entertainment: Board Games</option>
                    <option value={29}>Entertainment: Japanese Anime and Mange</option>
                    <option value={31}>Entertainment: Cartoon and Animations</option>
                    <option value={32}>Entertainment: Comics</option>
                    <option value={17}>Science and Nature</option>
                    <option value={18}>Science: Computers</option>
                    <option value={19}>Science: Mathemetics</option>
                    <option value={30}>Science: Gadgets</option>
                    <option value={20}>Mythology</option>
                    <option value={21}>Sports</option>
                    <option value={22}>Geography</option>
                    <option value={23}>History</option>
                    <option value={24}>Politics</option>
                    <option value={25}>Art</option>
                    <option value={26}>Celebrities</option>
                    <option value={27}>Animals</option>
                    <option value={28}>Vehicles</option>
</select>
    </div>
  )
}

export default SelectType
