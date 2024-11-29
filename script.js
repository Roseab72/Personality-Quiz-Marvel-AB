/*Add your JavaScript here*/
var questionCount = 0; //Store the number of answers clicked on
//Storing scores for potential results
var capScore = 0;
var widowScore = 0;
var devilScore = 0;
var ironScore = 0;
var pantherScore = 0;
var hulkScore = 0;
var thorScore = 0;
var spiderScore = 0;

//Storing HTML elements using the DOM
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");
var q7a4 = document.getElementById("q7a4");

var q8a1 = document.getElementById("q8a1");
var q8a2 = document.getElementById("q8a2");
var q8a3 = document.getElementById("q8a3");
var q8a4 = document.getElementById("q8a4");

var q9a1 = document.getElementById("q9a1");
var q9a2 = document.getElementById("q9a2");
var q9a3 = document.getElementById("q9a3");
var q9a4 = document.getElementById("q9a4");

var q10a1 = document.getElementById("q10a1");
var q10a2 = document.getElementById("q10a2");
var q10a3 = document.getElementById("q10a3");
var q10a4 = document.getElementById("q10a4");

//Restart button
var restart = document.getElementById("restart");

// Listen for click on answer buttons and call function if clicked
restart.addEventListener("click", restartQuiz);

q1a1.addEventListener("click", cap);
q1a2.addEventListener("click", iron);
q1a3.addEventListener("click", thor);
q1a4.addEventListener("click", spider);

q2a1.addEventListener("click", hulk);
q2a2.addEventListener("click", widow);
q2a3.addEventListener("click", panther);
q2a4.addEventListener("click", devil);

q3a1.addEventListener("click", cap);
q3a2.addEventListener("click", panther);
q3a3.addEventListener("click", thor);
q3a4.addEventListener("click", devil);

q4a1.addEventListener("click", panther);
q4a2.addEventListener("click", spider);
q4a3.addEventListener("click", cap);
q4a4.addEventListener("click", hulk);

q5a1.addEventListener("click", devil);
q5a2.addEventListener("click", thor);
q5a3.addEventListener("click", iron);
q5a4.addEventListener("click", widow);

q6a1.addEventListener("click", cap);
q6a2.addEventListener("click", panther);
q6a3.addEventListener("click", hulk);
q6a4.addEventListener("click", spider);

q7a1.addEventListener("click", iron);
q7a2.addEventListener("click", hulk);
q7a3.addEventListener("click", cap);
q7a4.addEventListener("click", widow);

q8a1.addEventListener("click", widow);
q8a2.addEventListener("click", iron);
q8a3.addEventListener("click", thor);
q8a4.addEventListener("click", spider);

q9a1.addEventListener("click", devil);
q9a2.addEventListener("click", thor);
q9a3.addEventListener("click", iron);
q9a4.addEventListener("click", panther);

q10a1.addEventListener("click", hulk);
q10a2.addEventListener("click", spider);
q10a3.addEventListener("click", widow);
q10a4.addEventListener("click", devil);



// Track scores and check if quiz is complete
function cap() {
  capScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " cap = " + capScore);
  if (questionCount == 10) {
    console.log("The quiz is done!")
    updateResult();
  }
}
function iron() {
  ironScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " iron = " + ironScore);
  if (questionCount == 10) {
    console.log("The quiz is done!")
    updateResult();
  }
}
function thor() {
  thorScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " thor = " + thorScore);
  if (questionCount == 10) {
    console.log("The quiz is done!")
    updateResult();
  }
}
function spider() {
  spiderScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " spider = " + spiderScore);
  if (questionCount == 10) {
    console.log("The quiz is done!")
    updateResult();
  }
}
function widow() {
  widowScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " widow = " + widowScore);
  if (questionCount == 10) {
    console.log("The quiz is done!")
    updateResult();
  }
}
function devil() {
  devilScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " devil = " + devilScore);
  if (questionCount == 10) {
    console.log("The quiz is done!")
    updateResult();
  }
}
function panther() {
  pantherScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " panther = " + pantherScore);
  if (questionCount == 10) {
    console.log("The quiz is done!")
    updateResult();
  }
}
function hulk() {
  hulkScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " hulk = " + hulkScore);
  if (questionCount == 10) {
    console.log("The quiz is done!")
    updateResult();
  }
}

// Update quiz result
function updateResult() {
  // Calculate percentages inside the function
  var capPercent = (capScore / 10) * 100;
  var ironPercent = (ironScore / 10) * 100;
  var thorPercent = (thorScore / 10) * 100;
  var spiderPercent = (spiderScore / 10) * 100;
  var widowPercent = (widowScore / 10) * 100;
  var devilPercent = (devilScore / 10) * 100;
  var pantherPercent = (pantherScore / 10) * 100;
  var hulkPercent = (hulkScore / 10) * 100;

  var resultDiv = document.getElementById("result");
  var resultHTML = "";
  
  //Determine the highest score
  if (capPercent > ironPercent && capPercent > thorPercent && capPercent > spiderPercent && capPercent > widowPercent && capPercent > devilPercent && capPercent > pantherPercent && capPercent > hulkPercent) {
    resultHTML = `
      <h4>You are Captain America!</h4>
      <img src="assets/cap.webp" class= "resultimg" alt="Captain America">
      <p>Captain America is the leader with a strong moral compass and an unyielding sense of duty, always putting others before yourself. You stand for justice and always fight for what's right!</p>
    `;
    console.log("You are Captain America!");
    console.log("You are " + capPercent + "% Captain America");
    console.log("You are " + ironPercent + "% Iron Man");
    console.log("You are " + thorPercent + "% Thor");
    console.log("You are " + spiderPercent + "% Spider-Man");
    console.log("You are " + widowPercent + "% Black Widow");
    console.log("You are " + devilPercent + "% DareDevil");
    console.log("You are " + pantherPercent + "% Black Panther");
    console.log("You are " + hulkPercent + "% Hulk");
  } 
  else if (ironPercent > capPercent && ironPercent > thorPercent && ironPercent > spiderPercent && ironPercent > widowPercent && ironPercent > devilPercent && ironPercent > pantherPercent && ironPercent > hulkPercent) {
    resultHTML = `
      <h4>You are Iron Man!</h4>
      <img src="assets/iron_man.webp" class="resultimg" alt="Iron Man">
      <p>Iron Man is a brilliant inventor and a quick thinker, making you a natural problem-solver. You're charismatic, confident, and always ready to save the day with your genius!</p>
    `;
    console.log("You are Iron Man!");
    console.log("You are " + ironPercent + "% Iron Man");
    console.log("You are " + capPercent + "% Captain America");
    console.log("You are " + thorPercent + "% Thor");
    console.log("You are " + spiderPercent + "% Spider-Man");
    console.log("You are " + widowPercent + "% Black Widow");
    console.log("You are " + devilPercent + "% DareDevil");
    console.log("You are " + pantherPercent + "% Black Panther");
    console.log("You are " + hulkPercent + "% Hulk");
  } 
  else if (thorPercent > capPercent && thorPercent > ironPercent && thorPercent > spiderPercent && thorPercent > widowPercent && thorPercent > devilPercent && thorPercent > pantherPercent && thorPercent > hulkPercent) {
    resultHTML = `
    <h4>You are Thor!</h4>
    <img src="assets/thor.jpg" class="resultimg" alt="Thor">
    <p>A powerful warrior with a noble heart, you’re as fearless in battle as you are loyal to your friends. Your strength and determination inspire all.</p>
    `;
    console.log("You are Thor!");
    console.log("You are " + thorPercent + "% Thor");
    console.log("You are " + capPercent + "% Captain America");
    console.log("You are " + ironPercent + "% Iron Man");
    console.log("You are " + spiderPercent + "% Spider-Man");
    console.log("You are " + widowPercent + "% Black Widow");
    console.log("You are " + devilPercent + "% DareDevil");
    console.log("You are " + pantherPercent + "% Black Panther");
    console.log("You are " + hulkPercent + "% Hulk");
  }
  else if (spiderPercent > capPercent && spiderPercent > ironPercent && spiderPercent > thorPercent && spiderPercent > widowPercent && spiderPercent > devilPercent && spiderPercent > pantherPercent && spiderPercent > hulkPercent) {
    resultHTML = `
    <h4>You are Spider-Man!</h4>
    <img src="assets/spider_man.webp" class="resultimg" alt="Spider-Man">
    <p>Witty, resourceful, and full of heart, you thrive under pressure and never back down from a challenge. You balance responsibility with a sense of humor. No matter how tough life gets, you always rise to protect others, proving that anyone can be a hero with the right mindset.</p>
    `;
    console.log("You are Spider-Man!");
    console.log("You are " + spiderPercent + "% Spider-Man");
    console.log("You are " + capPercent + "% Captain America");
    console.log("You are " + ironPercent + "% Iron Man");
    console.log("You are " + thorPercent + "% Thor");
    console.log("You are " + widowPercent + "% Black Widow");
    console.log("You are " + devilPercent + "% DareDevil");
    console.log("You are " + pantherPercent + "% Black Panther");
    console.log("You are " + hulkPercent + "% Hulk");
  }
  else if (widowPercent > capPercent && widowPercent > ironPercent && widowPercent > thorPercent && widowPercent > spiderPercent && widowPercent > devilPercent && widowPercent > pantherPercent && widowPercent > hulkPercent) {
    resultHTML = `
    <h4>You are Black Widow!</h4>
    <img src="assets/black_widow.webp" class="resultimg" alt="Black Widow">
    <p>Clever, strategic, and skilled, you’re a master of adaptability. You handle tough situations with grace and unwavering resolve.</p>
    `;
    console.log("You are Black Widow!");
    console.log("You are " + widowPercent + "% Black Widow");
    console.log("You are " + capPercent + "% Captain America");
    console.log("You are " + ironPercent + "% Iron Man");
    console.log("You are " + thorPercent + "% Thor");
    console.log("You are " + spiderPercent + "% Spider-Man");
    console.log("You are " + devilPercent + "% DareDevil");
    console.log("You are " + pantherPercent + "% Black Panther");
    console.log("You are " + hulkPercent + "% Hulk");
  }
  else if (devilPercent > capPercent && devilPercent > ironPercent && devilPercent > thorPercent && devilPercent > spiderPercent && devilPercent > widowPercent && devilPercent > pantherPercent && devilPercent > hulkPercent) {
    resultHTML = `
    <h4>You are Daredevil!</h4>
    <img src="assets/daredevil.jpg" class="resultimg" alt="Daredevil">
    <p>As a lawyer by day and vigilante by night, you fight for justice in a city that often seems lost in darkness. Your heightened senses and sharp intuition make you a formidable force, even in the face of adversity. You might be blind, but your heart and spirit see all, making you a hero for those in need</p>
    `;
    console.log("You are DareDevil!");
    console.log("You are " + devilPercent + "% DareDevil");
    console.log("You are " + capPercent + "% Captain America");
    console.log("You are " + ironPercent + "% Iron Man");
    console.log("You are " + thorPercent + "% Thor");
    console.log("You are " + spiderPercent + "% Spider-Man");
    console.log("You are " + widowPercent + "% Black Widow");
    console.log("You are " + pantherPercent + "% Black Panther");
    console.log("You are " + hulkPercent + "% Hulk");
  }
  else if (pantherPercent > capPercent && pantherPercent > ironPercent && pantherPercent > thorPercent && pantherPercent > spiderPercent && pantherPercent > widowPercent && pantherPercent > devilPercent && pantherPercent > hulkPercent) {
    resultHTML = `
    <h4>You are Black Panther!</h4>
    <img src="assets/black_panther.avif" class="resultimg" alt="Black Panther">
    <p>As the king of Wakanda, you embody wisdom, strength, and responsibility. You are a protector of your people, balancing the weight of leadership with the desire to preserve peace and justice. Your advanced technological knowledge, unmatched fighting skills, and keen sense of honor make you a natural leader.</p>
    `;
    console.log("You are Black Panther!");
    console.log("You are " + pantherPercent + "% Black Panther");
    console.log("You are " + capPercent + "% Captain America");
    console.log("You are " + ironPercent + "% Iron Man");
    console.log("You are " + thorPercent + "% Thor");
    console.log("You are " + spiderPercent + "% Spider-Man");
    console.log("You are " + widowPercent + "% Black Widow");
    console.log("You are " + devilPercent + "% DareDevil");
    console.log("You are " + hulkPercent + "% Hulk");
  }
  else if (hulkPercent > capPercent && hulkPercent > ironPercent && hulkPercent > thorPercent && hulkPercent > spiderPercent && hulkPercent > widowPercent && hulkPercent > devilPercent && hulkPercent > pantherPercent) {
    resultHTML = `
    <h4>You are The Hulk!</h4>
    <img src="assets/hulk.jpg" class="resultimg" alt="Hulk">
    <p>With immense strength and a fierce temper, you are a force to be reckoned with. Though you struggle with control, your heart is always in the right place. When the world needs protection, you rise to the occasion, showing that even in anger, there’s a chance to be a hero.</p>
    `;
    console.log("You are The Hulk!");
    console.log("You are " + hulkPercent + "% Hulk");
    console.log("You are " + capPercent + "% Captain America");
    console.log("You are " + ironPercent + "% Iron Man");
    console.log("You are " + thorPercent + "% Thor");
    console.log("You are " + spiderPercent + "% Spider-Man");
    console.log("You are " + widowPercent + "% Black Widow");
    console.log("You are " + devilPercent + "% DareDevil");
    console.log("You are " + pantherPercent + "% Black Panther");
  }
  else if (capPercent == ironPercent || capPercent == thorPercent || capPercent == spiderPercent || capPercent == widowPercent || capPercent == devilPercent || capPercent == pantherPercent || capPercent == hulkPercent || ironPercent == thorPercent || ironPercent == spiderPercent || ironPercent == widowPercent || ironPercent == devilPercent || ironPercent == pantherPercent || ironPercent == hulkPercent || thorPercent == spiderPercent || thorPercent == widowPercent || thorPercent == devilPercent || thorPercent == pantherPercent || thorPercent == hulkPercent || spiderPercent == widowPercent || spiderPercent == devilPercent || spiderPercent == pantherPercent || spiderPercent == hulkPercent || widowPercent == devilPercent || widowPercent == pantherPercent || widowPercent == hulkPercent || devilPercent == pantherPercent || devilPercent == hulkPercent || pantherPercent == hulkPercent) {
    resultHTML = `
    <h4>You are a combination of multiple superheroes!</h4>
    <p>You display attributes from two or more superheroes, showing your versatility, strength, and unique blend of qualities that make you a true hero in your own right. See below for more details!</p>
    `;
  }
  // Add percentages for all characters
  resultHTML += `
    <br>
    <h5>Your Results:</h5>
    <ul>
      <li>Captain America: ${capPercent}%</li>
      <li>Iron Man: ${ironPercent}%</li>
      <li>Thor: ${thorPercent}%</li>
      <li>Spider-Man: ${spiderPercent}%</li>
      <li>Black Widow: ${widowPercent}%</li>
      <li>Daredevil: ${devilPercent}%</li>
      <li>Black Panther: ${pantherPercent}%</li>
      <li>Hulk: ${hulkPercent}%</li>
    </ul>
    <br>
  `;

  resultDiv.innerHTML = resultHTML;
}
//Restart Quiz
function restartQuiz() {
  resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";  // Clears the displayed results
  questionCount = 0; 
  capScore = 0;
  widowScore = 0;
  devilScore = 0;
  ironScore = 0;
  pantherScore = 0;
  hulkScore = 0;
  thorScore = 0;
  spiderScore = 0;
}