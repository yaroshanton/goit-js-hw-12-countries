import "./styles.scss";
import refs from "./js/refs";
import fetchArticles from "./js/fetchCountries";
import createManyArticles from "./templates/createManyArticles.hbs";
import createArticlesMurkup from "./js/createArticlesMurkup";


// Функция создания разметки

function countrySelection(countries) {
  return createArticlesMurkup(countries, createManyArticles);

}

// Обработчик сброса и fetch

const onInputValue = (e) => {
  e.preventDefault();

  const query = e.currentTarget.elements.query.value;
  if (query.length > 0) {
    fetchArticles(query).then(countries => {
      countrySelection(countries);
    });
  }
  refs.articlesContainer.innerHTML = "";
  e.target.query.value = "";
};

refs.inputForm.addEventListener("submit", onInputValue);


// Обработчик сброса

const onButtonCancel = () => {
  refs.articlesContainer.innerHTML = "";
}

refs.buttonCancel.addEventListener("click", onButtonCancel);

// Обработчик checkbox

document.addEventListener('change', function (e) {
  if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    const cb = [...document.querySelectorAll('input[type="checkbox"]:checked')];
    refs.checkboxChecked.innerHTML = `Выбрано: ${cb.length}`;
  }
});