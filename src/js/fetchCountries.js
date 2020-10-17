function fetchArticles(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/ukraine`;

  return fetch(url)
    .then((res) => res.json())
}

export default fetchArticles;
// ${searchQuery}