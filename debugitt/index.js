function issueReport() {
    let reportDiv = document.getElementById("issue-div"); // Moved inside the function
    let name = document.getElementById("name").value;
    let location = document.getElementById("location").value;
    let desc = document.getElementById("desc").value;

    reportDiv.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Issue Description:</strong> ${desc}</p>
        <hr>
    `;
}

function voteCaste(param) {
    let reportDiv = document.getElementById("issue-div"); 

    alert(`Your vote has been recorded under ${param} issue`);

    document.getElementById("name").value = "";
    document.getElementById("location").value = "";
    document.getElementById("desc").value = "";

    reportDiv.innerHTML = "";
}
