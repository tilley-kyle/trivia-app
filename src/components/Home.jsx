import React from 'react';

const Home = ({ categories }) => {
  console.log(categories)
  return (
    <div className="option-boxes">
      <form>
        <input list="categories" />
        <datalist id="categories">
          {/* {categories.forEach((category) => {
            return <option value="category" />
          })} */}
        </datalist>
      </form>
      <form>
        <input type="number" placeholder="Less than 50" min="1" max="50" />
      </form>
      <form>
        <input list="question-count" />
        <datalist id="question-count">
          <option value="any" />
          <option value="Easy" />
          <option value="Medium" />
          <option value="Difficult" />
        </datalist>
      </form>
    </div>
  )
}

export default Home;