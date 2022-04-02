// generate quotes on btn click
let btnGenerator = document.getElementById("btn-generate");
let content = document.getElementById("slip-content");
let slipId = document.getElementById("slip-id");
btnGenerator.addEventListener("click", function () {
  loadTips();
});

// on page open, generate a quote
function loadTips() {
  fetch("https://api.adviceslip.com/advice")
    .then(function (res) {
      // handle the response
      res.json().then(function (data) {
        content.innerHTML = "&ldquo;" + data.slip.advice + "&rdquo;";
        slipId.innerHTML = data.slip.id;
      });
    })
    .catch(function (err) {
      // handle the error
      console.log(err);
    });
}
loadTips();
