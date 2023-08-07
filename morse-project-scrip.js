
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
	console.log(messageMorse)
	return messageMorse;
}

encode ('Morse Code')
encode ('merde')



