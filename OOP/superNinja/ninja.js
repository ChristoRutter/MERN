class Ninja{
    constructor(name, health) {  
        this.name = name
        this.health = health
    }
    
    speed = 3
    strength = 3

    sayName() {              
        console.log(this.name)   
    }

    showStats(){
        console.log(`name: ${this.name}`)
        console.log(`strength: ${this.strength}`)
        console.log(`speed: ${this.speed}`)
        console.log(`health: ${this.health}`)
    }
    drinkSake(){
        this.health += 10
    }
}

class Sensei extends Ninja {
    constructor(name, health) {
        super("Sensei", 200);
    }

    speed = 10
    strength = 10
    wisdom = 10
    
    speakWisdom() {
        // by using super, we can call the parent method
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        
    }

    showStats() {
        // by using super, we can call the parent method
        super.showStats();
        
    }
}



// const ninja1 = new Ninja("Hyabusa", 100);
// ninja1.sayName();
// ninja1.showStats();


// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"


