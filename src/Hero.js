import React from "react";
import "./Hero.css";
import animatedgwen from "./images/gwen.png";
import animated_leg from "./images/animated_leg.png"
import bg_asset from "./images/bg_asset.png"
import DD from "./images/DD.png"
import shadow from "./images/shadow.png"

export default function MainPage() {
    return (
        <div className="main">
            <img src={animatedgwen} alt="animatedgwen" className="animatedgwen" />
            <img src={animated_leg} alt="leg" className="leg" />
            <img src={shadow} alt="shadow" className="shadow" />
            <img src={bg_asset} alt="bg-asset" className="bg-asset" />
            <div className="Developer">
                <img src={DD} alt="DD" />
            </div>
        </div>
    );
}