document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout-button');

    logoutButton.addEventListener('click', async () => {
        try {
            const response = await fetch('/api/users/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                // Redirect to homepage or login page after successful logout
                window.location.href = '/login';
            } else {
                // Display an error message
                alert('Failed to log out');
            }
        } catch (err) {
            console.error('Error during logout:', err);
        }
    });
});
