//1. When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
$(document).ready(console.log("Let's get ready to party with jQuery!"));

//2. Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$("article img").addClass("image-center");

//3. Remove the last paragraph in the article.
$("p").eq($("p").length - 1).remove();

//4. Set the font size of the title to be a random pixel size from 0 to 100.
$("#title").css("font-size", Math.random() * 100);

//5. Add an item to the list; it can say whatever you want.
$("<li>He's in a teacup!</li>").appendTo("ol");

//6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$("aside").empty().append("<p>I apologize for the list's existence.</p>");

//7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$("input").on("change", function() {
  let r = $("input").get(0).value;
  let g = $("input").get(1).value;
  let b = $("input").get(2).value;
  $("body").css('background-color', `rgb(${r}, ${g}, ${b})`)
})

//8. Add an event listener so that when you click on the image, it is removed from the DOM.
$("img").on("click",function() {
  this.remove();
})

//part two
$("form").submit(function(e) {
  e.preventDefault();
  let movie = $("#movie-title").val();
  let rating = $("#rating").val();


  const newDiv = $("#container").append("<div></div>")

  newDiv.append(`<p>${movie} --- ${rating} / 10</p>`).addClass("movies")

  newDiv.append("<button>X</button>").addClass("remove").on("click", function() {
    console.log(this)
    $(this).remove();
  });

})
