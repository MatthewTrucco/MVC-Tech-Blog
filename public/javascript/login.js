document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                // Redirect to dashboard or homepage
                window.location.href = '/dashboard';
            } else {
                // Display an error message
                alert('Failed to log in');
            }
        } catch (err) {
            console.error('Error during login:', err);
        }
    });
});
