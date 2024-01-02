import React from 'react';
const handleRefreshClick = () => {
    window.location.reload();
};
const ResultModal = ({ answer, count}) => {
    return (
        <div className="modalContainerStyle">
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
