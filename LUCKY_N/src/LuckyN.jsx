import "./LuckyN.css"
import { useState } from "react";
import Dice from "./Dice";
import { getRolls } from "./utils";
import Button from "./Button";


export default function LuckyN({title="LUCKY N", numDice=2, winCheck}){

    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = winCheck(dice);
    const roll = () => setDice(getRolls(numDice));
        

    return (
        <main>
            <h1>{title} {isWinner && "YOU WON!!"}</h1>
            <Dice dice={dice}/>
            <Button clickFunc={roll}/>
        </main>
    );
}