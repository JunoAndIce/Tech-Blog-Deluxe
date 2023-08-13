// Code for handling comments.
// POST to the api.
const commentFormHandler = async function (event) {
	event.preventDefault();

	const blog_id = document.querySelector('.comment-box').dataset.blog_id;

	const text = document.querySelector('#comment').value.trim();
	// console.log(blogId, text);
	if (text) {
		await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({
				blog_id,
				text,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		document.location.reload();
	}
};

document
	.querySelector('.comment-box')
	.addEventListener('submit', commentFormHandler);