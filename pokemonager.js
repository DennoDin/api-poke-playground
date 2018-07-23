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
        })
        .catch(() => {
          throw -1;
        });
      return promise;
    }

    // This should return an array of all the Pokemon that are under a particular weight.

    findUnderWeight(weight) {
      // Your code here.
      // ** LIMIT TO THE FIRST 10 POKEMON
      // We don't want to make too many unnecessary calls to the Pokemon API
      const result = [];
      for (let i = 1; i < 11; i++) {
        result.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
      }
      const promise = Promise.all(result)
        .then((result) => {
          return result.filter((element) => {
            return element.data.weight <= weight;
          });
        })
        .then((result) => {
          return result.map((element) => {
            return element.data;
          });
        })
        .catch(() => {
          throw -1;
        });
      // }
      return promise;
    }
  }

  window.Pokemonager = Pokemonager;
})();
