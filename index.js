function scuberGreetingForFeet(ride) {
  // Write your code here!
  let result;
  if (ride <= 400) {
    return result = 'This one is on me!'
  } else if (ride > 400 && ride < 2000) {
    return result = 'That will be twenty bucks.'
  } else if (ride >= 2000 && ride <= 2500) {
    return result = 'I will gladly take your thirty bucks.'
  } else if (ride > 2500) {
    return result = 'No can do.';
  }
}


function ternaryCheckCity(city) {
  // Write your code here!
  let result;
  if (city === 'NYC') {
    return result = 'Ok, sounds good.';
  } else {
    return result = 'No go.'
  }
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  let result;
  switch (true) {
    case (tip === 'generous'):
      result = 'Thank you so much.';
      return result;
      break;
    case (tip === 'not as generous'):
      result = 'Thank you.'
      return result;
      break;
    case (tip === 'thanks for everything'):
      result = 'Bye.';
      return result;
  }
}