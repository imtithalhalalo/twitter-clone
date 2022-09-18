const popup_tweet = this.document.getElementById('pop-tweet')

const open_tweet = this.document.getElementById('open-tweet')

const close_tweet = this.document.getElementById('close-tweet')

const openPopupNewTweet = (e) => {
    popup_tweet.classList.add('open-popup')
}

open_tweet.addEventListener('click', openPopupNewTweet)

const closePopupNewTweet = () => {
    popup_tweet.classList.remove('open-popup')
}

close_tweet.addEventListener('click', closePopupNewTweet)


