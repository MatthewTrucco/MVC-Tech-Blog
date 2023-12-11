document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('password-confirm').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('/api/users/signup', {
                method: 'POST',
                body: JSON.stringify({ username, email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                // Redirect to login or dashboard page after successful signup
                window.location.href = '/dashboard';
            } else {
                // Display an error message
                alert('Failed to sign up');
            }
        } catch (err) {
            console.error('Error during signup:', err);
        }
    });
});
