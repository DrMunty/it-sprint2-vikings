export class Soldier {

    constructor (public health: number, public strength: number){
    }

    attack(){
        return this.strength
    }

    receiveDamage(damage:number){
        this.health -= damage

    }
}