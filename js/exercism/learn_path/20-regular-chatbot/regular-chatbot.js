// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  const regexp = /chatbot/i;
  let matchResults = command.match(regexp);
  if (matchResults?.index === 0){
    return true;
  }else{
  return false;}
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  const regexp = new RegExp(/emoji\d+/, 'gi');
  const matchResults = [...message.matchAll(regexp)];
  if (matchResults !== undefined){
    for (let key in matchResults){
      message = message.replace(matchResults[key][0], '');
    }
    return message;
  }
  return message;
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {   
    const regexp = /^\(\+\d{1,3}\)\s\d{3}-\d{3}-\d{3}/;
    if (regexp.test(number)) {
        return "Thanks! You can now download me to your phone.";
    } else {
        return `Oops, it seems like I can't reach out to ${number}`;
    }
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  const regexp = /\w+\.\w{2,3}/gi;
  const matchResults = [...userInput.matchAll(regexp)];
  let array = []
  if (matchResults !== undefined){
    for (let key in matchResults){
      array.push(matchResults[key][0]);
    }
    return array;
  } 
  return null;
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  let [secondName, firstName] = fullName.split(/,/)
  return `Nice to meet you, ${firstName.trim()} ${secondName}`;
}
