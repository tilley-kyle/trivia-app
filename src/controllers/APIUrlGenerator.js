const APIUrlGenerator = (categories, triviaCriteria) => {
  let baseURL = 'https://opentdb.com/api.php?';
  const keyCriterias = Object.keys(triviaCriteria);
  if (!keyCriterias.length) {
    return baseURL + 'amount=5'; //if the user doesn't put any criteria we will just give them any 10 questions
  }
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