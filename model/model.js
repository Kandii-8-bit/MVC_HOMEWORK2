//This is my Model
var MODEL = (function () {
  var _showAlert = function (buttonName) {
    alert("My button is" + buttonName);
  };

  var _getIndex = function (callback) {
    let text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel ligula posuere, consectetur nisi ut, fringilla libero. Integer id varius lacus. Nullam velit tortor, euismod eu felis in, rutrum volutpat lorem. Praesent sed scelerisque erat. Curabitur pellentesque sed felis ut fringilla. Nam imperdiet euismod vehicula. Quisque pellentesque eget neque in convallis. Sed aliquam, ipsum a molestie tempor, est neque ullamcorper sapien, sed rhoncus eros tortor eu nisl.";

    return callback(text);
  };

  // var _getAbout = function (callback) {
  //   let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu dignissim sapien. Vestibulum consequat arcu vel est sodales pharetra. Integer vulputate aliquam risus, nec aliquam quam ultricies sit amet. Praesent dictum fringilla justo sit amet ultrices. Proin viverra metus arcu, sit amet fringilla lectus maximus dapibus. Praesent posuere orci mauris, in dictum tellus mollis eu. Donec ac magna faucibus, elementum libero id, eleifend massa. Fusce neque lacus, iaculis quis fermentum tristique, commodo id elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eu venenatis nisi, vitae aliquet libero. Mauris aliquam luctus euismod. Nam posuere eget massa sed hendrerit. Nullam tincidunt, nunc id euismod faucibus, quam urna feugiat dui, a scelerisque velit mauris sit amet lorem.";

  //   return callback(text);
  // };

  // var _getFaq = function (callback) {
  //   let text = "Cras sagittis imperdiet turpis, congue tristique arcu consectetur vitae. Mauris id odio non neque ultrices facilisis. Aliquam eget metus massa. Sed nisi magna, tincidunt at auctor sed, vulputate at ante. Etiam eget molestie ex. Mauris ac massa eleifend, volutpat massa id, suscipit leo. Sed eget nulla velit. Etiam faucibus mi eu metus finibus, nec bibendum mi pulvinar. Vivamus vitae posuere neque, condimentum facilisis eros. Phasellus consectetur tristique tristique. Suspendisse bibendum nibh eu mi vehicula mollis.";

  //   return callback(text);
  // };

  // var _getGames = function (callback) {
  //   let text = "Fusce a malesuada lorem, iaculis dapibus risus. Aenean augue nibh, interdum efficitur velit eu, consectetur laoreet metus. Quisque bibendum lacus non mauris rutrum, ut pretium ex tincidunt. Donec interdum felis vitae elit tincidunt, eget maximus nibh vehicula. Donec iaculis orci eget eros auctor, quis hendrerit nulla semper. Nulla molestie in sem a euismod. Proin aliquet ultricies rhoncus. Pellentesque gravida metus condimentum massa rhoncus aliquam. Suspendisse et risus at lacus fringilla fermentum. Quisque dictum elit ligula, ac lacinia metus gravida id. Sed varius justo a purus mattis consectetur. Sed tempor arcu tortor, eu mollis eros ultrices a. Curabitur vitae consectetur neque. Aenean at tempor dui, in euismod dui. Donec nec ex ante. Cras vel mi eros.";

  //   return callback(text);
  // };

  return {
    showAlert: _showAlert,
    getIndex: _getIndex,
    // getAbout: _getAbout,
    // getFaq: _getFaq,
    // getGames: _getGames,
  };
})();
