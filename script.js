function calculateWalls() {
    let fixedBudget = document.querySelector('input[name="fixedBudget"]:checked').value;
    let budget = fixedBudget === "Yes" ? document.getElementById('budget').value : document.getElementById('tentativeBudget').value;
    let wallSize = document.getElementById('sizeInput').value;
    let ratePerSqft = 28;

    // If the user did not specify a wall size, assign default values based on the type of wall selected
    if (!wallSize) {
        if (document.getElementById('wallType').value === "Premium Walls") {
            wallSize = 2000;
        } else if (document.getElementById('wallType').value === "High Rise Walls") {
            wallSize = 200;
        } else if (document.getElementById('wallType').value === "Low Rise Walls") {
            wallSize = 100;
        }
    }

    if (budget && wallSize) {
        let walls = Math.floor(budget / (ratePerSqft * wallSize));
        document.getElementById('wallsCount').textContent = walls;
        document.getElementById('result').style.display = 'block';
        document.getElementById('downloadButton').style.display = 'inline-block';
    }
}

function downloadPDF() {
    const doc = new jsPDF();
    doc.text(`Estimated Number of Walls: ${document.getElementById('wallsCount').textContent}`, 10, 10);
    doc.save('budget-estimation.pdf');
}
