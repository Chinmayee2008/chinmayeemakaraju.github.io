// script.js
document.querySelectorAll('.blog-post').forEach(post => {
    post.addEventListener('click', function() {
        // Remove active class from all posts
        document.querySelectorAll('.blog-post').forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked post
        this.classList.add('active');
        
        // Get corresponding grid item
        const targetGrid = this.dataset.grid;
        
        // Hide all grid items
        document.querySelectorAll('.grid-item').forEach(item => {
            item.classList.add('hidden');
        });
        
        // Show target grid item
        document.querySelector(`.grid-item.${targetGrid}`).classList.remove('hidden');
    });
});
