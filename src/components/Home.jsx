import React from 'react';

const Home = ({ categories, onInputChange }) => {
  console.log(categories)
  return (
    <div>
      <div className="option-boxes">
        <form>
          <input list="categories" placeholder="Select Category" id="category" onChange={(e) => onInputChange(e)} />
          <datalist id="categories">
            {categories.trivia_categories.map((category) => {
              return <option value={category.name} key={category.id} />
            })}
          </datalist>
        </form>
        <form>
          <input type="number" placeholder="Number of Questions" min="1" max="50" id="amount" onChange={(e) => onInputChange(e)} />
        </form>
        <form>
          <input list="difficulties" placeholder="Difficulty" id="difficulty" onChange={(e) => onInputChange(e)} />
          <datalist id="difficulties">
            <option value="any" />
            <option value="easy" />
            <option value="medium" />
            <option value="hard" />
          </datalist>
        </form>
      </div>
      <div className="btn-cont">
        <button className="trivia-bttn">TRIVIA!!</button>
      </div>
    </div>
  )
}

export default Home;