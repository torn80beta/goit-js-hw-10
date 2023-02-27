// export function fetchCountries(e) {
//   return fetch(
//     `https://restcountries.com/v3.1/name/${e}?fields=name,capital,population,flags,languages`
//   )
//     .then(res => {
//       return res.json();
//     })
//     .then(data => {
//       return data;
//     });
// }

export class FetchCountries {
  constructor({ event }) {
    this.event = event;
  }

  makeRequest(query = this.event) {
    return fetch(
      `https://restcountries.com/v3.1/name/${query}?fields=name,capital,population,flags,languages`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        return data;
      });
  }
}
