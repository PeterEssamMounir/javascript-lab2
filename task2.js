function largestWord(str) {
    let words = str.split(' ');
    let maxLength = 0;
    let result = '';
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i].replace(/[^a-zA-Z ]/g, "");
      if (word.length > maxLength) {
        maxLength = word.length;
        result = word;
      }
    }
  
    return result;
  }
  
  let sentence = "this is a javascript string demo";
  let largest = largestWord(sentence);
  console.log(largest);
  