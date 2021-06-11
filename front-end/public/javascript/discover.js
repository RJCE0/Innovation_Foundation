var d = document;
d.addEventListener("DOMContentLoaded", function () {
  /*Element*/
  var navItems = d.querySelectorAll("#user-nav .user-btn");
  var filterTypes = d.querySelectorAll(".main-filter");
  var filterTypeBoxes = d.querySelectorAll(".perspectiveContainer");

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

  /*Events*/
  filterActBtn.addEventListener("click", toggleModal);
  modal.addEventListener("click", toggleModal);
  modalContainer.addEventListener("click", function (e) {
    // console.log()
    // e.preventDefault();
    // console.log("clicked");
  });

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

  filterTypeBoxes.forEach((type) => {
    type.addEventListener("mouseenter", function () {
      this.classList.add("perspect");
    });
    type.addEventListener("mouseleave", function () {
      this.classList.remove("perspect");
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

  filterTypes.forEach((type) => {
    // let coverage = type.querySelector('.main-filter-lt');
    type.addEventListener("click", function () {
      clearActives(filterTypes, "active-type"); //get rid of the class for all
      this.classList.contains("active-type")
        ? this.classList.remove("active-type")
        : this.classList.add("active-type");

      let activityType = this.dataset.filter;
      //send a request to server for this type of opportunity
    });

    /*coverage.addEventListener('mousemove', function(e){
			let cW = this.offsetWidth, cH = this.offsetHeight,
				mcW = cW/2, mcH = cH/2;


			let DX = mcW - e.offsetX;
			let DY = mcH - e.offsetY;

			console.log(DX, DY);

			type.style.transform = `rotateY(${DX}deg)`;
			type.style.transform = `rotateX(${DY}deg)`;
		});

		coverage.addEventListener('mouseleave', function(e){
			type.style.transform = `rotateY(0deg)`;
			type.style.transform = `rotateX(0deg)`;

		});*/
  });
});
