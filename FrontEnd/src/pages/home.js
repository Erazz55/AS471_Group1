import React, { Component } from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';

class Home extends Component {
    state = {  }
    
    render() { 
        return ( 
            <>
                <Navigation/>
                <Hero/>
            </>
         );
    }
}
 
export default Home;