// 1. Choose your 6 favorite Pokemon IDs
// 25: Pikachu, 6: Charizard, 94: Gengar, 150: Mewtwo, 133: Eevee, 1: Bulbasaur
const pokeIds = [25, 6, 94, 150, 133, 1];

// 2. Map them to create the card objects
const cardImage = pokeIds.map(id => {
  return {
    // We use the "Official Artwork" because it looks high quality
    src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    matched: false,
    name: `Pokemon ${id}` // Helpful for debugging
  }
});

export default cardImage;