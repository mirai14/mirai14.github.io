
function icao(){

  const alphabet = {
    'A': 'Alfa',
    'B': 'Bravo',
    'C': 'Charlie',
    'D': 'Delta',
    'E': 'Echo',
    'F': 'Foxtrot',
    'G': 'Golf',
    'H': 'Hotel', 
    'I': 'India',
    'J': 'Juliett',
    'K': 'Kilo',
    'L': 'Lima',
    'M': 'Mike',
    'N': 'November',
    'O': 'Oscar',
    'P': 'Papa',
    'Q': 'Quebec',
    'R': 'Romeo',
    'S': 'Sierra',
    'T': 'Tango',
    'U': 'Uniform',
    'V': 'Victor',
    'W': 'Whiskey',
    'X': 'X-ray',
    'Y': 'Yankee',
    'Z': 'Zulu',
    ' ': ' ',
    0:   'Zero',   
    1:   'One',   
    2:   'Two',  
    3:   'Three',
    4:   'Four',
    5:   'Five',
    6:   'Six',
    7:   'Seven',
    8:   'Eight',
    9:   'Niner',
    '.': 'point'
  }
  
  let code = inputCode.value.toUpperCase();

  let text = [];

  for(let i = 0; i < code.length; i++){
    
    let symbol = code[i];
    let value = alphabet[symbol];
    if(value){ 
    text.push(value);
    }

  }

  let result = text.join(' ');

  outputText.innerHTML = (`${result}`);

}






