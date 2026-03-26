// Twitter-like post popup functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all post elements
    const posts = document.querySelectorAll('.x-post');

    // Add click event to each post
    posts.forEach(post => {
        post.style.cursor = 'pointer';
        post.addEventListener('click', function(e) {
            // Don't navigate if clicking on footer icons
            if (e.target.closest('.post-footer')) {
                return;
            }
            // Navigate to post detail page
            window.location.href = 'post.html';
        });
    });

    // Handle like button clicks
    const likeButtons = document.querySelectorAll('.footer-icon .bi-heart');
    likeButtons.forEach(button => {
        button.style.cursor = 'pointer';
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent post navigation
            
            // Toggle like state
            if (this.style.color === 'rgb(249, 24, 128)' || this.style.color === '#f91880') {
                // Unlike - remove pink color and decrease count
                this.style.color = '';
                updateLikeCount(this, -1);
            } else {
                // Like - add pink color and increase count
                this.style.color = '#f91880';
                updateLikeCount(this, 1);
            }
        });
    });

    // Function to update like count
    function updateLikeCount(heartIcon, change) {
        // Look for the like count element in the same footer-icon
        const footerIcon = heartIcon.closest('.footer-icon');
        const likeCountElement = footerIcon.querySelector('.like-count');
        
        if (likeCountElement) {
            const currentCount = parseInt(likeCountElement.textContent) || 0;
            const newCount = Math.max(0, currentCount + change);
            likeCountElement.textContent = newCount;
        }
    }

    // Handle back button on post page and trending page
    const backButton = document.querySelector('.main-top .bi-arrow-left');
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.history.back();
        });
    }

    // Store post data for the post page (optional enhancement)
    if (window.location.pathname.includes('post.html')) {
        // This would normally retrieve the specific post data
        // For now, we'll just show the first post from the main page as an example
        const postContainer = document.querySelector('.post-detail-container');
        if (postContainer) {
            // Create a sample post (in a real app, this would come from a database or API)
            const samplePost = `
                <div class="x-post">
                    <div class="x-post-profile">
                        <div class="x-post-profile-img">
                            <img src="assets/zaio.png" alt="zaio" />
                        </div>
                        <div class="x-post-profile-details">
                            <span class="x-post-title fw-bold">Zaio Institute of Technology</span>
                            <span class="x-post-date">@zaiotech · Mar 21</span>
                        </div>
                        <div class="x-icons">
                            <span class="grey_grok"><img src="assets/grey_grok.svg" alt="grey_grok" /></span>
                            <span><img src="assets/dots.svg" alt="dots" /></span>
                        </div>
                    </div>
                    <div class="x-post-details">
                        <span>Speed up your JavaScript workflow with Quokka.js</span>
                        <span>. Instant results, real-time error feedback, faster debugging, and smoother coding sessions.</span>
                        <span><a class="text-decoration-none" href="#">#Quokkajs</a><a class="text-decoration-none" href="#">#JavaScript</a><a class="text-decoration-none" href="#">#DevTools</a><a class="text-decoration-none" href="#">#ZaioTech</a></span>
                        <div class="post-details-pics">
                            <img src="assets/zaio-post.png" alt="zaio-post" />
                        </div>
                    </div>
                    <div class="post-footer">
                        <div class="footer-icon">
                            <span><i class="bi bi-chat"></i></span>
                        </div>
                        <div class="footer-icon">
                            <span><img src="assets/repeat.svg" alt="repeat" /></span>
                        </div>
                        <div class="footer-icon">
                            <span><i class="bi bi-heart"></i></span>
                            <span class="like-count">0</span>
                        </div>
                        <div class="footer-icon">
                            <span class="num-impression"><img class="impression" src="assets/impression.svg" alt="impression" />30</span>
                        </div>
                        <div class="footer-icon">
                            <span><img src="assets/grey_bookmark.svg" alt="grey_bookmark" /></span>
                            <span><img src="assets/upload.svg" alt="upload" /></span>
                        </div>
                    </div>
                </div>
            `;
            postContainer.innerHTML = samplePost;
            
            // Re-initialize like buttons for the new post
            initializeLikeButtons();
        }
    }

    // Function to initialize like buttons (for dynamic content)
    function initializeLikeButtons() {
        const likeButtons = document.querySelectorAll('.footer-icon .bi-heart');
        likeButtons.forEach(button => {
            button.style.cursor = 'pointer';
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                
                if (this.style.color === 'rgb(249, 24, 128)' || this.style.color === '#f91880') {
                    this.style.color = '';
                    updateLikeCount(this, -1);
                } else {
                    this.style.color = '#f91880';
                    updateLikeCount(this, 1);
                }
            });
        });
    }
});
