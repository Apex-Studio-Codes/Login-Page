// User management
class UserManager {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || {};
    }

    addUser(username, password) {
        if (this.users[username]) {
            return false;
        }
        this.users[username] = password;
        this.saveUsers();
        return true;
    }

    verifyUser(username, password) {
        return this.users[username] === password;
    }

    saveUsers() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }
}

const userManager = new UserManager();
const modal = document.getElementById('signupModal');
const messageBox = document.getElementById('messageBox');
const signupMessageBox = document.getElementById('signupMessageBox');

// Login form handling
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (userManager.verifyUser(username, password)) {
        messageBox.textContent = 'Login successful!';
        messageBox.className = 'message success';
        sessionStorage.setItem('loggedIn', username);
        setTimeout(() => window.location.href = 'dashboard.html', 1500);
    } else {
        messageBox.textContent = 'Invalid username or password';
        messageBox.className = 'message error';
    }
});

// Signup modal handling
document.querySelector('.signup-btn').addEventListener('click', () => {
    modal.style.display = 'block';
});

document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Signup form handling
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        signupMessageBox.textContent = 'Passwords do not match';
        signupMessageBox.className = 'message error';
        return;
    }

    if (userManager.addUser(username, password)) {
        signupMessageBox.textContent = 'Account created successfully!';
        signupMessageBox.className = 'message success';
        setTimeout(() => {
            modal.style.display = 'none';
            document.getElementById('signupForm').reset();
            signupMessageBox.style.display = 'none';
        }, 1500);
    } else {
        signupMessageBox.textContent = 'Username already exists';
        signupMessageBox.className = 'message error';
    }
});

// Check if user is logged in
if (sessionStorage.getItem('loggedIn')) {
    window.location.href = 'dashboard.html';
}
