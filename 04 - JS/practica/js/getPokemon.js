const main = document.querySelector(".section");
const loader = document.querySelector(".loader");

const getPokemon = async (query) => {
  try {
    main.innerHTML = "";
    loader.style.display = "block";
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    const data = await res.json();
    const imgPokemon = data.sprites.other["dream_world"]["front_default"];
    const stats = data.stats.slice(0, 3);
    const types = data.types[0].type.name;
    const moves = data.moves.slice(0, 3);
    let templateMoves = "";

    main.innerHTML = `
     <div class="caja1">
            <div class="content">
              <div class="caja1_header">
                <div class="header__item header__item-diference"></div>
                <div class="header__item"></div>
                <div class="header__item"></div>
                <div class="header__item"></div>
              </div>
              <div class="caja1_main">
                <div class="main__contenedor">
                    <div class="main__contenedor-pokemon">
                        <div class="pokemon__nombre">
                          <h1>${data.name.toUpperCase()}</h1>
                        </div>
                        <div class="pokemon__datos">
                            <div class="pokemon__img">
                              <img class="p_img" src=${imgPokemon} alt="">
                            </div>
                            <div class="pokemon__estadisticas">
                              <ul class="estadisticas__pokemon">
                                <li class="lis"><span>HP:</span>${
                                  stats[0].base_stat
                                }</li>
                                <li class="lis"><span>Attack:</span>${
                                  stats[1].base_stat
                                }</li>
                                <li class="lis"><span>Defense:</span>${
                                  stats[2].base_stat
                                }</li>
                                ${templateMoves}
                                <li class="lis"> <span>Type:</span> ${types} </li>
                              </ul>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <div class="caja1_3">
                <div class="btn_cir"></div>
                <div class="btn_cir"></div>
                <div class="btn_cir"></div>
              </div>
              <form class="caja1_form" >
                <input type="text"  id="input_pokemon" class="form__input" placeholder="Busca tu pokemon"  autocomplete="off">
                <button id="btn_pokemon" class="form__button" type="submit"></button>
              </form>
            </div>
        </div>`;
    loader.style.display = "none";
  } catch (err) {
    main.innerHTML = `
      <div class="error">
        <p class="error__text">No existe ningún pokemon con ese Nombre o ID, intente nuevamente</p>
        <button type="button" class="error_btn">Ok</button>
      </div>
      `;
    loader.style.display = "none";

    document
      .querySelector(".error_btn")
      .addEventListener("click", (e) => location.reload());
  }
};
export default getPokemon;
