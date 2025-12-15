// SingleCard.js

const POKEMON_CARD_BACK_URL = "https://upload.wikimedia.org/wikipedia/en/3/3b/Pokemon_Trading_Card_Game_cardback.jpg";

export default function SingleCard({ card, handleChoice, flipped }) {

  // A local helper to make the onClick cleaner
  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <div 
      onClick={handleClick}
      // We kept all your Tailwind classes exactly as they were
      className={`relative overflow-hidden w-20 h-20 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-xl shadow-xl cursor-pointer transition-all duration-300 border-2 
      ${flipped 
        ? 'border-blue-400 bg-white' 
        : 'border-slate-700 bg-slate-800 hover:border-blue-400 hover:-translate-y-2 hover:shadow-blue-500/20'
      }`}
    >
      {/* CONDITIONAL RENDERING based on the 'flipped' prop */}
      {flipped ? (
          <div className="w-full h-full flex items-center justify-center text-3xl md:text-6xl lg:text-7xl font-bold text-blue-600 animate-fadeIn">
            {card.src}
          </div>
      ) : (
          <img 
            src={POKEMON_CARD_BACK_URL} 
            alt="card back"
            className="w-full h-full object-cover animate-fadeIn"
          />
      )}
    </div>
  )
}