import { useState } from "react";

import { hints,defaultHints } from "./data";
import './styles/MainContent.css'
import GameBoard from "./gameBoard";
import TitleCard from "./titleCard";
import ResultModal from "./resultModal";
const answer = hints[Math.floor(Math.random() * hints.length)]
function MainContent() {
    //amount of guesses
    const [getCount, setCount] = useState(0);
    //guesses + default text
    const [getGuesses,setGuesses] = useState([defaultHints]);
    const [getUserInput, setUserInput] = useState("");
    //hover handle
    const [hoveredHint, setHoveredHint] = useState(null);
    //filter while typing
    const [getFilter, setFilter] = useState(hints);
    //should dropdown be open
    const [getHintDropdownState, setHintDropdownState] = useState(false)
    //should modal be open
    const [getModalState, setModalState] = useState(false)
    const handleHintSet = (hint) => {
        setUserInput("");
        setFilter(hints);
        setHintDropdownState(false);
        document.getElementById("MainInput").value = ""; // Reset the value to an empty string
        setCount(getCount + 1);
        if (getCount >= 7){
            setModalState(true)
            return;
        }

        if (hint.Name == answer.Name){
            setModalState(true);
        }
        // Create a copy of the current guesses array
        const newGuesses = [...getGuesses];
        // Add new elements from hints where Name is equal to the hint
        newGuesses.push(...hints.filter(item => item.Name === hint.Name));

        // Update the guesses state with the new array
        setGuesses(newGuesses);
    };


    const handleInpChange = (e) => {
        const val = e.target.value.toLowerCase(); // Convert to lowercase for case-insensitive matching
        const filteredHints = hints.filter((hint) =>
            hint.Name.toLowerCase().includes(val)
        );

        setFilter(filteredHints);
        setUserInput(val);
        setHintDropdownState(val.length > 0 && filteredHints.length > 0);
    };

    const handleHintHover = (hint) => {
        setHoveredHint(hint);
    };

    const handleHintLeave = () => {
        setHoveredHint(null);
    };

    const getButtonStyle = (hint) => {
        return {
            width: "100%",
            height: "5vh",
            fontSize: "16px",
            backgroundColor: hoveredHint === hint ? "#e0e0e0" : "#FFFF",
            border: "0",
            textAlign: "left",
        };
    };

    return (
        <div className="wrapperStyle">
            <TitleCard></TitleCard>
            <input
                type="text"
                placeholder={`Guess ${getCount + 1} of 8`}
                className="inputStyle"
                onChange={handleInpChange}
                id="MainInput"
            />
            {getHintDropdownState && (
                <div className="input2Style">
                    {getFilter.map((hint, index) => (
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
            {getCount > 0 && (
                <div style={{marginTop:"50px",marginBottom:"50px"}}>
                    {getGuesses.map((e,index) => (
                        <GameBoard objectProp={e} answerProp={answer} key={index}/>
                    ))}
                </div>
            )}

            {getModalState && (<ResultModal answer={answer} count={getCount}/>)}

        </div>
    );


}

export default MainContent;
