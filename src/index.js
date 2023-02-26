import './css/styles.css';
import fetchCountries from './js/fetchCountries';
var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const refs = {
  searchBoxEl: document.querySelector('#search-box'),
  countryListEl: document.querySelector('.country-list'),
  countryInfoEl: document.querySelector('.country-info'),
};

const country = refs.searchBoxEl.value;
console.log(refs.searchBoxEl, refs.countryListEl, refs.countryInfoEl);
refs.searchBoxEl.addEventListener(
  'input',
  debounce(fetchCountries, DEBOUNCE_DELAY)
);
