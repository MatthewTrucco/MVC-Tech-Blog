document.addEventListener('DOMContentLoaded', () => {
    const addPostForm = document.getElementById('new-post-form');

    addPostForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;

        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                body: JSON.stringify({ title, content }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                window.location.href = '/dashboard';
            } else {
                alert('Failed to create post');
            }
        } catch (err) {
            console.error('Failed to submit post:', err);
        }
    });
});
