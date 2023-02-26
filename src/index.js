import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
//import fetchCountries from './js/fetchCountries';
var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const refs = {
  searchBoxEl: document.querySelector('#search-box'),
  countryListEl: document.querySelector('.country-list'),
  countryInfoEl: document.querySelector('.country-info'),
};

let searchQuery = '';

refs.searchBoxEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  searchQuery = e.target.value;
  fetchCountries(searchQuery).then(data => showFlag(data));
}

function showFlag(countries) {
  refs.countryListEl.innerHTML = '';
  const markup = countries
    .map(
      country =>
        `<li class="country"><img src='${country.flags.svg}' width=30 height=20 alt="${country.flags.alt}"><p class="country-name">${country.name.common}</p></li>`
    )
    .join('');
  refs.countryListEl.insertAdjacentHTML('afterbegin', markup);
}

// function fetchCountries(e) {
//   fetch(
//     `https://restcountries.com/v3.1/name/${e.target.value}?fields=name,capital,population,flags,languages`
//   )
//     .then(res => {
//       //console.log(res.json());
//       return res.json();
//     })
//     .then(res => {
//       showFlag(res);
//       console.log(res[0].name);
//     });
// }
