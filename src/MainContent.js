import React, { Component } from 'react';
import './index.css';
import img1 from './img/mongodb.png';
import img2 from './img/express.png';
import img3 from './img/logo512.png';
import img4 from './img/node.png';
import background from "./img/sample.jpg";


class Content extends Component{

    render(){
        return(
            <div className="content" style={{ backgroundImage: `url(${background})`}}>
               
                <div id="1" className="mongoContent">
                    <img src={img1} alt="pic1"/>
                    <p><b>MongoDB</b> is an open source NoSQL database management program. NoSQL is used as an alternative to traditional relational databases. NoSQL databases are quite useful for working with large sets of distributed data. MongoDB is a tool that can manage document-oriented information, store or retrieve information.</p>
                </div>

                <div id="2" className="expressContent">
                    <img src={img2} alt="pic2"/>
                    <p><b>ExpressJs</b>, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js. The original author, TJ Holowaychuk, described it as a Sinatra-inspired server, meaning that it is relatively minimal with many features available as plugins. Express is the back-end component of popular development stacks like the MEAN, MERN or MEVN stack, together with the MongoDB database software and a JavaScript front-end framework or library</p>
                </div>

                <div id="3" className="reactContent">
                    <img src={img3} alt="pic3"/>
                    <p><b>ReactJs</b> also known as React.js is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.</p>
                </div>
                
                <div id="4" className="nodeContent">
                    <img src={img4} alt="pic4"/>
                    <p><b>NodeJs</b> is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.</p>
                </div>
            </div>
        )
    }
}


export default Content;