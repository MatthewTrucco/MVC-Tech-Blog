document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('new-comment-form');

    commentForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const comment = document.getElementById('comment-text').value;
        const postId = document.getElementById('post-id').value; // Assuming you have a hidden input with the post's ID

        try {
            const response = await fetch(`/api/posts/${postId}/comments`, {
                method: 'POST',
                body: JSON.stringify({ comment }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                // Dynamically update the page to show the new comment
                // or reload the page to see the updated list of comments
                location.reload();
            } else {
                alert('Failed to post comment');
            }
        } catch (err) {
            console.error('Failed to submit comment:', err);
        }
    });
});
