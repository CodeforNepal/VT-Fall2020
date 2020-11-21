/*
the list of towns. hardcoded for simplicity in the example.
*/
// Will be read from csv file
const towns = [
{name: "town1", x: 100, y: 100},
{name: "town2", x: 110, y: 100},
{name: "town3", x: 100, y: 110},
{name: "town4", x: 110, y: 110}
];
const test_centers = [
{name: "McDonalds", x: 100, y: 100},
{name: "Wendys", x: 110, y: 100},
{name: "Dominos", x: 100, y: 110},
{name: "Pizza Hut", x: 110, y: 110},
];
const UNITS = "KM";

// var towns;
// $.ajax({
// 	type: "GET",
// 	url: "towns.csv",
// 	dataType: "text",
// 	success: (response) => {
// 		towns = csv.toObjects(response);
// 	},
// 	error: (response) => {
// 		alert("Error opening towns file: " + response);
// 	}
// });

// var test_centers;
// $.ajax({
// 	type: "GET",
// 	url: "test_centers.csv",
// 	dataType: "text",
// 	success: (response) => {
// 		test_centers = csv.toObjects(response);
// 	},
// 	error: (response) => {
// 		alert("Error opening test centers file: " + response);
// 	}
// });

/*
process the input the users send.
*/
function getInput() {
    var townInput = document.getElementById('townInput');
    var distInput = document.getElementById('distanceInput');
	console.log(townInput.value);
	let town = getTown(townInput);
	if(town === null)
	{
		let townList = '';
		for(let i = 0; i < towns.length; i++)
		{
			if(i < towns.length - 1)
			{
				townList += towns[i].name + ', ';
			}			
			else{
				townList += 'and ' + towns[i].name;
			}
				
		}
		alert('please enter a valid town. valid towns are: ' + townList);
		return;
	}
	if(!isNaN(distInput))
	{
		alert('please enter a valid number for the distance');
		return;
	}
    //alert("Information Submitted. Thank you.");
    findTestCenters(distInput.value, town);
}

/*
find a town based on the name. (assumes no duplicate names)
*/
function getTown(town)	
{
	if(town === null)
	{
		return null;
	}
	for(let i = 0; i < towns.length; i++)
	{
		if(towns[i].name === town.value)
		{
			return towns[i];
		}
	}
	return null;
}

/*
find all test centers within the distance of the town selected and display them on the main page
*/
function findTestCenters(distance, town)
{
	let disp = document.getElementById("results");
	removeAllChildNodes(disp);
	for(let i = 0; i < test_centers.length; i++)
	{
		let rDist = findDistance(test_centers[i], town)
		if( rDist <= distance)
		{
			let elem = document.createTextNode(test_centers[i].name + ' is ' + rDist + ' ' + UNITS + ' away.');
			let elem2 = document.createElement("br");
			disp.appendChild(elem);
			disp.appendChild(elem2);
			console.log(elem);
		}
	}
}

/*
clear the div to make sure new results get displayed and do not contain old ones
*/
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*
find distance between two town JSON's
*/
function findDistance(town1, town2)
{
let x = Math.pow(town1.x - town2.x, 2);
let y = Math.pow(town1.y - town2.y, 2);
return Math.sqrt(x + y);
}

/*
Add a new town to the database
*/
function addTown() {
	
	alert('New town submitted. Thank you.');
}