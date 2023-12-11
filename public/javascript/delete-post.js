document.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = document.querySelectorAll('.delete-post-button');

    deleteButtons.forEach(button => {
        button.addEventListener('click', async (e) => {
            const postId = e.target.getAttribute('data-id');

            if (confirm('Are you sure you want to delete this post?')) {
                try {
                    const response = await fetch(`/api/posts/${postId}`, {
                        method: 'DELETE'
                    });

                    if (response.ok) {
                        // Remove the post element from the page or redirect
                        document.querySelector(`#post-${postId}`).remove();
                    } else {
                        alert('Failed to delete post');
                    }
                } catch (err) {
                    console.error('Error deleting post:', err);
                }
            }
        });
    });
});
