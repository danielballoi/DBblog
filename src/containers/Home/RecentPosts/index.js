import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={'https://www.pexels.com/photo/seated-man-reading-newspaper-with-flames-1852389/'}alt=""/>
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Attualità</span>
                <h2>Cyberguerra tra Russia e America</h2>
                <span>pubblicato il 03/03/2022</span>
                <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firm... Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six rapt...</p>

                <button>Read More</button>     

            </div>

            


        </Card>
    </div>
   )

 }

export default RecentPosts