// This is my controller for my app
function showText(data) {
  $(".content").html(data);
  $(".loader").css("display", "none");
}

function initListeners() {
  $("nav #home").click(function (event) {
    let btnId = this.id;
    $(".loader").css("display", "block");
    MODEL.getIndex(showText);
  });
}

// function initListeners() {
//   $("nav #about").click(function (event) {
//     let btnId = this.id;
//     $(".loader").css("display", "block");
//     MODEL.getAbout(showText);
//   });
// }

// function initListeners() {
//   $("nav #faq").click(function (event) {
//     let btnId = this.id;
//     $(".loader").css("display", "block");
//     MODEL.getFaq(showText);
//   });
// }

// function initListeners() {
//   $("nav #games").click(function (event) {
//     let btnId = this.id;
//     $(".loader").css("display", "block");
//     MODEL.getGames(showText);
//   });
// }

$(document).ready(function () {
  initListeners();
});
