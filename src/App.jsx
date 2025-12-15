import SingleCard from "./SingleCard";
import BackgroundMusic from "./BackgroundMusic"; // <--- Import the new component
import { useGameLogic } from "./hooks/useGameLogic"; 

export default function App() {
  const { cards, turns, shuffle, handleChoice, choiceOne, choiceTwo } = useGameLogic()
  
  // No more audio state or refs here!

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-red-900 via-red-600 to-purple-900 animate-gradient-xy flex flex-col items-center justify-center p-4 font-sans select-none relative overflow-hidden text-white">
      
      {/* --- DROP IN THE MUSIC WIDGET HERE --- */}
      <BackgroundMusic />

      {/* Floating Particles */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl animate-float-delayed pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col items-center gap-6 mb-8 z-10 relative">
        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter drop-shadow-2xl transform -skew-x-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-500 filter drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">
            POKÉ
          </span>
          <span className="text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">MATCH</span>
        </h1>

        <div className="flex items-center gap-6">
            <button 
                onClick={shuffle} 
                className="px-8 py-3 bg-slate-900/80 hover:bg-slate-800 text-yellow-400 font-bold rounded-full border border-yellow-500/50 hover:border-yellow-400 transition-all shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] backdrop-blur-sm"
            >
                NEW GAME
            </button>

            <div className="px-6 py-3 rounded-full bg-black/40 border border-white/10 backdrop-blur-md">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider mr-3">Turns</span>
                <span className="text-2xl font-mono font-bold">{turns}</span>
            </div>
        </div>
      </div>

      {/* Grid */}
      <div className="relative p-6 md:p-8 rounded-3xl bg-black/20 backdrop-blur-sm border border-white/5 shadow-2xl z-10">
        <div className="grid grid-cols-4 gap-4 md:gap-8">
            {cards.map((card) => (
            <SingleCard 
                key={card.id} 
                card={card}
                handleChoice={handleChoice}
                flipped={card === choiceOne || card === choiceTwo || card.matched}
            />
            ))}
        </div>
      </div>
    </div>
  )
}