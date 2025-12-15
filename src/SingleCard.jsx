const POKEMON_CARD_BACK_URL = "https://upload.wikimedia.org/wikipedia/en/3/3b/Pokemon_Trading_Card_Game_cardback.jpg";

export default function SingleCard({ card, handleChoice, flipped }) {

  const handleClick = () => {
    if (!flipped) {
      handleChoice(card)
    }
  }

  return (
    <div className="relative group perspective-1000">
      <div 
        onClick={handleClick}
        // UPGRADE: Increased sizes (w-24->w-32, md:w-32->md:w-48, etc)
        className={`
            relative w-24 h-32 md:w-48 md:h-64 lg:w-56 lg:h-80 
            rounded-xl cursor-pointer transition-all duration-500 transform-style-3d 
            shadow-xl
            ${flipped 
                ? 'rotate-0' 
                : 'rotate-0 hover:-translate-y-4 hover:shadow-2xl hover:shadow-red-500/40'
            }
        `}
      >
        {flipped ? (
           // --- FRONT ---
           <div className="w-full h-full rounded-xl bg-slate-900 border-4 border-slate-700/50 flex items-center justify-center p-4 relative overflow-hidden animate-fadeIn">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
                <img 
                    src={card.src} 
                    alt="pokemon" 
                    className="w-full h-full object-contain z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                />
           </div>
        ) : (
           // --- BACK ---
           <div className="w-full h-full rounded-xl overflow-hidden border-4 border-white/10 group-hover:border-yellow-500/80 transition-colors shadow-lg">
               <img 
                 src={POKEMON_CARD_BACK_URL} 
                 alt="card back"
                 className="w-full h-full object-cover" 
               />
           </div>
        )}
      </div>
    </div>
  )
}