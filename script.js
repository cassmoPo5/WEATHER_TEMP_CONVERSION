// degrees in kelvin
const kelvin = 293;
// kelvin to celcius
const celsius = kelvin - 273;
// celcius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// rounding fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// newton conversion
let newton = celsius * (33/100);
// rounding newton
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);