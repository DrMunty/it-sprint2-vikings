import {Soldier} from "../src/Soldier";
export class Viking extends Soldier{
    constructor(public name: string, health: number, strength: number){
        super(health, strength)
    }

    receiveDamage(damage:number){
        this.health -= damage;

        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}