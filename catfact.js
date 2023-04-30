const button = document.querySelector('#button');
const output = document.querySelector('#output');

function fetchCatFact() {
  return new Promise((resolve, reject) => {
    fetch('https://catfact.ninja/fact')
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
}

button.addEventListener('click', () => {
  fetchCatFact()
    .then(response => response.json())
    .then(data => {
      output.textContent = data.fact;
    })
    .catch(error => {
      console.error(`Error fetching cat fact: ${error}`);
    });
});