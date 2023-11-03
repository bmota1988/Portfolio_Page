array1 = new Array(
  "./src/LandingPage.png",
  "./src/SurveyForm.png",
  "./src/GymSurveyForm.png",
  "./src/TributePage.png",
  "./src/TechnicalDocumentationPage.png"
);

function start() {
  document.getElementById("myproject").src = array1[0];
  document.form.text.value = "0";
}

function plus() {
  document.form.text.value = Math.floor(
    1 + 1 - 2 + document.form.text.value * 1 + 1
  );
  if (document.form.text.value > 4) {
    document.form.text.value = 0;
  }
}

function less() {
  document.form.text.value = Math.floor(
    1 + 1 - 2 + document.form.text.value * 1 - 1
  );
  if (document.form.text.value < 0) {
    document.form.text.value = 4;
  }
}

function regular() {
  document.getElementById("myproject").src = array1[document.form.text.value];
  setTimeout("regular()", 1);
}

function link() {
  if (document.form.text.value == "1") {
    document.getElementById("a-project").href =
      "https://codepen.io/bruno-mota/full/PoePzmz";
  }
  if (document.form.text.value == "2") {
    document.getElementById("a-project").href =
      "https://codepen.io/bruno-mota/full/vYRoPWj";
  }
  if (document.form.text.value == "3") {
    document.getElementById("a-project").href =
      "https://codepen.io/bruno-mota/full/rNJaQde";
  }
  if (document.form.text.value == "4") {
    document.getElementById("a-project").href =
      "https://codepen.io/bruno-mota/full/yLvyQzB";
  }
  if (document.form.text.value == "5") {
    document.getElementById("a-project").href =
      "https://codepen.io/bruno-mota/full/OJQPGbK";
  }
}