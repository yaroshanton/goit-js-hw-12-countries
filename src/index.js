import "./styles.scss";
import refs from "./js/refs";
import fetchArticles from "./js/fetchCountries";
import createManyArticles from "./templates/createManyArticles.hbs";
import createOneArticle from "./templates/createOneArticle.hbs";
import createArticlesMurkup from "./js/createArticlesMurkup";
import { error, defaultModules,} from "@pnotify/core/dist/PNotify.js";
import '@pnotify/core/dist/BrightTheme.css';

import lodash from "lodash";

function countrySelection(countries) {
  if (countries.length === 1) {
    return createArticlesMurkup(countries, createOneArticle);
  } else if (countries.length > 10) {
    error("Too many matches found. Please enter a more specific query!");
  } else if (countries.length > 1 && countries.length < 10)  {
    return createArticlesMurkup(countries, createManyArticles);
  }
}

const onInputValue = (e) => {
  e.preventDefault();

  fetchArticles(e.target.value).then(countries => {
    countrySelection(countries);
  });

  refs.articlesContainer.innerHTML = "";
  e.target.value = "";
};

refs.inputRef.addEventListener("input", lodash.debounce(onInputValue, 1000));
