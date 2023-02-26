export function fetchCountries(e) {
  return fetch(
    `https://restcountries.com/v3.1/name/${e}?fields=name,capital,population,flags,languages`
  )
    .then(res => {
      //console.log(res.json());
      return res.json();
    })
    .then(data => {
      //console.log(data);
      return data;
    });
}
