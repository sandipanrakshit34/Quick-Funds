import Button from "./Button/Button"

import Card from '../Images/Card.png';
import Illustartion from '../Images/illustartion.png';
import Left_hand from '../Images/Left_hand.png';
import Mobile from '../Images/mobile.png';
import Speech_bubble from '../Images/Speech_bubble.png';
import { useState } from "react";
import CRUD from "./CRUD";

function Tabs() {
    let [tabs, setTabs] = useState(0)
    let [randomImage, setRandomImage] = useState(0);
    
    let images = [Card, Illustartion, Left_hand, Mobile, Speech_bubble];

    function randomImageGenertatoy() {
        setRandomImage(Math.floor(Math.random() * images.length )) 
        // console.log(randomImage);   
    }

    function RandomImageGenerator() {
        setTabs(0);
        // console.log(tabs);
    }

  return (
    <>
    <div className="h-[100px] flex justify-center mt-10 ">
        <div className="flex gap-5">
            <div onClick={RandomImageGenerator}><Button value="Random Image Generator" variant="Primary"/></div>
            <div onClick={() => {setTabs(1)}}><Button value="CRUD App" variant="Primary"/></div>
            <div onClick={() => {setTabs(2)}}><Button value="Tab 3" variant="Primary"/></div>
        </div>
    </div>

    <section className={`${tabs == 0 ? "block" : "hidden"}`}>
        <div className="flex justify-center  bg-[#2A6877] p-10" >
            <div className="flex flex-col justify-center items-center">
                <img src={images[randomImage]} alt="" className="w-[300px] h-[240px]" />
                <div onClick={randomImageGenertatoy}>
                <Button value="Change" variant="Secondary" />
                </div>
            </div>
        </div>
    </section>

    <section className={`${tabs == 1 ? "block" : "hidden"}`}>
        <CRUD />
    </section>

    <section className={`${tabs == 2 ? "block" : "hidden"}`}>
        <p>Woooooooooo</p>
    </section>
    </>
  )
}

export default Tabs