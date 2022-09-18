const addTweetBtn=document.getElementById("addTweet-btn");
const tweetText=document.getElementById("tweet-text");
const file=document.getElementById("file-input");
let base64String = "";
const addTweet=()=>{
    let formData = new FormData();
    formData.append("text", tweetText.value);
    formData.append("user_id", localStorage.getItem('user_id'));
    formData.append("base64Image", encodeImage(file));
    formData.append("file", file);
    fetch(`http://localhost/twitter-clone/backend/add_tweet.php `, {
        method: 'POST',
        body: formData
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        if (data['success'] == true) {
           console.log(data); 
        }
        else alert("Adding tweet error error")
    });

}


function encodeImage(element) {
    let file = element.files[0];
    let reader = new FileReader();
    reader.onloadend = function() {
      return reader.result;
    }
    reader.readAsDataURL(file);
    const files = e.target.files;
    console.log(files)
  }

addTweetBtn.addEventListener("click",addTweet)



