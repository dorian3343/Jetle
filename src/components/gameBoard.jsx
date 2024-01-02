import React from "react";
import "./styles/GameBoard.css"; // Import the CSS file

function GameBoard({ objectProp, answerProp }) {
    return (
        <div>
            <div className="header-div">
                <div
                    className={`category-style ${
                        objectProp.Name === answerProp.Name ? "matched-category" : ""
                    }`}
                >
                    <p>{objectProp.Name}</p>
                </div>
                <div
                    className={`category-style ${
                        objectProp.Manufacturer === answerProp.Manufacturer
                            ? "matched-category"
                            : ""
                    }`}
                >
                    <p>{objectProp.Manufacturer}</p>
                </div>
                <div
                    className={`category-style ${
                        objectProp.Role === answerProp.Role ? "matched-category" : ""
                    }`}
                >
                    <p>{objectProp.Role}</p>
                </div>
                <div
                    className={`category-style ${
                        objectProp.WingType === answerProp.WingType
                            ? "matched-category"
                            : ""
                    }`}
                >
                    <p>{objectProp.WingType}</p>
                </div>
                <div
                    className={`category-style ${
                        objectProp.Generation === answerProp.Generation
                            ? "matched-category"
                            : ""
                    }`}
                >
                    <p>{objectProp.Generation}</p>
                </div>
                <div
                    className={`category-style ${
                        objectProp.EngineCount === answerProp.EngineCount
                            ? "matched-category"
                            : ""
                    }`}
                >
                    <p>{objectProp.EngineCount}</p>
                </div>
                <div
                    className={`category-style ${
                        objectProp.Block === answerProp.Block ? "matched-category" : ""
                    }`}
                >
                    <p>{objectProp.Block}</p>
                </div>
                <div
                    className={`category-style ${
                        objectProp.CrewCount === answerProp.CrewCount
                            ? "matched-category"
                            : objectProp.CrewCount.includes(answerProp.CrewCount) ||
                            answerProp.CrewCount.includes(objectProp.CrewCount)
                                ? "partial-match-category"
                                : ""
                    }`}
                >
                    <p>{objectProp.CrewCount}</p>
                </div>
            </div>
        </div>
    );
}

export default GameBoard;
