function displayMatrix() {
	const year = prompt('Enter the year', '2020');
	// const year = 2020;
	const daysInMonth = 31;
	const monthsInYear = 12;
	const lastRowDaysTotal = [0, 0, 0, 0, 0, 0, 0];

	document.getElementById("year").innerHTML = "Year "+year;

	for (let dd = 1; dd <= daysInMonth; dd++) {
		let matrix = document.getElementById("matrix");
		let sum = 0;
		var date = document.createElement("DIV");
		date.innerHTML = dd;
		matrix.appendChild(date);
		let daysInWeek = [0, 0, 0, 0, 0, 0, 0];
		for(let month = 0; month < monthsInYear; month++){
			var date = new Date();
			var day = "";
			switch(month){
				case 0:
				case 2:
				case 4:
				case 6:
				case 7:
				case 9:
				case 11:
					day = new Date(year, month, dd).toString();
					break;
				case 3:
				case 5:
				case 8:
				case 10:
					if(dd !== 31)
						day = new Date(year, month, dd).toString();
					break;
				case 1:
					if(year%4 === 0 && dd !== 31 && dd !== 30)
						day = new Date(year, month, dd).toString();
					else if(dd !== 31 && dd !== 30 && dd !== 29)
						day = new Date(year, month, dd).toString();

			}
			switch(day.substring(0, 3)){
				case "Sun":
					daysInWeek[0]++;
					lastRowDaysTotal[0]++;
					break;
				case "Mon":
					daysInWeek[1]++;
					lastRowDaysTotal[1]++;
					break;
				case "Tue":
					daysInWeek[2]++;
					lastRowDaysTotal[2]++;
					break;
				case "Wed":
					daysInWeek[3]++;
					lastRowDaysTotal[3]++;
					break;
				case "Thu":
					daysInWeek[4]++;
					lastRowDaysTotal[4]++;
					break;
				case "Fri":
					daysInWeek[5]++;
					lastRowDaysTotal[5]++;
					break;
				case "Sat":
					daysInWeek[6]++;
					lastRowDaysTotal[6]++;
			}
		}
		for (let j = 0; j < daysInWeek.length; j++) {
			var cell = document.createElement("DIV");
			cell.innerHTML = daysInWeek[j];
			matrix.appendChild(cell);
		}
		var total = document.createElement("DIV");
		total.innerHTML = daysInWeek.reduce((total, value) => total + value);
		matrix.appendChild(total);
	}
	//last row
	var lastRowTotal = document.createElement("DIV");
	lastRowTotal.innerHTML = "Total";
	matrix.appendChild(lastRowTotal);

	for (let k = 0; k < lastRowDaysTotal.length; k++) {
		var lastRowDayTotal = document.createElement("DIV");
		lastRowDayTotal.innerHTML = lastRowDaysTotal[k];
		matrix.appendChild(lastRowDayTotal);
	}

	var lastRowDaysInYearTotal = document.createElement("DIV");
	lastRowDaysInYearTotal.innerHTML = lastRowDaysTotal.reduce((total, value) => total + value);
	matrix.appendChild(lastRowDaysInYearTotal);
}