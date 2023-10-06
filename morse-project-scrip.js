
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
	' ':'/',
	'1':'.----',
	'2':'..---',
	'3':'...--',
	'4':'....-',
	'5':'.....',
	'6':'-....',
	'7':'--...',
	'8':'---..',
	'9':'----.',
	'0':'-----',
	'.':'.-.-.-',
	',':'--..--',
	'?':'..--..',
	'!':'-.-.--',
	'(':'-.--.',
	')':'-.--.-',
	'&':'.-...',
	':':'---...',
	'=':'-...-',
	'+':'.-.-.',
	'@':'.--.-.',
	';':'-.-.-.',
	'_':'..--.-',
	'-':'-....-',
	'$':'...-..-',
	"'":".----.",
	'"':'.-..-.',
	'/':'-..-.'
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
	return messageMorse;
}

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
	'/': " ",
	'.----':"1",
	'..---':"2",
	'...--':"3",
	'....-':"4",
	'.....':"5",
	'-....':"6",
	'--...':"7",
	'---..':"8",
	'----.':"9",
	'-----':"0",
	'.-.-.-':".",
	'--..--':",",
	'..--..':"?",
	'-.-.--':"!",
	'-.--.':"(",
	'-.--.-':")",
	'.-...':"&",
	'---...':":",
	'-...-':"=",
	'.-.-.':"+",
	'.--.-.':"@",
	'-.-.-.':";",
	'..--.-':"_",
	'-....-':"-",
	'...-..-':"$",
	".----.":"'",
	'.-..-.':'"',
	'-..-.':"/"
}

const getMorseCharacterList = (morse) => {
    let morseArray = morse.split(" "); 			
	return morseArray
}

const translateMorseCharacter = (char) => {
	return morseToLatin[char];
}

const decode = (text) => {
	let morseArray = getMorseCharacterList (text);
	let messageText = [];

	for (i = 0; i < morseArray.length; i++) {
		messageText.push(translateMorseCharacter(morseArray[i]));		
	}
	return messageText.join("");
}

const handleEncode = () => {
	message = document.getElementById("textbox").value //get text from textarea
	document.getElementById("displayMorse").innerHTML = encode(message)
}
document.getElementById("buttonEncode").addEventListener("click", handleEncode)

const handleDecode = () => {
	message = document.getElementById("morsebox").value
	document.getElementById("displayText").innerHTML = decode(message)
}
document.getElementById("buttonDecode").addEventListener("click", handleDecode)

