import React, {useEffect} from 'react';

const handleRefreshClick = () => {
    window.location.reload();
};
const handleKeyPress = (e) => {
    if (e.key === "Enter") {
        handleRefreshClick();
    }
};
const ResultModal = ({ answer, count}) => {
    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
    }, []);
    return (
        <div className="modalContainerStyle"  onKeyDown={(e) => handleKeyPress(e)}>
            <h1 className="headingStyle">
                {count >= 7 ? "You lost!" : "You won!"}
            </h1>
            <p>The answer was the {answer.Name}.</p>
            <img src={answer.Url} className="imageStyle" alt={answer.Name} />
            <br />
            <button onClick={handleRefreshClick} className="buttonStyle">
                Play again
            </button>
        </div>
    );
};

export default ResultModal;
