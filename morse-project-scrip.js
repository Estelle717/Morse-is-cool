
// encode section

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

// decode section

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

// encode and decode buttons actions

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

// copy buttons actions

const copyMorse = () => {
	messageMorse = document.getElementById("displayMorse").innerHTML
	navigator.clipboard.writeText(messageMorse)
	alert(`Copied the text:  ${messageMorse}`)
}
document.getElementById("buttonCopyMorse").addEventListener("click", copyMorse)

const copyText = () => {
	messageText = document.getElementById("displayText").innerHTML
	navigator.clipboard.writeText(messageText)
	alert(`Copied the text:  ${messageText}`)
}
document.getElementById("buttonCopyText").addEventListener("click", copyText)
