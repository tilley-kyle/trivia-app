import React from 'react';

const Home = ({ categories }) => {
  console.log(categories)
  return (
    <div>
      <div className="option-boxes">
        <form>
          <input list="categories" placeholder="Select Category" />
          <datalist id="categories">
            {categories.trivia_categories.map((category) => {
              return <option value={category.name} key={category.id} />
            })}
          </datalist>
        </form>
        <form>
          <input type="number" placeholder="Number of Questions" min="1" max="50" />
        </form>
        <form>
          <input list="difficulty" placeholder="Difficulty" />
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