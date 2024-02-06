function loadBlogData(blogId) {
    const likeCount = localStorage.getItem(`${blogId}_likeCount`) || 0;
    const comments = JSON.parse(localStorage.getItem(`${blogId}_comments`)) || [];

    document.getElementById(`likeCount${blogId.charAt(blogId.length - 1)}`).innerText = likeCount;

    const commentList = document.getElementById(`commentList${blogId.charAt(blogId.length - 1)}`);
    commentList.innerHTML = comments.map(comment => `<li>${comment}</li>`).join('');
}
 function like(blogId) {
    let likeCount = parseInt(localStorage.getItem(`${blogId}_likeCount`)) || 0;
    likeCount = (likeCount === 0) ? 1 : 0;

    localStorage.setItem(`${blogId}_likeCount`, likeCount);

    const likeButton = document.getElementById(`likeButton${blogId.charAt(blogId.length - 1)}`);
    const likeCountElement = document.getElementById(`likeCount${blogId.charAt(blogId.length - 1)}`);

    likeButton.classList.toggle('liked');
    likeCountElement.innerText = likeCount;
    likeButton.textContent = (likeCount === 1) ? 'Liked!' : 'Like';
}
document.addEventListener('DOMContentLoaded', function() {
    like('yourBlogId');
});
function addComment(blogId) {
    const commentInput = document.getElementById(`commentInput${blogId.charAt(blogId.length - 1)}`);
    const commentList = document.getElementById(`commentList${blogId.charAt(blogId.length - 1)}`);

    const comment = commentInput.value.trim();
    if (comment !== '') {
        let comments = JSON.parse(localStorage.getItem(`${blogId}_comments`)) || [];
        comments.push(comment);
        localStorage.setItem(`${blogId}_comments`, JSON.stringify(comments));

        commentList.innerHTML += `<li>${comment}</li>`;
        commentInput.value = '';
    }
}
loadBlogData('blog1');
loadBlogData('blog2');
