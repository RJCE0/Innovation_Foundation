var d = document;
d.addEventListener("DOMContentLoaded", function () {
  /*Element*/
  var navItems = d.querySelectorAll("#user-nav .user-btn");

  var contentBoxes = d.querySelectorAll(".content-item");

  var filterActBtn = d.querySelector("#filterBtn");
  var modal = d.querySelector("#full-screen-modal");
  var modalContainer = d.querySelector("#filter-modalContainer");

  /*Function */
  var clearActives = function (set, clearclass) {
    set.forEach((el) => {
      if (el.classList.contains(clearclass)) el.classList.remove(clearclass);
    });
  };

  var toggleModal = function (e) {
    let body = d.querySelector("body");
    if (
      e.target.id == "filter-modalContainer" ||
      modalContainer.contains(e.target)
    ) {
      console.log("clicked inside");
      e.preventDefault();
    } else {
      console.log("clicked outside");

      body.style.overflowY =
        body.style.overflowY == "hidden" ? "scroll" : "hidden";
      modal.style.display = modal.style.display == "block" ? "none" : "block";
    }
  };

  var sizeHeader = function (e) {
    let swirl = d.querySelector("#header-swirl-backdrop");
    let headerContainer = d.querySelector("#headerContainer");
    headerContainer.style.height = `${swirl.clientHeight}px`;
  };

  /* invoke Functions */
  sizeHeader();

  /*Events*/
  if (filterActBtn) filterActBtn.addEventListener("click", toggleModal);
  if (modal) modal.addEventListener("click", toggleModal);
  // modalContainer.addEventListener('click', function(e){
  // console.log()
  // e.preventDefault();
  // console.log("clicked");
  // });

  contentBoxes.forEach((content) => {
    let actionCont = content.querySelector(".content-top-leftContainer"),
      contentImage = content.querySelector(".content-type-img"),
      container = content.querySelector(".contentBox");

    content.addEventListener("mouseenter", function () {
      // show extra actions
      if (actionCont) actionCont.style.opacity = "1";

      //check if there is an image
      if (contentImage) {
        content.querySelector(".content-type-overlay").style.backgroundColor =
          "#00000070";
        contentImage.style.transform = "scale(1.25)";
      }
    });
    content.addEventListener("mouseleave", function () {
      // show extra actions
      if (actionCont) actionCont.style.opacity = "0";

      if (contentImage) {
        content.querySelector(".content-type-overlay").style.backgroundColor =
          "transparent";
        contentImage.style.transform = "scale(1)";
      }
    });
  });

  navItems.forEach((btn) => {
    btn.addEventListener("mouseover", function () {
      this.classList.add("shad");
    });
    btn.addEventListener("mouseleave", function () {
      this.classList.remove("shad");
    });
  });

  /*
		get height of swirlbackdrop image and change the height headerContainer
		to the height of the swirlbackdrop when the page resizes
	*/
  window.addEventListener("resize", sizeHeader);
});
