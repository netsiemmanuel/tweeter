$(document).ready(function() {
  // --- our code goes here ---
  console.log('hi')

  let element = document.getElementById('tweet-text');
  let characterCounter = document.getElementById("id");
  const maxNumOfChars = 140;

  function callback() {
    
      let numOfEnteredChars = element.value.length;
      let counter = maxNumOfChars - numOfEnteredChars;
      characterCounter.textContent = counter ;
      if (counter < 0) {
        characterCounter.style.color = "red";
      }else {
        characterCounter.style.color = "black";
    }    
  };
  element.addEventListener('input', callback)
})