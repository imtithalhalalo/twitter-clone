const addTweetBtn=document.getElementById("addTweet-btn");
const tweetText=document.getElementById("tweet-text");
const fileInput=document.getElementById("file-input");
let base64String;
const addTweet=(e)=>{
    e.preventDefault();
    let formData = new FormData();
    formData.append("text", tweetText.value);
    formData.append("user_id", localStorage.getItem('user_id'));
    formData.append("base64Image", base64String);
    // formData.append("file", file);
    fetch(`http://localhost/twitter-clone/backend/add_tweet.php `, {
        method: 'POST',
        body: formData
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        if (data['success'] == true) {
           console.log(data); 
        }
        else alert("Adding tweet error ")
    });

}


function encodeImage(e) {
    e.preventDefault();
    let file = this.files[0];
    let reader = new FileReader();
    reader.onloadend = function() {
       base64String= reader.result;
    }
    reader.readAsDataURL(file);

  }

addTweetBtn.addEventListener("click",addTweet)
fileInput.addEventListener("change",encodeImage)


