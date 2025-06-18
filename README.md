# Modern Login Page

A responsive and feature-rich login page implementation with dark/light theme support and local storage-based authentication.

## Features

- 🔐 User authentication (local storage-based)
- 🌓 Dark/Light theme toggle
- 📱 Responsive design
- ✨ Animated background
- 🔒 Password confirmation
- ⚡ Input validation
- 📝 User registration
- 🎨 Modern UI/UX

## Project Structure

```
Loginpage/
│
├── index.html      # Main login page
├── dashboard.html  # User dashboard
├── styles.css     # Styles for both pages
├── script.js      # JavaScript functionality
└── README.md      # Project documentation
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in a modern web browser

## Usage
1. When downloaded, edit `index.html` where `dashboard.html` is link in order to change the destination of where the login page takes you
2. Install the backend dependancies in order to run with a Php or SQL Database for User storing
3. This `README.md` can be deleted but is recommended to keep incase any support is needed

### Login
- Enter your username and password
- Click "Login" to access the dashboard
- Invalid credentials will show an error message

### Registration
1. Click "Sign Up" on the login page
2. Enter a username (3+ characters, alphanumeric)
3. Enter a password (8+ characters)
4. Confirm your password
5. Click "Create Account"

### Theme Switching
- Click the moon/sun icon to toggle between dark and light themes
- Theme preference is saved between sessions

## Form Validation

### Username Requirements
- Minimum 3 characters
- Only letters, numbers, and underscores allowed
- Must be unique during registration

### Password Requirements
- Minimum 8 characters
- Must match confirmation password during registration

## Technical Details

### Storage
- User credentials stored in localStorage
- Session management using sessionStorage
- Theme preference saved in localStorage

### Styling
- CSS custom properties for theming
- Fluid animations and transitions
- Mobile-first responsive design
- Gradient animated background

## Browser Support

Supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

To modify this project:
1. Edit HTML files for structure changes
2. Modify `styles.css` for styling
3. Update `script.js` for functionality
4. Test thoroughly in different browsers

## Future Improvements

- [ ] Add password recovery
- [ ] Implement remember me functionality
- [ ] Add email verification
- [ ] Integrate with backend server
- [ ] Add OAuth support

## License

This project is available for free use and modification.

## Credits

Created by ApexCode Studios
