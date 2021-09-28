import React, { Component } from 'react';
import img0 from './img/mern.jpg';
import './index.css';
import {Link} from 'react-router-dom'

class MernContent extends Component{
    render(){
        return(
            <div id="0" className="mernContent">
                <img src={img0} alt="pic0"/>
                <p><b>MERN</b> stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.</p>
                <ol>
                    <li>MongsoDB - document database</li>
                    <li>Express(.js) - Node.js web framework</li>
                    <li>React(.js) - a client-side JavaScript framework</li>
                    <li>Node(.js) - the premier JavaScript web server</li>
                </ol>
                <Link className="button" to='Content'>
                    <li>Key Technologies</li>
                </Link>
            </div>
        )
    }
}

export default MernContent;