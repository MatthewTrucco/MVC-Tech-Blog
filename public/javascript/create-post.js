document.addEventListener('DOMContentLoaded', () => {
    const createPostForm = document.getElementById('create-post-form');

    createPostForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;

        try {
            const response = await fetch('/api/posts/create', {
                method: 'POST',
                body: JSON.stringify({ title, content }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                // Handle success (e.g., redirecting to the dashboard or post list)
                window.location.href = '/dashboard';
            } else {
                // Handle errors (e.g., displaying a message to the user)
                alert('Failed to create post');
            }
        } catch (err) {
            console.error('Failed to create post:', err);
        }
    });
});
