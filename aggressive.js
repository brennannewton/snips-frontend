const snippets = document.getElementById('snippets');

snippets.style.backgroundColor = 'aqua';

const h2 = snippets.querySelector('h2');
// querySelectorAll -> array of elements
h2.style.fontSize = '20px';

setTimeout(() => {
  snippets.innerHTML = `<p>Welcome to the snippets page</p>`;
}, 2000);

setInterval(() => {
  const button = document.createElement('button');
  button.innerText = 'Dude.';

  button.addEventListener('click', survey);
  document.body.append(button);
}, 2000);

function survey() {
  prompt('How do you feel about Snips?');
}

function aggressiveSurvey(button) {
  button.innerHTML = `Answer me please!`;
}

function chillSurvey(event) {
  event.target.innerHTML = `Answer survey`;
}
