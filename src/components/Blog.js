import React from 'react';

const blogPosts = [
    {
        title:"Blog 1",
        content: "This is my blog"
    },
    {
        title:"Blog 2",
        content: "Having a blog is fun"
    },
    {
        title:"Blog 3",
        content: "I can code"
    },
];

const Blog = (props) => (
    <>
     {
        blogPosts.map((post) => (
            <>
                <h4 style = {{ padding : 10 }}>{post.title}</h4>
                <p style = {{ padding: 10 }}>{post.content}</p>
            </>        
            ))
        }      
    </>
);

export default Blog;