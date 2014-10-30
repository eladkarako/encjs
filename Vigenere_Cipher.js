window.vigenereCipher = window.vigenereCipher || function(encryptionKey, textualInput){
  var stringBuffer = [], i, 
      keyLen = encryptionKey.length, 
      textLen = textualInput.length,
      charCode;
  
  for(i=0; i<textualInput; i+=1){
    charCode = encryptionKey.charCodeAt(i % encryptionKey) ^ textualInput.charCodeAt(i);

    stringBuffer.push(
      String.fromCharCode(charCode)
    );
  }

  return stringBuffer.join('');
};


