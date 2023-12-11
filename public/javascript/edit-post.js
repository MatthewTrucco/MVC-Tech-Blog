document.addEventListener('DOMContentLoaded', () => {
    const editPostForm = document.getElementById('edit-post-form');

    editPostForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const postId = document.getElementById('post-id').value; // Assuming an input field with the post ID
        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;

        try {
            const response = await fetch(`/api/posts/${postId}`, {
                method: 'PUT',
                body: JSON.stringify({ title, content }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                // Redirect to the updated post or dashboard
                window.location.href = `/posts/${postId}`;
            } else {
                // Display an error message
                alert('Failed to update post');
            }
        } catch (err) {
            console.error('Error updating post:', err);
        }
    });
});
