function greet(who: string) {
  console.log(`Hello, ${who}`);
}

greet("Shota");

let city = 'new york city';
console.log(city.toUppercase())

const states = [
  { name: 'Alabama', capital: 'Montgomery' },
  { name: 'Alaska', capital: 'Juneau' },
  { name: 'Arizona', capital: 'Phoenix' },
];

for (const state of states) {
  console.log(state.capitol);
}

interface State {
  name: string;
  capital: string;
}

const states2: State[] = [
  { name: 'Alabama', capitol: 'Montgomery' },
  { name: 'Alaska', capitol: 'Juneau' },
  { name: 'Arizona', capitol: 'Phoenix' },
];

