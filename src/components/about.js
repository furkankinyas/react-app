import React from 'react';
import Header from './header';

 function About({ match }){

    return(
      <div>
        <Header activePage={match.url}/>
        <h2 className="text-center padding-lg font-size-24">About</h2>
      </div>
    )

}

export default About;