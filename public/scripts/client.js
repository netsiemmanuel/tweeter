$(document).ready(function() {
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}
// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]
function renderTweets (tweets){
    // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for(let tweet of tweets){
    const $tweet = createTweetElement(tweet);
    $('.sec').append($tweet);

  }
}
 function createTweetElement(tweet) {
  const txt = $(`
  <article class="inner">
  <div class="div1"> 
  <div class="div2">
  <img src="${tweet.user.avatars}" />
   <span class="span1"> ${tweet.user.name}</span>
   </div>
   <span class="span1">${tweet.user.handle}</span>
 </div>
 <p class="p">${tweet.content.text}</p> 
 <hr class="line">
 <p class="time"> ${tweet.created_at} days ago</p>
</article>
`)
  return txt;
 }
// Test / driver code (temporary). Eventually will get this from the server.

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
//console.log($tweet); // to see what it looks like
//$('.sec').append($tweet);
renderTweets(data);
})