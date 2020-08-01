import React, { useState, useEffect } from 'react';
import './sidebar.css'
import Card from '../UI/Card/Card';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);


    return (

        <div className='sidebarContainer' style={{width: props.width}}>
            <Card style={{ marginBottom: '20px', boxSizing: 'border-box', padding: '10px' }}>
                <div className='cardHeader'>
                    <span>About us</span>
                </div>
                <div className="profileImage">
                    <img src={require('../../blogPostImages/dpk2.jpg')} alt='profileImage' />
                </div>
                <div className='cardBody'>
                    <p className='personalBio'>My name is Deepak Patel. I am a software developer specialization in Full Stack development.</p>
                </div>

            </Card>
            <Card style={{ marginBottom: '20px', boxSizing: 'border-box', padding: '10px' }}>
                <div className='cardHeader'>
                    <span><i class="fa fa-facebook-square" aria-hidden="true"></i></span>
                </div>

            </Card>
            <Card style={{ marginBottom: '20px', boxSizing: 'border-box', padding: '10px' }}>
                <div className='cardHeader'>
                    <span>Recent Posts</span>
                </div>

                <div className='recentPosts'>
                    {posts.map(post => {
                        return (
                            <NavLink key={post.id} to={`/post/${post.id}`}>
                                <div className='recentPost'>
                                    <h3>{post.blogTitle}</h3>
                                    <span>{post.postedOn}</span>
                                </div>
                            </NavLink>

                        );
                    })}

                </div>
            </Card>
        </div>
    );
}

export default Sidebar;
