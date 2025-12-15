import { useState, useEffect } from "react"
import cardImage from "./cardImage";

// The URL for the classic Pokemon card back
const POKEMON_CARD_BACK_URL = "https://upload.wikimedia.org/wikipedia/en/3/3b/Pokemon_Trading_Card_Game_cardback.jpg";

export default function App() {
  const [cards, setCards] = useState([])
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  const shuffle = () => {
    const newDeck = getShuffledCards(cardImage)
    setCards(newDeck)
    setChoiceOne(null)
    setChoiceTwo(null)
  }

  const handleChoice = (card) => {
    // Prevent clicking the same card twice or clicking a flipped card
    if(card.id === choiceOne?.id || card.matched) return;

    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {
    shuffle()
  }, [])

  return (
    <div className="min-h-screen w-full bg-slate-900 flex flex-col items-center justify-center p-4 font-sans">
      
      <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 tracking-wide drop-shadow-lg text-center">
        PokéGame
      </h1>

      <button 
        onClick={shuffle} 
        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 mb-10 border border-blue-400/30"
      >
        New Game
      </button>

      <div className="grid grid-cols-4 gap-4 md:gap-8 lg:gap-10">
        {cards.map((card) => {
          // 1. THE FLIP LOGIC: Should this card be shown?
          const flipped = card === choiceOne || card === choiceTwo || card.matched;

          return (
            <div 
              key={card.id} 
              onClick={() => handleChoice(card)}
              // Added 'overflow-hidden' and relative positioning for image handling
              className={`relative overflow-hidden w-20 h-20 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-xl shadow-xl cursor-pointer transition-all duration-300 border-2 ${flipped ? 'border-blue-400 bg-white' : 'border-slate-700 bg-slate-800 hover:border-blue-400 hover:-translate-y-2 hover:shadow-blue-500/20'}`}
            >
              {/* 2. CONDITIONAL RENDERING (Ternary Operator) */}
              {flipped ? (
                 // SHOW FRONT (The Content)
                 <div className="w-full h-full flex items-center justify-center text-3xl md:text-6xl lg:text-7xl font-bold text-blue-600 animate-fadeIn">
                    {card.src}
                 </div>
              ) : (
                 // SHOW BACK (The Image)
                 <img 
                   src={POKEMON_CARD_BACK_URL} 
                   alt="card back"
                   className="w-full h-full object-cover animate-fadeIn"
                 />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// --- DATA & LOGIC ---

// Using numbers 1-6 for easier testing


function getShuffledCards(data) {
  return [...data, ...data]
    .sort(() => Math.random() - 0.5)
    .map((item) => ({ ...item, id: Math.random() }))
}