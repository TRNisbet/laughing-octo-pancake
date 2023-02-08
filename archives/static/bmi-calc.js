function calculateBMI() {
  // inputs
  var height = parseInt(document.getElementById("height").value);
  var weight = parseInt(document.getElementById("weight").value);

  // outputs
  var bmiResult = document.getElementById("bmi");
  var catResult = document.getElementById("category");
  var resultsContainer = document.getElementById("bmi-results");

  // overrides the original "display: none" in the CSS
  resultsContainer.style.display = "block";

  // set up the POST data
  var post_data = {
    "height": height,
    "weight": weight
  };

  // POST the data to the app
  $.ajax({
    type: "POST",
    url: "/process_bmi",
    data: JSON.stringify(post_data),
    contentType: "application/json",
    dataType: 'json',

    // update the index page with the results
    success: function(result) {
      bmiResult.innerHTML = result.bmi;
      catResult.innerHTML = result.category;
    }
  });
}


