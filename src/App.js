import React, { Component } from 'react';
import Header from './Header';
import MernContent  from './MernContent';
import Content from './MainContent';
import Footer from './Footer';
import { BrowserRouter as Router,Route,} from 'react-router-dom';
// import MernContent from './MernContent';


class App extends Component{
    render(){
        return(
            <>
                <h1>hi I am Girish</h1>
                <Router>
                    <Header />
                    <MernContent />
                    <Route path='/content' component={Content} /> 
                    <Footer />
                </Router>
            </>
        )
    }
}



export default App;