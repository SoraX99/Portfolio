let applicantCount = 0;

function addApplicant() {
    applicantCount++;
    const applicantsDiv = document.getElementById('applicants');
    
    const applicantDiv = document.createElement('div');
    applicantDiv.className = 'applicant';
    applicantDiv.innerHTML = `
        <h3>Applicant ${applicantCount}</h3>
        <label for="applicantName${applicantCount}">Name:</label>
        <input type="text" id="applicantName${applicantCount}" required>
        
        <label for="applicantDOB${applicantCount}">Date of Birth:</label>
        <input type="date" id="applicantDOB${applicantCount}" required>
        
        <label for="applicantIncome${applicantCount}">Income:</label>
        <input type="number" id="applicantIncome${applicantCount}" min="0" required>
    `;
    
    applicantsDiv.appendChild(applicantDiv);
}