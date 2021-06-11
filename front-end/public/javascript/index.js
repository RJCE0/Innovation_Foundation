var d = document;
d.addEventListener("DOMContentLoaded", function () {
  // put these in cookies or localsroage
  var hostname = "http://localhost:5000/";

  /*Element*/
  var slotContainer = d.getElementById("slot-machine-container");
  var signUpPwd = d.getElementById("password");

  var submitSignUpBtn = d.getElementById("submitLogin");
  var signInButton = d.getElementById("submitLogin");

  // var backdropVideo = d.getElementsByClassName('videoWrapper')[0];

  // //start the backdrop video when page loads;
  // var video = backdropVideo.querySelector('video');
  // if (video.paused) {
  // 	video.play;
  // }
  //every 3 seconds change to the next item

  var slotItems = slotContainer.querySelectorAll(".cara-text");
  setInterval(() => {
    // get the active slot text
    var activeSlot = slotContainer.querySelector(".cara-text.cara-active");

    //check if the next slot has the class of cara-text
    var nextSlot =
      activeSlot.nextElementSibling &&
      activeSlot.nextElementSibling.classList.contains("cara-text")
        ? activeSlot.nextElementSibling
        : slotItems[0];

    activeSlot.classList.remove("cara-active"); //remove active off active slot
    nextSlot.classList.add("cara-active"); //add active to next slot
  }, 3000);

  /* var timer = "";
	signUpPwd.addEventListener('keyup', function(e){
		console.log('click');
		signUpPwd.type = "text";
		signUpPwd.removeAttribute('name');
		clearTimeout(timer);
		timer = setTimeout(() => {
			signUpPwd.value = createBullets(signUpPwd.value.length);
		}, 300);
	}); */

  // submit sign in info when button is clicked
  signInButton.addEventListener("click", function (e) {});

  //submit signupForm when the button is clicked
  submitSignUpBtn.addEventListener("click", function (e) {
    console.log("Signing up");
    e.preventDefault();
    //get the signup Container
    let signupContainer = d.getElementById("signup-container");
    let formElements = signupContainer.querySelectorAll('[data-coll="true"]');
    let sendData = {};
    formElements.forEach((el) => {
      sendData[el.name] = el.value;
    });

    console.log(sendData);
    var data = sendData;

    fetch("http://localhost:5000/user/register", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then((res) => {
      console.log(res.json());
    });

    //send an ajax request over to the server

    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function (e) {
    // 	// var data = JSON.parse(this.response);
    // 	var data = this.response;
    // 	console.log(data);
    // 	if (data.success == true || (this.readyState == 4 && this.status == 200)) {
    // 		//data returned successfully
    // 		// console.log(data['user']);
    // 		console.log()
    // 		var user = JSON.parse(data).user;

    // 		//put data into localStorage
    // 		localStorage.setItem('uid', JSON.stringify(user));
    // 		console.log(Object.keys(JSON.parse(localStorage.getItem('uid'))).length >= 1);
    // 		if(Object.keys(JSON.parse(localStorage.getItem('uid'))).length >= 1){
    // 			// window.location = "https://www.example.com";
    // 			console.log(hostname + "discover");
    // 			e.preventDefault();
    // 			window.location.replace(hostname + "discover");
    // 		}
    // 	} else {
    // 		//unsuccessful

    // 		console.log('unsuccessful signup');
    // 		console.log(data);
    // 	}
    // };
    // xhttp.open("POST", "http://localhost:5000/api/users/", true);
    // xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.send(JSON.stringify(sendData));
    // xhttp.send(sendData);
  });
});

function createBullets(n) {
  var bullets = "";
  for (var i = 0; i < n; i++) {
    bullets += "•";
  }
  return bullets;
}

/*
$(document).ready(function() {
  var timer = "";
  $(".pass").attr("type", "text").removeAttr("name");
  $("body").on("keyup", ".pass", function(e) {
    clearTimeout(timer);
    timer = setTimeout(function() {
      $(".pass").val(createBullets($(".pass").val().length));
    }, 200);
  });
});*/
