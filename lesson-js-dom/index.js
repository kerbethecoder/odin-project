const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redParagraph = document.createElement('p');
redParagraph.textContent = `Hey I'm red!`;
redParagraph.style.color = 'red';

container.appendChild(redParagraph);

const headingThree = document.createElement('h3');
headingThree.textContent = `I'm a blue h3!`;
headingThree.style.color = 'blue';

container.appendChild(headingThree);

const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

container.appendChild(div);

const divH1 = document.createElement('h1');
divH1.textContent = `I'm in a div`;

const divP = document.createElement('p');
divP.textContent = 'ME TOO!';

div.appendChild(divH1);
div.appendChild(divP);

const button1 = document.createElement('button');
button1.textContent = 'CLICK ME!';
button1.setAttribute('id', 'btn');
container.appendChild(button1);

const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//   alert('Hello my World!');
// });

btn.addEventListener('click', (e) => {
  console.log((e.target.style.backgroundColor = 'blue'));
});

const bt1 = document.createElement('button');
bt1.textContent = 'Button 1';
bt1.setAttribute('id', '1');
const bt2 = document.createElement('button');
bt2.textContent = 'Button 2';
bt2.setAttribute('id', '2');
const bt3 = document.createElement('button');
bt3.textContent = 'Button 3';
bt3.setAttribute('id', '3');

container.appendChild(bt1);
container.appendChild(bt2);
container.appendChild(bt3);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
