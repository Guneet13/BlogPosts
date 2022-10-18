import React, { useState } from 'react';
import BlogList from './BlogList';

const Blogs = () => {

  const[blogs, setBlogs] = useState([
    {title:'My new website',body: 'lots of text', author: 'Guneet', id:1 },
    {title:'Welcome party!',body: 'lots of text', author: 'Guneet', id:2},
    {title:'Web dev tips and tricks',body: 'lots of text', author: 'Guneet', id:3}
  ]);


  return (
    <div>
      <BlogList blogs={blogs} title="All Blogs"/>
    </div>
     
  );
};

export default Blogs;