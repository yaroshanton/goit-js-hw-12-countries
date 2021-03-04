function fetchArticles(searchQuery) {
  const url = `http://universities.hipolabs.com/search?country=${searchQuery}`;

  return fetch(url)
    .then((res) => res.json())
}

export default fetchArticles;
