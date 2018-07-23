(() => {
  class Pokemonager {
    // This should return an array of all the names of n Pokemon from the Pokemon API.
    findNames(n) {
      // Your code here.
      let result = [];
      let promise;
      promise = axios
        .get(`https://pokeapi.co/api/v2/pokemon/?limit=${n}&offset=0"`)
        .then((pokemon) => {
          result = pokemon.data.results.map((item) => {
            return item.name;
          });
          return result;
        });
      return promise;
    }

    // This should return an array of all the Pokemon that are under a particular weight.

    findUnderWeight(weight) {
      // Your code here.
      // ** LIMIT TO THE FIRST 10 POKEMON
      // We don't want to make too many unnecessary calls to the Pokemon API
    }
  }

  window.Pokemonager = Pokemonager;
})();
