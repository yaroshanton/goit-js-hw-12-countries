import refs from "../js/refs";

function createArticlesMurkup(country, template) {
  const markup = template(country);

  refs.articlesContainer.insertAdjacentHTML("beforeend", markup);
}

export default createArticlesMurkup;
