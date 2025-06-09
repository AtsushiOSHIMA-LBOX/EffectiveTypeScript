const elem = document.getElementById('what-time-is-it');

// ifによる型の絞り込み
if (elem) {
  elem.innerHTML = 'PartyTime'.blink();
} else {
  elem // ちゃんとnullになっている
  alert('Element not found');
}

const elem2 = document.getElementById('what-time-is-it');
if (!elem2) throw new Error('Element not found');
elem2; // HTMLElementのみになっている

function contains(text: string, search: string | RegExp) {
  // instanceof
  if (search instanceof RegExp) {
    return !!search.exec(text); // RegExp
  }
  return text.includes(search); // string
}

interface Apple { isGoodForBaking: boolean; }
interface Orange { numSlices: number; }
function pickFruit(fruit: Apple | Orange) {
  if ('isGoodForBaking' in fruit) {
    fruit // Apple
  } else {
    fruit // Orange
  }
  fruit // Apple | Orange
}

function contains2(text: string, terms: string | string[]) {
  const termList = Array.isArray(terms) ? terms : [terms]; // string[]
}