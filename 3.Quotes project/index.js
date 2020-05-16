const jokes=[
'What do you call a guy lying on your doorstep? Matt.',
'Nurse: Doctor, there\'s a patient that says he\'s invisible. Doctor: Well, tell him I can\'t see him right now!',
'Why does Waldo only wear stripes? Because he doesn\'t want to be spotted',
'I decided to sell my Hoover… well it was just collecting dust.',
'When does a joke become a dad joke? When it becomes apparent.',
'Why didn’t the orange win the race? It ran out of juice.',
'How many tickles does it take to tickle an octopus? Ten-tickles!',
'Why couldn\'t the kid see the pirate movie? Because it was rated arrr!',
'Why do ducks make great detectives? They always quack the case.',
'How does a dyslexic poet write? Inverse.',
'I used to be a banker, but I lost interest.',
'What kind of bagel can fly? A plain bagel.',
'They\'re making a movie about clocks. It\'s about time.',
'What kind of tree fits in your hand? A palm tree!',
'How many South Americans does it take to change a lightbulb? A Brazilian.',
'What happens when you anger a brain surgeon? They will give you a piece of your mind.',
'Did you hear about the cow who jumped over the barbed wire fence? It was udder destruction.'
];	



const jokebtn=document.querySelector('.jokebtn');
const joke=document.querySelector('#joke');

jokebtn.addEventListener('click',getjoke);

function getjoke(){
	let random=Math.floor(Math.random()*jokes.length);
	joke.innerHTML=jokes[random];
}