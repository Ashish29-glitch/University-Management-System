// const loginForm = document.getElementById('loginForm');
// const roleInput = document.getElementById('role');
// const usernameInput = document.getElementById('username');
// const passwordInput = document.getElementById('password');
// const errorMessage = document.getElementById('error');

// const users = {
//     student: [
//         { name: 'akash', password: 'akash123' },
//         { name: 'ashish', password: 'ashish123' }
//     ],
//     teacher: [
//         { name: 'amar sir', password: 'amarsir123' },
//         { name: 'sasmita mam', password: 'sasmitamam123' }
//     ],
//     admin: [
//         { name: 'gopal', password: 'gopal123' }
//     ]
// };

// loginForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const role = roleInput.value.trim();
//     const username = usernameInput.value.trim();
//     const password = passwordInput.value.trim();

//     errorMessage.textContent = '';

//     if (role === '') {
//         errorMessage.textContent = 'Please select a role.';
//         return;
//     }

//     if (username === '' || password === '') {
//         errorMessage.textContent = 'Please enter both name and password.';
//         return;
//     }

//     // Verify credentials
//     let userFound = false;
//     if (users[role]) {
//         userFound = users[role].some(user => user.name === username && user.password === password);
//     }

//     if (userFound) {
//         // Redirect based on role
//         switch (role) {
//             case 'admin':
//                 window.location.href = 'admin.html';
//                 break;
//             case 'teacher':
//                 window.location.href = 'faculty.html';
//                 break;
//             case 'student':
//                 window.location.href = 'student.html';
//                 break;
//             default:
//                 alert('Login successful! Redirecting to dashboard...');
//         }
//     } else {
//         errorMessage.textContent = 'Invalid credentials. Please try again.';
//     }
// });






// const kpiCards = document.querySelectorAll('.kpi-card');
// const editModal = document.getElementById('editModal');
// const modalKpiValueInput = document.getElementById('modal-kpi-value');
// const saveButton = document.getElementById('save-button');
// const closeBtn = document.querySelector('.close');

// let editingKpiCard = null;

// kpiCards.forEach(card => {
//   card.addEventListener('click', () => {
//     editingKpiCard = card;
//     const kpiValueElement = card.querySelector('.kpi-value'); // Corrected line
//     modalKpiValueInput.value = kpiValueElement.textContent;
//     editModal.style.display = 'flex';
//   });
// });

// closeBtn.addEventListener('click', () => {
//   editModal.style.display = 'none';
// });

// window.addEventListener('click', (event) => {
//   if (event.target === editModal) {
//     editModal.style.display = 'none';
//   }
// });

// saveButton.addEventListener('click', () => {
//   if (editingKpiCard) {
//     const newValue = modalKpiValueInput.value.trim();
//     if (newValue !== '') {
//       editingKpiCard.querySelector('.kpi-value').textContent = newValue; // Corrected line
//       editModal.style.display = 'none';
//     } else {
//       alert('Please enter a valid value.');
//     }
//   }
// });

// // const loginForm = document.getElementById('loginForm');
// // const roleInput = document.getElementById('role');
// // const usernameInput = document.getElementById('username');
// // const passwordInput = document.getElementById('password');
// // const errorMessage = document.getElementById('error');

// // // const users = {
// // //     student: [
// // //         { name: 'akash', password: 'akash123' },
// // //         { name: 'ashish', password: 'ashish123' }
// // //     ],
// // //     teacher: [
// // //         { name: 'amar sir', password: 'amarsir123' },
// // //         { name: 'sasmita mam', password: 'sasmitamam123' }
// // //     ],
// // //     admin: [
// // //         { name: 'gopal', password: 'gopal123' }
// // //     ]
// // // };


// // // Load users from localStorage or set default
// // let users = JSON.parse(localStorage.getItem('users')) || {
// //     student: [
// //         { name: 'akash', password: 'akash123' },
// //         { name: 'ashish', password: 'ashish123' }
// //     ],
// //     teacher: [
// //         { name: 'amar sir', password: 'amarsir123' },
// //         { name: 'sasmita mam', password: 'sasmitamam123' }
// //     ],
// //     admin: [
// //         { name: 'gopal', password: 'gopal123' }
// //     ]
// // };

// // // Save to localStorage whenever users object updates
// // function saveUsersToStorage() {
// //     localStorage.setItem('users', JSON.stringify(users));
// // }



// // loginForm.addEventListener('submit', (event) => {
// //     event.preventDefault();
    
// //     const role = roleInput.value.trim();
// //     const username = usernameInput.value.trim();
// //     const password = passwordInput.value.trim();
    
// //     errorMessage.textContent = '';
    
// //     if (role === '') {
// //         errorMessage.textContent = 'Please select a role.';
// //         return;
// //     }
    
// //     if (username === '' || password === '') {
// //         errorMessage.textContent = 'Please enter both name and password.';
// //         return;
// //     }
    
// //     let userFound = false;
// //     if (users[role]) {
// //         userFound = users[role].some(user => user.name === username && user.password === password);
// //     }
    
// //     if (userFound) {
// //         alert(`Login successful! Redirecting ${role} to dashboard...`);
// //     } else {
// //         errorMessage.textContent = 'Invalid credentials. Please try again.';
// //     }
// // });

// const addFacultyForm = document.getElementById('addFacultyForm');
// const messageContainer = document.getElementById('message');
// addFacultyForm.addEventListener('submit', (event) => {
//     event.preventDefault();
    
//     const facultyName = document.getElementById('facultyName').value.trim();
//     const facultyPassword = document.getElementById('facultyPassword').value.trim();

//     if (facultyName === '' || facultyPassword === '') {
//         showMessage('Please enter both faculty name and password.', 'error');
//         return;
//     }

//     if (!users.teacher) {
//         users.teacher = [];
//     }
//     users.teacher.push({ name: facultyName, password: facultyPassword });

//     console.log('Updated users object:', users);

//     showMessage('Faculty added successfully!', 'success');
//     addFacultyForm.reset();
// });

// function showMessage(message, type) {
//     messageContainer.textContent = message;
//     messageContainer.className = `message ${type}`;
//     messageContainer.style.display = 'block';

//     setTimeout(() => {
//         messageContainer.style.display = 'none';
//     }, 3000);
// }


// const addStudentForm = document.getElementById('addStudentForm');

// addStudentForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const studentName = document.getElementById('studentName').value.trim();
//     const studentPassword = document.getElementById('studentPassword').value.trim();

//     if (studentName === '' || studentPassword === '') {
//         showMessage('Please enter both student name and password.', 'error');
//         return;
//     }

//     if (!users.student) {
//         users.student = [];
//     }
//     users.student.push({ name: studentName, password: studentPassword });

//     console.log('Updated users object:', users);

//     showMessage('Student added successfully!', 'success');
//     addStudentForm.reset();
// });









let users = {
    student: [
        { name: 'akash', password: 'akash123' },
        { name: 'ashish', password: 'ashish123' }
    ],
    teacher: [
        { name: 'amar sir', password: 'amarsir123' },
        { name: 'sasmita mam', password: 'sasmitamam123' }
    ],
    admin: [
        { name: 'gopal', password: 'gopal123' }
    ]
};

function showMessage(message, type) {
    const messageContainer = document.getElementById('message'); // Get it inside the function
    if (!messageContainer) return; // Important: Check if the element exists.

    messageContainer.textContent = message;
    messageContainer.className = `message ${type}`;
    messageContainer.style.display = 'block';

    setTimeout(() => {
        messageContainer.style.display = 'none';
    }, 3000);
}

// This part is used by login.html
// if (typeof window !== 'undefined' && document.getElementById('loginForm')) {
//     const loginForm = document.getElementById('loginForm');
//     const roleInput = document.getElementById('role');
//     const usernameInput = document.getElementById('username');
//     const passwordInput = document.getElementById('password');
//     const errorMessage = document.getElementById('error');

//     loginForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const role = roleInput.value.trim();
//         const username = usernameInput.value.trim();
//         const password = passwordInput.value.trim();

//         errorMessage.textContent = '';

//         if (role === '') {
//             errorMessage.textContent = 'Please select a role.';
//             return;
//         }

//         if (username === '' || password === '') {
//             errorMessage.textContent = 'Please enter both name and password.';
//             return;
//         }

//         // Verify credentials
//         let userFound = false;
//         if (users[role]) {
//             userFound = users[role].some(user => user.name === username && user.password === password);
//         }

//         if (userFound) {
//             // Redirect based on role
//             switch (role) {
//                 case 'admin':
//                     window.location.href = 'admin.html';
//                     break;
//                 case 'teacher':
//                     window.location.href = 'faculty.html';
//                     break;
//                 case 'student':
//                     window.location.href = 'student.html';
//                     break;
//                 default:
//                     alert('Login successful! Redirecting to dashboard...');
//             }
//         } else {
//             errorMessage.textContent = 'Invalid credentials. Please try again.';
//         }
//     });
// }

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const role = document.getElementById('role').value.trim();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            const errorMessage = document.getElementById('error');

            errorMessage.textContent = '';

            if (role === '') {
                errorMessage.textContent = 'Please select a role.';
                return;
            }

            if (username === '' || password === '') {
                errorMessage.textContent = 'Please enter both name and password.';
                return;
            }

            // Verify credentials
            let userFound = false;
            if (users[role]) {
                userFound = users[role].some(user => user.name === username && user.password === password);
            }

            if (userFound) {
                // Redirect based on role
                switch (role) {
                    case 'admin':
                        window.location.href = 'admin.html'; //  Make sure these files exist
                        break;
                    case 'teacher':
                        window.location.href = 'faculty.html';  // Make sure these files exist
                        break;
                    case 'student':
                        window.location.href = 'student.html';  // Make sure these files exist
                        break;
                    default:
                        alert('Login successful! Redirecting to dashboard...');
                }
            } else {
                errorMessage.textContent = 'Invalid credentials. Please try again.';
            }
        });
    }
});



// These parts are used by admin.html
// if (typeof window !== 'undefined' && document.getElementById('addFacultyForm')) {
//     const addFacultyForm = document.getElementById('addFacultyForm');
//     const messageContainer = document.getElementById('message');

//     addFacultyForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const facultyName = document.getElementById('facultyName').value.trim();
//         const facultyPassword = document.getElementById('facultyPassword').value.trim();

//         if (facultyName === '' || facultyPassword === '') {
//             showMessage('Please enter both faculty name and password.', 'error');
//             return;
//         }

//         if (!users.teacher) {
//             users.teacher = [];
//         }
//         users.teacher.push({ name: facultyName, password: facultyPassword });

//         console.log('Updated users object:', users);

//         showMessage('Faculty added successfully!', 'success');
//         addFacultyForm.reset();
//     });

//     function showMessage(message, type) {
//         messageContainer.textContent = message;
//         messageContainer.className = `message ${type}`;
//         messageContainer.style.display = 'block';

//         setTimeout(() => {
//             messageContainer.style.display = 'none';
//         }, 3000);
//     }
// }


// if (typeof window !== 'undefined' && document.getElementById('addStudentForm')) {
//     const addStudentForm = document.getElementById('addStudentForm');


//     addStudentForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const studentName = document.getElementById('studentName').value.trim();
//         const studentPassword = document.getElementById('studentPassword').value.trim();

//         if (studentName === '' || studentPassword === '') {
//             showMessage('Please enter both student name and password.', 'error');
//             return;
//         }

//         if (!users.student) {
//             users.student = [];
//         }
//         users.student.push({ name: studentName, password: studentPassword });

//         console.log('Updated users object:', users);

//         showMessage('Student added successfully!', 'success');
//         addStudentForm.reset();
//     });
// }


document.addEventListener('DOMContentLoaded', () => {
    const addFacultyForm = document.getElementById('addFacultyForm');
    const addStudentForm = document.getElementById('addStudentForm');


    if (addFacultyForm) {
        addFacultyForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const facultyName = document.getElementById('facultyName').value.trim();
            const facultyPassword = document.getElementById('facultyPassword').value.trim();

            if (facultyName === '' || facultyPassword === '') {
                showMessage('Please enter both faculty name and password.', 'error');
                return;
            }

            if (!users.teacher) {
                users.teacher = [];
            }
            users.teacher.push({ name: facultyName, password: facultyPassword });

            console.log('Updated users object:', users);

            showMessage('Faculty added successfully!', 'success');
            addFacultyForm.reset();
        });
    }


    if (addStudentForm) {
        addStudentForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const studentName = document.getElementById('studentName').value.trim();
            const studentPassword = document.getElementById('studentPassword').value.trim();

            if (studentName === '' || studentPassword === '') {
                showMessage('Please enter both student name and password.', 'error');
                return;
            }

            if (!users.student) {
                users.student = [];
            }
            users.student.push({ name: studentName, password: studentPassword });

            console.log('Updated users object:', users);

            showMessage('Student added successfully!', 'success');
            addStudentForm.reset();
        });
    }
});