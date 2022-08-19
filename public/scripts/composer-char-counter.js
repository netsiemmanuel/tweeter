//function that adjusts the char counter according to the number of chars entered 
$(document).ready(function () {
  $('#tweet-text').on('input', onInput)
})

function onInput() {
  const length = $(this).val().length
  let characterCounter = $('#tweet-text').siblings("div").children(".counter")
    ;
  const maxNumOfChars = 140;
  let counter = maxNumOfChars - length;
  characterCounter.text(counter)
  if (counter < 0) {
    characterCounter.css('color', 'red')
  } else {
    characterCounter.css('color', 'black')
  }
};