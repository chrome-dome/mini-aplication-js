class Warrior{
    #name;
    #attack;
    #hp;

    constructor(name, attack, hp){
        this.#name = name;
        this.#attack = attack;
        this.#hp = hp;
    }

    getName(){
        return this.#name;
    }
    getAttack(){
        return this.#attack;
    }
    getHp(){
        return this.#hp;
    }

    setHp(hp){
        this.#hp = hp;
    }

    levelUp(){
        this.#hp *=1.1;
        this.#attack *=1.1;
    }

}

class Arena{
    #trump1;
    #trump2;
    #attackingTrump = random(1,2);

    constructor(trump1, trump2){

        if(!(trump1 instanceof Warrior)){
            throw new Error('trump1 should be instance of Warrior class!');
        }
        if(!(trump2 instanceof Warrior)){
            throw new Error('trump2 should be instance of Warrior class!');
        }

        this.#trump1 = trump1;
        this.#trump2 = trump2;
    }

    fight(){

        const attacker = this.#attackingTrump === 1 ? this.#trump1 : this.#trump2;
        const defender = this.#attackingTrump === 1 ? this.#trump2 : this.#trump1;

        this.#attackingTrump = this.#attackingTrump === 1 ? 2:1; 

        defender.setHp(defender.getHp() - attacker.getAttack());

        console.log(attacker.getName(), 'is attacking', defender.getName(), 'and now he has', defender.getHp(), 'Hp');

        if(defender.getHp() <= 0){
            console.log(defender.getName(), "loss the fight")
        }

        return null;
    }
}

const random = (min, max) => Math.round(Math.random()*(max-min)+min);

const arena = new Arena(
    new Warrior('Waldek "prince of trumping"', random(8, 12), random(90, 120)),
    new Warrior('Wiesiek "red nose"', random(8, 12), random(90, 120)),
)

let winner;

do{
    winner = arena.fight();
}while(winner === null);

winner.levelUp();

console.log(winner.getName(), 'is a winner!')