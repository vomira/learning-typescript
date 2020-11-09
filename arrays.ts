const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
    
]

// Help with inference when extracting values
const carBrand = carMakers[0];

// prevent incompatible values
carMakers.push(22);

//flexible types
const importantDates: (Date | string)[] = ['2030-10-10']
