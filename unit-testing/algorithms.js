// Palindrome

function palindrome(str) {
  const result = str.split('').reverse().join('');

  return str === result;
}

// Integer reversal

function reverseInteger(num) {
  const result = num.toString().split('').reverse().join('');

  return parseInt(result) * Math.sign(num);
}

// String Reversal

function reverseString(str) {
  const array = str.split('');
  array.reverse();
  return array.join('');
}

// Finding Vowels

function vowelsFind(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
}
