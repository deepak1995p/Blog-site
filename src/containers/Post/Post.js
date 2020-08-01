import React from 'react';
import './Post.css'
import BlogPost from '../../components/BlogPost/BlogPost';
import Sidebar from '../../components/Sidebar/Sidebar';

const Post = (props) => {
    console.log(props)

    return (
        <section className="container">
            <BlogPost {...props}/>
            <Sidebar/>
            
        </section>
    );
}

export default Post;
