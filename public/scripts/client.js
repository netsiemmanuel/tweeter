$(document).ready(function () {
  function renderTweets(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('.sec').prepend($tweet);

    }
  }
  function createTweetElement(tweet) {
    // Creates an html text for tweets
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
 <div class="bottom">
 <p class="time"> ${timeago.format(tweet.created_at)}</p>
 <div class="icons">
 <i class="fa-solid fa-flag"></i>
 <i class="fa-solid fa-heart"></i>
 <i class="fa-solid fa-retweet"></i>
 </div>
 </div>
</article>
`)
    return txt;
  }


  function loadtweets() {
    // Loads the tweets to display on the main section
    $.ajax('/tweets', { method: 'GET' })
      .then(function (tweet) {
        //console.log(tweet)
        renderTweets(tweet)
      })
  }
  loadtweets()


  $("form").submit(function (event) {

    event.preventDefault();
    let val = $('#tweet-text').val()
    $('.message').empty()
    if (!val) {
      console.log('empty')
      $('.message').text('Tweet can not be empty!')
      $('.message').slideDown(10000);
      return
    }

    if (val.length > 140) {
      $('.message').prepend('You have exceeded the maximum number of 140 chars!')
      $('.message').slideDown(10000);
      return
    }


    let newVal = $('#formId').serialize()
    console.log(newVal)
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: $('#tweet-text').serialize(),
      success: function (data) {
        //if request if made successfully then the response represent the data
        loadtweets();
        $('form').trigger("reset");
        $('#tweet-text').trigger('input')
        console.log(data)
      }
    })

  });


})
