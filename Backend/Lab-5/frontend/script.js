document.addEventListener('DOMContentLoaded', () => {
    fetchBlogs();

    const blogForm = document.getElementById('blogForm');
    blogForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const blogId = document.getElementById('blogId').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (blogId) {
            await updateBlog(blogId, { title, content });
        } else {
            await createBlog({ title, content });
        }

        blogForm.reset();
        fetchBlogs();
    });
});

async function fetchBlogs() {
    const response = await fetch('http://localhost:5000/blogs');
    const blogs = await response.json();
    const blogsDiv = document.getElementById('blogs');
    blogsDiv.innerHTML = '';
    blogs.forEach(blog => {
        const blogDiv = document.createElement('div');
        blogDiv.classList.add('blog');
        blogDiv.innerHTML = `
            <h3>${blog.title}</h3>
            <p>${blog.content}</p>
            <p>${blog.createdAt}</p>
            <button onclick="editBlog('${blog._id}')">Edit</button>
            <button onclick="deleteBlog('${blog._id}')">Delete</button>
        `;
        blogsDiv.appendChild(blogDiv);
    });
}

async function createBlog(blog) {
    await fetch('http://localhost:5000/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog)
    });
}

async function updateBlog(id, blog) {
    await fetch(`http://localhost:5000/blogs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog)
    });
}

async function deleteBlog(id) {
    await fetch(`http://localhost:5000/blogs/${id}`, {
        method: 'DELETE'
    });
    fetchBlogs();
}

function editBlog(id) {
    const blog = document.querySelector(`[onclick="editBlog('${id}')"]`).parentElement;
    document.getElementById('blogId').value = id;
    document.getElementById('title').value = blog.querySelector('h3').textContent;
    document.getElementById('content').value = blog.querySelector('p').textContent;
}