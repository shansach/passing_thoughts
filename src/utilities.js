

export function getNewExpirationTime() {
    return Date.now() + 15 * 1000;
  }
  
  let nextId = 0;

  export function generateId() {
    const result = nextId;
    nextId += 1;
    return result;
  }


  
  function randomColor() {
    //const red = Math.floor(Math.random() * 256);
    //const red = 
    //const green = Math.floor(Math.random() * 256);
    //const blue = Math.floor(Math.random() * 256);
    //const blue = Aquamarine
  
    //const color = `rgb(${red}, ${green}, ${blue})`

    const arr = ["Aquamarine", "LemonChiffon", "MistyRose", "PaleGreen","PeachPuff","HoneyDew"];
    const color = arr[Math.floor(Math.random()*arr.length)];
    return color;
    
  }
  
  export function switchBackground() {
    const backgroundColor = randomColor();
    document.body.style.backgroundColor = backgroundColor;
  }
   