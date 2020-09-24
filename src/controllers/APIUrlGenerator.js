const APIUrlGenerator = (categories, triviaCriteria) => {
  console.log(categories.trivia_categories)
  let baseURL = 'https://opentdb.com/api.php?';
  const keyCriterias = Object.keys(triviaCriteria);
  if (!keyCriterias.length) {
    return baseURL + 'amount=10'; //if the user doesn't put any criteria we will just give them any 10 questions
  }
  //if 'category' is present in triviaCriteria then set triviaCriteria[criteria] to it's id number
  if (keyCriterias.indexOf('category') > -1) {
    for (let i = 0; i < categories.trivia_categories.length; i++) {
      if (categories.trivia_categories[i].name === triviaCriteria.category) {
        triviaCriteria['category'] = categories.trivia_categories[i].id
      }
    }
  }
  keyCriterias.forEach((criteria, i) => {
    if (!i) {
      baseURL += `${criteria}=${triviaCriteria[criteria]}`;
    } else {
      baseURL += `&${criteria}=${triviaCriteria[criteria]}`;
    }
  });
  return baseURL;
}

export default APIUrlGenerator;