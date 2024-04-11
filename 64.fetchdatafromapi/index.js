//fetch = function used for making http requests to fetch resources
// JSON style data , images , files
//simplifies asynchronous data fetching in javascript
// use for interacting with apis to retrieve and send
// data asynchronously over the web
// fetch(url,{options})
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(console.log(error));
//   });

//now we have to convert this into a readable format

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (response.ok === true) {
//       return response.json();
//     } else {
//       throw new Error("Could not fetch resource");
//     }
//   })
//   .then((data) => {
//     console.log(data.abilities);
//   })
//   .catch((error) => console.log(error));

//using async await
fetchData();
async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokesearch")
      .value.toLowerCase();
    console.log(pokemonName);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    const data = await response.json();
    const pokeimg = data.sprites.front_default;
    const imgEl = document.getElementById("pokeimg");

    imgEl.src = pokeimg;
    imgEl.style.display = "block";
  } catch (error) {
    console.log(error);
  }
}

//sprites is a computer graphic which may be moved on-screen and otherwise manipulated as single entity
