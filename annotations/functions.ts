const add = (a: number, b: number): number => {
    return a + b;
};

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number {
    return a*b
}

const logger = (message: string): void => {
    console.log(message)
}
//never => function will never fully execute (e.g. an error is thrown)
const throwError = (message: string): never => {
    throw new Error(message);
}

const forecast = {
    date: new Date(),
    weather: 'sunny'
}

//Object destructuring with annotations
const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
}

logWeather(forecast);