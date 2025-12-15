import { useState, useRef, useEffect } from "react";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Set volume once on mount
    if(audioRef.current) {
        audioRef.current.volume = 0.3; 
    }
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play()
        .then(() => {
            setIsPlaying(true);
        })
        .catch(error => {
            console.error("Audio playback failed:", error);
        });
    }
  };

  return (
    <div className="absolute top-6 right-6 z-50">
      {/* 1. The Audio Element (Hidden) */}
      <audio ref={audioRef} loop>
        <source src="/pokemusic.mp3" type="audio/mpeg" />
      </audio>

      {/* 2. The Toggle Button */}
      <button 
        onClick={toggleMusic}
        className={`
            p-4 rounded-full border border-white/20 transition-all duration-300 
            ${isPlaying 
                ? 'bg-green-500/50 animate-pulse shadow-[0_0_15px_rgba(74,222,128,0.5)]' 
                : 'bg-black/50 hover:bg-black/70'
            }
        `}
        title="Toggle Music"
      >
        {isPlaying ? "🔊" : "🔇"}
      </button>
    </div>
  );
}