/*------------------------------------  Coding Challenge #1 -----------------------------------------*/
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

document
  .querySelector('.poll')
  .addEventListener('click', function registerNewAnswer() {
    const favProgLang = Number(
      prompt(`What is your favourite programming language?
  0: JavaScript
  1: Python
  2: Rust
  3: C++
  (Write option number)`)
    );
    //console.log(typeof favProgLang);
    if (typeof favProgLang === 'number' && favProgLang in [0, 1, 2, 3]) {
      poll.answers[favProgLang]++;
      //console.log(poll.answers);
    } else {
      console.log(`answer ${favProgLang} wouldn't make sense, right?`);
    }
    displayResults(poll.answers);
  });

function displayResults(type) {
  if (typeof type === String) {
    console.log(`Poll results are ${type.split(',')}`);
  } else {
    console.log(type);
  }
}
