document.addEventListener('DOMContentLoaded', () => {
    // Academic Data Structure
    const academicData = [
        {
            semester: 1,
            tgpa: 6.79,
            courses: [
                { code: 'CSE111', name: 'ORIENTATION TO COMPUTING-1', grade: 'A (Very Good)' },
                { code: 'CSE326', name: 'INTERNET PROGRAMMING LABORATORY', grade: 'A (Very Good)' },
                { code: 'INT108', name: 'PYTHON PROGRAMMING', grade: 'A (Very Good)' },
                { code: 'MEC136', name: 'ENGINEERING GRAPHICS AND DIGITAL FABRICATION', grade: 'C (Very Good)' },
                { code: 'MTH174', name: 'ENGINEERING MATHEMATICS', grade: 'A (Very Good)' },
                { code: 'PES318', name: 'SOFT SKILLS-1', grade: 'B (Average)' },
                { code: 'PHY110', name: 'ENGINEERING PHYSICS', grade: 'C (Average)' }
            ]
        },
        {
            semester: 2,
            tgpa: 7.6,
            courses: [
                { code: 'CHE110', name: 'ENVIRONMENTAL STUDIES', grade: 'B (Average)' },
                { code: 'CSE101', name: 'COMPUTER PROGRAMMING', grade: 'A (Average)' },
                { code: 'CSE121', name: 'ORIENTATION TO COMPUTING-2', grade: 'A (Average)' },
                { code: 'CSE320', name: 'SOFTWARE ENGINEERING', grade: 'A (Average)' },
                { code: 'CSE249', name: 'BASIC ELECTRICAL AND ELECTRONICS ENGINEERING', grade: 'B (Average)' },
                { code: 'CSE279', name: 'BASIC ELECTRICAL AND ELECTRONICS ENGINEERING LABORATORY', grade: 'C (Average)' },
                { code: 'INT306', name: 'DATABASE MANAGEMENT SYSTEM', grade: 'B (Average)' },
                { code: 'MTH401', name: 'DISCRETE MATHEMATICS', grade: 'B (Average)' },
                { code: 'PEL125', name: 'UPPER INTERMEDIATE COMMUNICATION SKILLS-1', grade: 'B (Average)' }
            ]
        },
        {
            semester: 3, // Assuming the first 'SEMESTER: 2' after the second one is SEMESTER 3 based on course progression
            tgpa: 7.3,
            courses: [
                { code: 'CSE202', name: 'OBJECT ORIENTED PROGRAMMING', grade: 'A+ (Average)' },
                { code: 'CSE205', name: 'DATA STRUCTURES AND DESIGN', grade: 'A+ (Average)' },
                { code: 'CSE211', name: 'COMPUTER ORGANISATION AND DESIGN', grade: 'B (Average)' },
                { code: 'CSE306', name: 'COMPUTER NETWORK', grade: 'A (Average)' },
                { code: 'CSE307', name: 'OPERATING SYSTEM', grade: 'A (Average)' },
                { code: 'CSE316', name: 'OPERATING SYSTEM LABORATORY', grade: 'A (Average)' },
                { code: 'GEN231', name: 'COMMUNITY DEVELOPMENT PROJECT', grade: 'C (Average)' },
                { code: 'PEL132', name: 'COMMUNICATION SKILLS-2', grade: 'B (Average)' }
            ]
        },
        {
            semester: 4, // Assuming the second 'SEMESTER: 2' after the third one is SEMESTER 4
            tgpa: 8.08,
            courses: [
                { code: 'CSE310', name: 'PROGRAMMING IN JAVA', grade: 'A (Average)' },
                { code: 'CSE408', name: 'DESIGN AND ANALYSIS OF ALGORITHMS', grade: 'A (Average)' },
                { code: 'CSE330', name: 'MANAGING CLOUD SOLUTIONS', grade: 'A+ (Average)' },
                { code: 'INT362', name: 'CLOUD ARCHITECTURE AND IMPLEMENTATION-1', grade: 'A+ (Average)' },
                { code: 'INT428', name: 'ARTIFICIAL INTELLIGENCE ESSENTIALS', grade: 'A+ (Average)' },
                { code: 'MATH302', name: 'PROBABILITY AND STATISTICS', grade: 'B (Average)' },
                { code: 'PEA305', name: 'ANALYTICAL SKILLS-1', grade: 'A (Average)' }
            ]
        }
    ];

    const container = document.getElementById('semester-performance');

    academicData.forEach(sem => {
        // Create the semester card element
        const card = document.createElement('div');
        card.classList.add('semester-card');

        // Build the inner HTML for the card
        let htmlContent = `
            <h3>
                Semester ${sem.semester}
                <span>TGPA: ${sem.tgpa}</span>
            </h3>
            <table>
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        // Add course rows
        sem.courses.forEach(course => {
            htmlContent += `
                <tr>
                    <td>${course.code} :: ${course.name}</td>
                    <td>${course.grade.split('(')[0].trim()}</td>
                </tr>
            `;
        });

        // Close the table and card
        htmlContent += `
                </tbody>
            </table>
        `;

        card.innerHTML = htmlContent;
        container.appendChild(card);
    });
});