function displayHomework() {
	// get the input values for each period
	var period1 = document.getElementById("period1").value;
	var period2 = document.getElementById("period2").value;
	var period3 = document.getElementById("period3").value;
	var period4 = document.getElementById("period4").value;
	var period5 = document.getElementById("period5").value;
	var period6 = document.getElementById("period6").value;

	// display the homework for each period
	var homework = document.getElementById("homework");
	homework.innerHTML = "<h2>Homework</h2>";
	homework.innerHTML += "<p>Period 1: " + period1 + "</p>";
	homework.innerHTML += "<p>Period 2: " + period2 + "</p>";
	homework.innerHTML += "<p>Period 3: " + period3 + "</p>";
	homework.innerHTML += "<p>Period 4: " + period4 + "</p>";
	homework.innerHTML += "<p>Period 5: " + period5 + "</p>";
	homework.innerHTML += "<p>Period 6: " + period6 + "</p>";
}
