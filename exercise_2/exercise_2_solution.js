// Copy and paste js here
function drawAceOfSpades() {
  // Your work goes here
  let deckId = document.getElementbyId("deck").textContent;
  let handCount = document.getElementById("handCount").value;
  fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${handCount}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var AceOfSpades = document.getElementById("AceOfSpades");
      AceOfSpades.innerHTML = "";
      data.cards.forEach((card) => {
        var image = document.createElement("img");
        image.src = card.image;
        AceOfSpades.appendChild(image);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
