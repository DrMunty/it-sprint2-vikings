import {Viking} from "./Viking";
import {Saxon} from "./Saxon";
import { receiveMessageOnPort } from "worker_threads";


export class War {
        public vikingArmy: Viking[]
        public saxonArmy: Saxon[]
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking: Viking): void {
        this.vikingArmy.push(viking)

    }  
    
    addSaxon(saxon: Saxon): void {
        this.saxonArmy.push(saxon)

    }

    vikingAttack(){
    const randomViking = this.vikingArmy[0]; 
    
    const randomSaxon = this.saxonArmy[0];

    const result = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(0, 1);
    }
    return result;
    }

    saxonAttack(){
    const randomViking = this.vikingArmy[0]; 
    
    const randomSaxon = this.saxonArmy[0];

    const result = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
        this.vikingArmy.splice(0, 1);
    }
    return result;
    }

    showStatus(){
        if (this.saxonArmy = []){
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy = []){
            return "Saxons have fought for their lives and survive another day..."
        }
        else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }





}