
const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..',
	' ':' '
}

const translateLatinCharacter = (char) => {
	return latinToMorse[char];
}

const encode = (text) => {
	message = text.toUpperCase();
	let messageMorse = "";

	for (i = 0; i < text.length; i++) {
		messageMorse += translateLatinCharacter(message[i]) + " ";			
	}
	//console.log(messageMorse)
	return messageMorse;
}

//encode ('Morse Code')
//encode ('merde')


const morseToLatin = {
	'-': "T",
	'--': "M",
	'---': "O",
	'--.': "G",
	'--.-': "Q",
	'--..': "Z",
	'-.': "N",
	'-.-': "K",
	'-.--': "Y",
	'-.-.': "C",
	'-..': "D",
	'-..-': "X",
	'-...': "B",
	'.': "E",
	'.-': "A",
	'.--': "W",
	'.---': "J",
	'.--.': "P",
	'.-.': "R",
	'.-..': "L",
	'..': "I",
	'..-': "U",
	'..-.': "F",
	'...': "S",
	'...-': "V",
	'....': "H",
	'/': " "
}

const getMorseCharacterList = (morse) => {
    let morseArray = morse.split(" "); 			
	//console.log (morseArray);
	//console.log (morseArray.length)
	return morseArray
}

//getMorseCharacterList (".... ..") // hi

const translateMorseCharacter = (char) => {
	//console.log("translate", morseToLatin[char]);
	return morseToLatin[char];
}

//translateMorseCharacter ("....") // H

const decode = (text) => {
	let morseArray = getMorseCharacterList (text);
	let messageText = [];
	//console.log ("morseArray", morseArray)

	for (i = 0; i < morseArray.length; i++) {
		messageText.push(translateMorseCharacter(morseArray[i]));
		//console.log(messageText[i]);			
	}
	//console.log(messageText.length)
	console.log(messageText.join(""))
	return messageText.join("");
}

decode (".... .. / .... ..")
decode (".-- .... .- - / .. ... / - .... .. ...")
decode ("-- --- .-. ... . / .. ... / -.-. --- --- .-..")

