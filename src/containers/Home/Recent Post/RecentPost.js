import React from 'react';
import Card from '../../../components/UI/Card/Card';
// import blogPost from '../../data/blog.json';
import './Recent.css'

const RecentPost = (props) => {
    
    
    return (
        <div style={props.style}>
        <Card style={{ marginBottom: '20px' }} >
            <div className= "postImageWrapper">
                <img src={require("../../../blogPostImages/affection-baby-baby-girl-beautiful-377058.jpg")} alt="postImage"/>
            </div>
            <div style={{textAlign:'center'}} className="blogButton">
                <span className="span">Featured</span>
                <h2>beautiful always be beautiful</h2>
                <span>posted on june 5, 2020</span>
                <p>“Gongfu is an ancient Chinese term describing work/devotion/effort that has been successfully applied over a substantial period of time, resulting in a degree of mastery in a specific field.  Although the term is synonymous in the West with martial arts (though it is most over rendered Kung Fu), it is equally applicable to calligraphy, painting, music, or other areas of endeavor.” – Deepak Patel</p>
                
                <button>Read More</button>
            </div>
        </Card>
        <Card style={{ marginBottom: '20px' }}>
            <div className= "postImageWrapper">
                <img src={require("../../../blogPostImages/beautiful-&-simple.jpg")} alt="postImage"/>
            </div>
            <div style={{textAlign:'center'}} className="blogButton">
                <span className="span">Life</span>
                <h2>Life is so beautiful, Keep smiling</h2>
                <span>posted on june 7, 2020</span>
                <p>“Gongfu is an ancient Chinese term describing work/devotion/effort that has been successfully applied over a substantial period of time, resulting in a degree of mastery in a specific field.  Although the term is synonymous in the West with martial arts (though it is most over rendered Kung Fu), it is equally applicable to calligraphy, painting, music, or other areas of endeavor.” – Deepak Patel</p>
                
                <button>Read More</button>
            </div>
        </Card>
    </div>
    );
}

export default RecentPost;
