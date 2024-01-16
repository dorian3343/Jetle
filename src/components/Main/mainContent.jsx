import { useState } from "react";

import { hints,defaultHints } from "../../Data/data";
import './MainContent.css'
import GameBoard from "../GameBoard/gameBoard";
import TitleCard from "../TitleCard/titleCard";
import ResultModal from "../Modal/resultModal";
const answer = hints[Math.floor(Math.random() * hints.length)]
function MainContent() {
    const [gameState, setGameState] = useState({
        count: 0,                     // amount of guesses
        guesses: [defaultHints],      // guesses + default text
        userInput: "",                // user input
        hoveredHint: null,            // hover handle
        filter: hints,                // filter while typing
        hintDropdownState: false,     // should dropdown be open
        modalState: false             // should modal be open
    });

    function handleHintSet(hint) {
        setGameState(prevState => ({
            ...prevState,
            userInput: "",
            filter: hints,
            hintDropdownState: false,
            count: prevState.count + 1,
        }));

        if (gameState.count >= 7) {
            setGameState(prevState => ({...prevState, modalState: true}));
            return;
        }

        if (hint.Name === answer.Name) {
            setGameState(prevState => ({...prevState, modalState: true}));
        }

        const newGuesses = [...gameState.guesses];
        newGuesses.push(...hints.filter(item => item.Name === hint.Name));

        setGameState(prevState => ({...prevState, guesses: newGuesses}));
    };

    function handleInpChange(e) {
        const val = e.target.value.toLowerCase(); // Convert to lowercase for case-insensitive matching
        const filteredHints = hints.filter((hint) =>
            hint.Name.toLowerCase().includes(val)
        );

        setGameState(prevState => ({
            ...prevState,
            filter: filteredHints,
            userInput: val,
            hintDropdownState: val.length > 0 && filteredHints.length > 0
        }));
    };

    function handleHintHover(hint) {
        setGameState(prevState => ({...prevState, hoveredHint: hint}));
    };

    function handleHintLeave() {
        setGameState(prevState => ({...prevState, hoveredHint: null}));
    };


    const getButtonStyle = (hint) => {
        return {
            width: "100%",
            height: "5vh",
            fontSize: "16px",
            backgroundColor: gameState.hoveredHint === hint ? "#e0e0e0" : "#FFFF",
            border: "0",
            textAlign: "left",
        };
    };

    return (
        <div className="wrapperStyle">
            <TitleCard></TitleCard>
            <input
                type="text"
                placeholder={`Guess ${gameState.count + 1} of 8`}
                className="inputStyle"
                onChange={handleInpChange}
                id="MainInput"
            />
            {gameState.hintDropdownState && (
                <div className="input2Style">
                    {gameState.filter.map((hint, index) => (
                        <button
                            key={index}
                            style={getButtonStyle(hint)}
                            onMouseEnter={() => handleHintHover(hint)}
                            onMouseLeave={handleHintLeave}
                            onClick={() => handleHintSet(hint)}
                        >
                            {hint.Name}
                        </button>
                    ))}
                </div>
            )}
            {gameState.count > 0 && (
                <div style={{marginTop: "50px", marginBottom: "50px"}}>
                    {gameState.guesses.map((e, index) => (
                        <GameBoard objectProp={e} answerProp={answer} key={index}/>
                    ))}
                </div>
            )}

            {gameState.modalState && (
                <ResultModal answer={answer} count={gameState.count}/>
            )}
        </div>
    );
}

export default MainContent;
