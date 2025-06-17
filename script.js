const modal = document.getElementById('signupModal');
const messageBox = document.getElementById('messageBox');
const signupMessageBox = document.getElementById('signupMessageBox');

// Login form handling
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (!username || !password) {
        messageBox.textContent = 'Please fill in all fields';
        messageBox.className = 'message error';
        return;
    }

    // Simple local authentication
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[username] === password) {
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
    const username = document.getElementById('newUsername').value.trim();
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    signupMessageBox.style.display = 'block';

    // Input validation
    if (!username || !password || !confirmPassword) {
        signupMessageBox.textContent = 'Please fill in all fields';
        signupMessageBox.className = 'message error';
        return;
    }

    if (username.length < 3) {
        signupMessageBox.textContent = 'Username must be at least 3 characters long';
        signupMessageBox.className = 'message error';
        return;
    }

    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        signupMessageBox.textContent = 'Username can only contain letters, numbers, and underscores';
        signupMessageBox.className = 'message error';
        return;
    }

    if (password.length < 8) {
        signupMessageBox.textContent = 'Password must be at least 8 characters long';
        signupMessageBox.className = 'message error';
        return;
    }

    if (password !== confirmPassword) {
        signupMessageBox.textContent = 'Passwords do not match';
        signupMessageBox.className = 'message error';
        return;
    }

    // Store user data in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[username]) {
        signupMessageBox.textContent = 'Username already exists';
        signupMessageBox.className = 'message error';
        return;
    }

    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));

    signupMessageBox.textContent = 'Account created successfully!';
    signupMessageBox.className = 'message success';
    setTimeout(() => {
        modal.style.display = 'none';
        document.getElementById('signupForm').reset();
        signupMessageBox.style.display = 'none';
    }, 1500);
});

// Check if user is logged in
if (sessionStorage.getItem('loggedIn')) {
    window.location.href = 'dashboard.html';
}

// Theme switching functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');

function setTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeIcon.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('darkTheme', isDark);
}

document.addEventListener('DOMContentLoaded', () => {
    const prefersDark = localStorage.getItem('darkTheme') === 'true' || 
                       window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark);
});

themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'dark';
    setTheme(isDark);
});
