import { useState, useEffect } from "react"

export default function App() {
  const [cards, setCards] = useState([])

  const shuffle = () => {
    const newDeck = getShuffledCards(cardImage)
    setCards(newDeck)
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

      {/* Grid: Increased gap for bigger cards */}
      <div className="grid grid-cols-4 gap-4 md:gap-8 lg:gap-10">
        {cards.map((card) => (
          <div 
            key={card.id} 
            // UPDATED SIZES:
            // Mobile: w-20 (No change, keeps it safe for small phones)
            // Tablet (md): w-40 (Was 32)
            // Desktop (lg): w-56 (Was 40) - These are now HUGE on desktop
            className="w-20 h-20 md:w-40 md:h-40 lg:w-56 lg:h-56 bg-slate-800 border-2 border-slate-700 rounded-xl flex items-center justify-center text-3xl md:text-6xl lg:text-7xl font-bold text-blue-300 shadow-xl cursor-pointer hover:border-blue-400 hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300"
          >
            {card.src.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  )
}

// --- DATA & LOGIC ---

const cardImage = [
  { src: "a", matched: false },
  { src: "b", matched: false },
  { src: "c", matched: false },
  { src: "d", matched: false },
  { src: "e", matched: false },
  { src: "f", matched: false },
]

function getShuffledCards(data) {
  return [...data, ...data]
    .sort(() => Math.random() - 0.5)
    .map((item) => ({ ...item, id: Math.random() }))
}