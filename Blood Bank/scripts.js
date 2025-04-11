

// Function to show a specific section (like Dashboard, About Us, etc.)
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => { 
        page.style.display = 'none';
    });
    
    // Show the selected page
    const pageToShow = document.getElementById(pageId);
    if (pageToShow) {
        pageToShow.style.display = 'block';
    }
}

// Function to handle Blood Bank Login Form submission (basic validation)
function handleLogin(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the values of the username and password inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === "" || password === "") {
        alert("Please fill in both username and password.");
        return;
    }

    // Simulate successful login (could be extended to check against a real database)
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to the Dashboard page
    } else {
        alert("Invalid login credentials.");
    }
}

// Function to search for blood donors (basic search simulation)
function searchDonors() {
    const bloodType = document.getElementById('bloodType').value;
    const location = document.getElementById('location').value;

    // Simulate searching for donors
    if (bloodType === "" || location === "") {
        alert("Please enter both blood type and location.");
        return;
    }

    alert(`Searching for donors with blood type ${bloodType} in ${location}...`);
    // Simulate results (you could expand this with actual data later)
    const donors = [
        { name: "John Doe", bloodType: bloodType, area: location, contact: "123-456-7890" },
        { name: "Jane Smith", bloodType: bloodType, area: location, contact: "098-765-4321" }
    ];

    const donorTable = document.getElementById('donorsTable');
    const tableBody = donorTable.querySelector('tbody');
    tableBody.innerHTML = ''; // Clear previous results

    donors.forEach(donor => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${donor.name}</td><td>${donor.bloodType}</td><td>${donor.area}</td><td>${donor.contact}</td>`;
        tableBody.appendChild(row);
    });
}

// Function to initialize page and setup event listeners
function initialize() {
    // Hide all sections by default
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // Show the welcome page by default
    showPage('welcomePage');

    // Add event listener for login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Add event listener for blood donor search
    const searchButton = document.getElementById('searchButton');
    if (searchButton) {
        searchButton.addEventListener('click', searchDonors);
    }
}

// Call initialize function when the page is loaded
document.addEventListener('DOMContentLoaded', initialize);






// // Example donor data - this is manually added
// const donors = [
//     { name: "Shivaji Surywanshi", bloodType: "A+", area: "Kalyan", contact: "123456789" },
//     { name: "Savita Surywanshi", bloodType: "A+", area: "Kalyan" },
//     { name: "Namdeo Suryawanshi", bloodType: "A+", area: "Pune" },
//     { name: "Sangita Suryawanshi", bloodType: "A-", area: "Pune" },
//     { name: "Niyati Suryawanshi", bloodType: "A+", area: "Kalyan" },
//     { name: "Prajkta Murkute", bloodType: "A+", area: "Kalyan" },
//     { name: "Simran", bloodType: "B+", area: "Kalyan" },
//     { name: "Kushal", bloodType: "B+", area: "Pune" },
//     { name: "Sayali Pawar", bloodType: "B+", area: "Pune" },
//     { name: "Kishor Pawar", bloodType: "B+", area: "Kalyan" },
//     { name: "Pratiksha Chavan", bloodType: "B+", area: "Kalyan" },
//     { name: "Chivu Pawar", bloodType: "O-", area: "Kalyan" },
//     { name: "Kamala Harris", bloodType: "O-", area: "Pune" },
//     { name: "Narendar Modi", bloodType: "O-", area: "Pune" },
//     { name: "Harry Potter", bloodType: "O-", area: "Kalyan" },
//     { name: "Singham", bloodType: "AB+", area: "Kalyan" },
//     { name: "Konitri Pawar", bloodType: "AB+", area: "Kalyan" },
//     { name: "Sunita maushi", bloodType: "AB+", area: "Pune" },
//     { name: "Satish Kashid", bloodType: "AB+", area: "Pune" },
//     { name: "Ughch privar", bloodType: "A+", area: "Kalyan" },
// ];

// // Show Donor Page
// function showDonorPage() {
//     document.getElementById('welcomePage').style.display = 'none';
//     document.getElementById('donorPage').style.display = 'block';
//     document.getElementById('receiverPage').style.display = 'none';
// }

// // Show Receiver Page
// function showReceiverPage() {
//     document.getElementById('welcomePage').style.display = 'none';
//     document.getElementById('donorPage').style.display = 'none';
//     document.getElementById('receiverPage').style.display = 'block';
// }

// // Go Back to Welcome Page
// function goBackToWelcome() {
//     document.getElementById('welcomePage').style.display = 'block';
//     document.getElementById('donorPage').style.display = 'none';
//     document.getElementById('receiverPage').style.display = 'none';
// }

// // Add Donor
// function addDonor() {
//     const name = document.getElementById('donorName').value;
//     const bloodType = document.getElementById('donorBloodType').value;
//     const area = document.getElementById('donorArea').value;
//     const contact = document.getElementById('donorContact').value;

//     if (name && bloodType && area) {
//         donors.push({ name, bloodType, area, contact });
//         alert("Thank you for adding your information to donate!");
        
//         // Clear input fields
//         document.getElementById('donorName').value = '';
//         document.getElementById('donorBloodType').value = '';
//         document.getElementById('donorArea').value = '';
//         document.getElementById('donorContact').value = '';
//     } else {
//         alert("Please fill in all fields.");
//     }
// }

// // Search for Donors
// function searchDonors() {
//     const bloodType = document.getElementById('receiverBloodType').value;
//     const area = document.getElementById('receiverArea').value;

//     const filteredDonors = donors.filter(donor => 
//         donor.bloodType.toLowerCase() === bloodType.toLowerCase() && donor.area.toLowerCase() === area.toLowerCase()
//     );

//     const tableBody = document.querySelector('#donorsTable tbody');
//     tableBody.innerHTML = ''; // Clear previous results

//     if (filteredDonors.length === 0) {
//         tableBody.innerHTML = '<tr><td colspan="3">No donors found.</td></tr>';
//     } else {
//         filteredDonors.forEach(donor => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${donor.name}</td>
//                 <td>${donor.bloodType}</td>
//                 <td>${donor.area}</td>
//                 <td>${donor.contact}</td>
//             `;
//             tableBody.appendChild(row);
//         });
//     }
// }




// Example donor data - this is manu8795623458
const donors = [
    { name: "Shivaji Surywanshi", bloodType: "A+", area: "Kalyan", contact: "1234567890"},
    { name: "Savita Surywanshi", bloodType: "A+", area: "Kalyan", contact: "8795623458" },
    { name: "Namdeo Suryawanshi", bloodType: "A+", area: "Pune", contact: "1234567890" },
    { name: "Sangita Surywanshi", bloodType: "A-", area: "Pune", contact: "1234567890" },
    { name: "Niyati Surywanshi", bloodType: "A+", area: "Kalyan", contact: "1234567890" },
    { name: "Prajkta Murkute", bloodType: "A+", area: "Kalyan", contact: "1234567890" },
    { name: "Simran", bloodType: "B+", area: "Kalyan", contact: "1234567890" },
    { name: "Kushal", bloodType: "B+", area: "Pune", contact: "8795623458" },
    { name: "Sayali Pawar", bloodType: "B+", area: "Pune", contact: "1234567890" },
    { name: "Kishor Pawar", bloodType: "B+", area: "Kalyan", contact: "1234567890" },
    { name: "Pratiksha Chavan", bloodType: "B+", area: "Kalyan", contact: "1234567890" },
    { name: "Chivu Pawar", bloodType: "O-", area: "Kalyan", contact: "1234567890" },
    { name: "Kamala Harris", bloodType: "O-", area: "Pune", contact: "8795623458" },
    { name: "Narendar Modi", bloodType: "O-", area: "Pune", contact: "1234567890" },
    { name: "Harry Potter", bloodType: "O-", area: "Kalyan", contact: "1234567890" },
    { name: "Singham", bloodType: "AB+", area: "Kalyan", contact: "1234567890" },
    { name: "Konitri Pawar", bloodType: "AB+", area: "Kalyan", contact: "8795623458" },
    { name: "Sunita maushi", bloodType: "AB+", area: "Pune", contact: "1234567890" },
    { name: "Satish Kashid", bloodType: "AB+", area: "Pune", contact: "1234567890" },
    { name: "Ughch privar", bloodType: "A+", area: "Kalyan", contact: "1234567890" },
];

// Show Donor Page
function showDonorPage() {
    document.getElementById('welcomePage').style.display = 'none';
    document.getElementById('donorPage').style.display = 'block';
    document.getElementById('receiverPage').style.display = 'none';
}

// Show Receiver Page
function showReceiverPage() {
    document.getElementById('welcomePage').style.display = 'none';
    document.getElementById('donorPage').style.display = 'none';
    document.getElementById('receiverPage').style.display = 'block';
}

// Go Back to Welcome Page
function goBackToWelcome() {
    document.getElementById('welcomePage').style.display = 'block';
    document.getElementById('donorPage').style.display = 'none';
    document.getElementById('receiverPage').style.display = 'none';
}

// Add Donor
function addDonor() {
    const name = document.getElementById('donorName').value;
    const bloodType = document.getElementById('donorBloodType').value;
    const area = document.getElementById('donorArea').value;
    const contact = document.getElementById('donorContact').value;
    

    // Check if contact number is exactly 10 digits
    const contactRegex = /^\d{10}$/;

    if (name && bloodType && area ) {
        if (contact && !contactRegex.test(contact)) {
            alert("Please enter a valid 10-digit contact number.");
            return;
        }

        // Add donor info
        donors.push({ name, bloodType, area, contact});
        alert("Thank you for adding your information to donate!");
        
        // Clear input fields
        document.getElementById('donorName').value = '';
        document.getElementById('donorBloodType').value = ''; // Reset to default value
        document.getElementById('donorArea').value = '';
        document.getElementById('donorContact').value = '';
        document.getElementById('donorDonationType').value = '';
    } else {
        alert("Please fill in all fields.");
    }
}

// Search for Donors
function searchDonors() {
    const bloodType = document.getElementById('receiverBloodType').value;
    const area = document.getElementById('receiverArea').value;

    const filteredDonors = donors.filter(donor => 
        donor.bloodType.toLowerCase() === bloodType.toLowerCase() && donor.area.toLowerCase() === area.toLowerCase()
    );

    const tableBody = document.querySelector('#donorsTable tbody');
    tableBody.innerHTML = ''; // Clear previous results

    if (filteredDonors.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="5">No donors found.</td></tr>';
    } else {
        filteredDonors.forEach(donor => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${donor.name}</td>
                <td>${donor.bloodType}</td>
                <td>${donor.area}</td>
                <td>${donor.contact || 'N/A'}</td>
            `;
            tableBody.appendChild(row);
        });
    }
}


// After login, redirect to the blood bank page
function afterLogin() {
    // For now, let's just simulate a successful login
    alert("Logged in successfully! Redirecting to the blood bank page.");
    window.location.href = "blood-bank.html"; // Redirect to blood bank page
}


// calender
// Calendar JS Code
const calendarContainer = document.getElementById('calendar');

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function renderCalendar() {
    const firstDay = new Date(currentYear, currentMonth).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();
    
    const calendarHeader = `
        <div class="calendar-header">
            <button class="prev" onclick="prevMonth()">&#60;</button>
            <span>${months[currentMonth]} ${currentYear}</span>
            <button class="next" onclick="nextMonth()">&#62;</button>
        </div>
    `;
    
    let calendarDays = "<table><tr>";
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    dayNames.forEach(day => {
        calendarDays += `<th>${day}</th>`;
    });
    calendarDays += "</tr><tr>";
    
    let day = 1;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                calendarDays += `<td></td>`;
            } else if (day <= daysInMonth) {
                calendarDays += `<td>${day}</td>`;
                day++;
            } else {
                calendarDays += `<td></td>`;
            }
        }
        calendarDays += "</tr>";
    }
    calendarDays += "</table>";
    
    calendarContainer.innerHTML = calendarHeader + calendarDays;
}

function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
}

renderCalendar();
