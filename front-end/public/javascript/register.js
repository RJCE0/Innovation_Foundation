$(document).ready(function () {
  $("#submitLogin").click((e) => {
    e.preventDefault();
    $.ajax({
      url: "user/register",
      type: "post",
      dataType: "json",
      data: $("#signup-container").serialize(),
      success: function (data) {
        console.log(data);
      },
    });
  });
});
