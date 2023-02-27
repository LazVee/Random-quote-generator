function time() {
  const date = new Date();

//date
const year = date.getFullYear();
const monthNum = date.getMonth();
const day = date.getDay();

var month;

// switch (key) {
//   case value:
//     break;

//     default:
//       break;
// }
switch (monthNum) {
  case 0:
    month = 'January';
    break;
  case 1:
    month = 'February';
    break;
  case 2:
    month = 'March';
    break;
  case 3:
    month = 'April';
    break;
  case 4:
    month = 'May';
    break;
  case 5:
    month = 'June';
    break;
  case 6:
    month = 'July';
    break;
  case 7:
    month = 'August';
    break;
  case 8:
    month = 'September';
    break;
  case 9:
    month = 'October';
    break;
  case 10:
    month = 'November';
    break;
  case 11:
    month = 'December';
    break;

    default:
      month = 'In the future';
      break;
}

const fulldate =`${month}/${day}/${year}`;

// ...Time...
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var am_pm;

if (hour < 10) {
  hour = `0${hour}`;
} else {
  hour = hour;
}

if (min < 10) {
  min = `0${min}`;
} else {
  min = min;
}

if (sec < 10) {
  sec = `0${sec}`;
} else {
  sec = sec;
}

if (hour < 12) {
  am_pm = 'am';
} else if (hour >= 12 && hour < 24) {
  am_pm = 'pm';
}

const clockWrapper = document.getElementById('clockWrapper');

let clock = `
<span>
  <span class="digit">${hour}</span>
  <span class="col">:</span>
  <span class="digit">${min}</span>
  <span class="col">:</span>
  <span class="digit">${sec}</span>
  <span class="am-pm">${am_pm}</span>
</span>
<div class="full-date">${fulldate}</div>`;

clockWrapper.innerHTML = clock;
}

setInterval(() => {
  time();
}, 1000);

//--------------------------

const quotes = [
  'Before you share your secrets, make sure that your listener is not a speaker, and definitely not a script writer.',
  "It's not so much the destination as it is the journey.",
  "I'm dishonest, and a dishonest man you can always trust to be dishonest. Honestly. It's the honest ones you want to watch out for, because you can never predict when they're going to do something incredibly … stupid.",
  "If you were waiting for the opportune moment, that was it.",
  "Why fight when you can negotiate?",
  "Wherever we want to go, we'll go.",
  "Not all treasure is silver and gold, mate.",
  "The problem is not the problem. The problem is your attitude about the problem. Do you understand?",
  "Did everyone see that? Because I will not be doing it again.",
  "You are without a doubt the worst pirate I've ever heard of. But you have heard of me.",
  "This is either madness, or brilliance. It's remarkable how often those two traits coincide.",
  "I'm disinclined to acquiesce to your request.",
];


function tweetQuote(quote) {
  const quoteWrapper = document.getElementById('quoteWrapper');
  let numb_of_quotes = quote.length;

  let randNumb = Math.floor(Math.random() * numb_of_quotes);

  quote.map((val, index, array) => {
    if (index === randNumb) {
    quoteWrapper.innerHTML = val;
    }
  });
};
setInterval(() => {
  tweetQuote(quotes);
}, 5000);
