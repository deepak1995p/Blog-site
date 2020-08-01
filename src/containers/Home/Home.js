import React from 'react';
import Card from '../../components/UI/Card/Card';
import './Home.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import RecentPost from './Recent Post/RecentPost';
import blogData from '../../data/blog.json';

const Home = (props) => {

    const SideImage = (props) => {
        return (
            <div style={{ height: `${props.height}px` }}>
                <img src={props.src} alt="babyImage" />
            </div>
        );
    }

    const ImageGallery = (props) => {
        return (
            <div className="galleryPost" style={props.galleryStyle}>

                <section style={{ width: '70% ' }}>
                    <div className='postImageWrapper'>
                        <img className="galleryImage" src={require('../../blogPostImages/'+props.ImagesArray[1])} alt="" />
                    </div>
                </section>

                <section style={{ width: '30% ' }} className={"sideImageWrapper"}>

                    <SideImage
                        height={props.sideImageHeight}
                        src={require('../../blogPostImages/'+props.ImagesArray[1])}
                        alt=""

                    />
                    <SideImage
                        height={props.sideImageHeight}
                        src={require('../../blogPostImages/'+props.ImagesArray[2])}
                        alt=""

                    />
                    <SideImage
                        height={props.sideImageHeight}
                        src={require('../../blogPostImages/'+props.ImagesArray[3])}
                        alt=""

                    />


                </section>
            </div>
        );
    }

    const galleryHeight = 450;
    const galleryStyle = {
        height: galleryHeight + 'px',
        overflow: 'hidden'

    }

    const sideImageHeight = galleryHeight / 3;

    const imageArray = blogData.data.map(post => post.blogImage)

    return (
        <div>
            <Card>
                <ImageGallery
                    largeWidth="70%"
                    smallWidht="30%"
                    sideImageHeight={sideImageHeight}
                    galleryStyle={galleryStyle}
                    ImagesArray={imageArray}

                />
            </Card>

            <section className="homeContainer">
                <RecentPost style={{ width: '70%' }} />
                {/* <RecentPost style={{ width: '70%' }} /> */}
                <Sidebar />
            </section>

        </div>
    )
}

export default Home
