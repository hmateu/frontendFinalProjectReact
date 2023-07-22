import React from "react";
import './AttractionCard.css';

export const AttractionCard = ({ picture, name, description, minHeight, maxHeight, length }) => {
    return (
        <div className="attractionCardStyle">
            <div className="attractionPicture">{picture}</div>
            <div className="attractionInformation">
                <div className="nameAttraction">{name}</div>
                <div className="secondaryInformation">
                    <div className="descriptionAttraction">{description}</div>
                    <div className="minHeightAttraction">{minHeight}</div>
                    <div className="maxHeightAttraction">{maxHeight}</div>
                    <div className="lengthAttraction">{length}</div>
                </div>
            </div>
            <div className="attractionButton">
                <div className="button">Descubrir</div>
            </div>
        </div>
    );
}