import { useState, useEffect } from "react";
import getShuffledCards from "../geShuffleCards";
import cardImage from "../cardImage";

export const useGameLogic = () => {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

    const shuffle = () => {
        const newDeck = getShuffledCards(cardImage)
        setCards(newDeck)
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(0) // Reset turns on new game
    }

    const handleChoice = (card) => {
        // FIX 1: Add '?' to prevent crash when choiceOne is null
        if (card.id === choiceOne?.id || card.matched) return
        
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurn => prevTurn + 1)
    }

    useEffect(() => {
        let timer

        // Only run if we have TWO cards
        if (choiceOne && choiceTwo) {
            
            // Check for match
            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return { ...card, matched: true }
                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            } else {
                // FIX 2: Move ELSE here (inside the check)
                // FIX 3: Change setTimer to setTimeout
                timer = setTimeout(() => resetTurn(), 1000)
            }
        }

        return () => clearTimeout(timer)

    }, [choiceOne, choiceTwo])

    // Auto-start
    useEffect(() => {
        shuffle()
    }, [])

    return { cards, turns, shuffle, handleChoice, choiceOne, choiceTwo }
}