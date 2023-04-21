var form = document.getElementById("addForm");
var addButton = document.getElementById("addButton");


addButton.addEventListener("click", function(event) {
  
	
	event.preventDefault();

    const name = form.elements["name"].value;
const age = form.elements["age"].value;
const gender = form.elements["gender"].value;


const record = {
		name: name,
		age: age,
		gender: gender,
		
	};

    

	const existingRecords = JSON.parse(localStorage.getItem("records")) || [];


	existingRecords.push(record);

	localStorage.setItem("records", JSON.stringify(existingRecords));


	form.reset();

	
	alert("Record added successfully!");
});