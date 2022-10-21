import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Blogs = () => {

  const[blogs, setBlogs] = useState([
    {
      title:'My new website',
      body: 'lots of text', 
      author: 'Guneet', 
      id:1 
    },
    {
      title:'Welcome party!',
      body: 'lots of text', 
      author: 'Guneet', 
      id:2
    },
    {
      title:'Web dev tips and tricks',
      body: 'lots of text', 
      author: 'Guneet', 
      id:3
    }
  ]);

  const [ name, setName ]= useState('Guneet');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }
  useEffect(() =>{
    console.log('use effect ran!');
    console.log(name);
  }, [name]);// this does not run every time UI re-renders
  //dependency added as to when run this function needs to run

  return (
    <div className='home'>
      <BlogList blogs={blogs} title="All Blogs" handleDelete={ handleDelete }/>
      <button onClick={() => setName('Rekhi')}>change name</button>
      <p>Edited by { name }</p>
    </div>
  );
};

export default Blogs;