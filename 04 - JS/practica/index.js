import getPokemon from "./js/getPokemon.js";

document.addEventListener("submit", e => {
  if (e.target.matches(".caja1_form")) {
  	e.preventDefault();
  	let query = e.target.input_pokemon.value.toLowerCase();

  	if (!query) alert("Debes ingresar un valor, NO PUEDE ESTAR VACIO");
  	else{
  		getPokemon(query)
  	}
  }
});

document.addEventListener("DOMContentLoaded", e=> getPokemon(1));


