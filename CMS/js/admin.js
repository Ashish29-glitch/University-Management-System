const kpiCards = document.querySelectorAll('.kpi-card');
const editModal = document.getElementById('editModal');
const modalKpiValueInput = document.getElementById('modal-kpi-value');
const saveButton = document.getElementById('save-button');
const closeBtn = document.querySelector('.close');

let editingKpiCard = null;

kpiCards.forEach(card => {
  card.addEventListener('click', () => {
    editingKpiCard = card;
    const kpiValueElement = card.querySelector('.kpi-value'); // Corrected line
    modalKpiValueInput.value = kpiValueElement.textContent;
    editModal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  editModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === editModal) {
    editModal.style.display = 'none';
  }
});

saveButton.addEventListener('click', () => {
  if (editingKpiCard) {
    const newValue = modalKpiValueInput.value.trim();
    if (newValue !== '') {
      editingKpiCard.querySelector('.kpi-value').textContent = newValue; // Corrected line
      editModal.style.display = 'none';
    } else {
      alert('Please enter a valid value.');
    }
  }
});




const loginForm = document.getElementById('loginForm');
const roleInput = document.getElementById('role');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error');

const users = {
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

const addFacultyForm = document.getElementById('addFacultyForm');
const messageContainer = document.getElementById('message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const role = roleInput.value.trim();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    errorMessage.textContent = '';

    if (role === '') {
        errorMessage.textContent = 'Please select a role.';
        return;
    }

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please enter both name and password.';
        return;
    }

    let userFound = false;
    if (users[role]) {
        userFound = users[role].some(user => user.name === username && user.password === password);
    }

    if (userFound) {
        alert(`Login successful! Redirecting ${role} to dashboard...`);
    } else {
        errorMessage.textContent = 'Invalid credentials. Please try again.';
    }
});

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

function showMessage(message, type) {
    messageContainer.textContent = message;
    messageContainer.className = `message ${type}`;
    messageContainer.style.display = 'block';

    setTimeout(() => {
        messageContainer.style.display = 'none';
    }, 3000);
}


const addStudentForm = document.getElementById('addStudentForm');

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