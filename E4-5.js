class Device {
    constructor(name, power) {
        this.feature = 'electrical';
        this.name = name;
        this.power = power;
    }

    onStatus = function() {
        console.log(`The ${this.name} is turned on`);
    }

    offStatus = function() {
        console.log(`The ${this.name} is turned off`);
    }
} 
   
   
class Lamp extends Device {
    constructor(series, colour, name, power) {
        super(name, power);
        this.powerControl = true;
        this.series = series;
        this.colour = colour;
    }

    colour = function() {
        console.log(`This device has ${this.colour} colour`)
    }
}



class Pk extends Device {
    constructor (series, colour, name, power) {
        super(name, power);
        this.series = series,
        this.colour = colour
        }
    colour = function(colour) {
        console.log(`This device has ${this.colour} colour`)
    }
}


const lant = new Lamp('AR-804', 'green', 'Lant', 180)
const desk = new Pk('SHHWr09/3A', 'black', 'Desk', 220)


lant.power()
lant.offStatus()
desk.onStatus()
desk.colour()