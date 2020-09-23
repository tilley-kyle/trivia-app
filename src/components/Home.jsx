import React from 'react';

const Home = ({ categories, onInputChange }) => {
  return (
    <div>
      <div className="option-boxes">
        <form>
          <input list="categories" placeholder="Select Category" id="Categories" onChange={(e) => onInputChange(e)} />
          <datalist id="categories">
            {categories.trivia_categories.map((category) => {
              return <option value={category.name} key={category.id} />
            })}
          </datalist>
        </form>
        <form>
          <input type="number" placeholder="Number of Questions" min="1" max="50" id="Number" onChange={(e) => onInputChange(e)} />
        </form>
        <form>
          <input list="difficulty" placeholder="Difficulty" id="Difficulty" onChange={(e) => onInputChange(e)} />
          <datalist id="difficulty">
            <option value="any" />
            <option value="Easy" />
            <option value="Medium" />
            <option value="Difficult" />
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