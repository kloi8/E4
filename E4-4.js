function Device(name, power) {
    this.feature = 'electrician';
    this.name = name,
    this.power = power
}

Device.prototype.onStatus = function() {
    console.log(`The ${this.name} is turned on`);
}

Device.prototype.offStatus = function() {
    console.log(`The ${this.name} is turned off`);
}

lamp.prototype = new Device ('Lamp', '180')

function lamp(series, colour) {
    this.powerControl = true,
    this.series = series
    this.colour = colour
}

lamp.prototype.colour = function (colour) {
    console.log(`This device has ${this.colour} colour`)
}

pk.prototype = new Device ('Computer', '220')

function pk(series, colour) {
    this.series = series,
    this.colour = colour
}

const lant = new lamp('AR-804', 'green')
const desk = new pk('SHHWr09/3A', 'black')


lant.offStatus()
console.log(desk.power)
desk.onStatus()
console.log(lant.colour)




