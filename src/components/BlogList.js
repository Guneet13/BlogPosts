import React from 'react';

const BlogList = (prop) => {

  const blogs = prop.blogs;
  const title = prop.title;
  const handleDelete = prop.handleDelete;

  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <button onClick = {()=>handleDelete(blog.id)}>Delete Blog</button>
          </div>
        ))
      }
    </div>
     
  );
};

export default BlogList;