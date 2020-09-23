const APIUrlGenerator = (categories, triviaCriteria) => {
  let baseURL = 'https://opentdb.com/api.php?';
  const keyCriterias = Object.keys(triviaCriteria);
  if (!keyCriterias.length) {
    return baseURL + 'amount=10'; //if the user doesn't put any criteria we will just give them any 10 questions
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