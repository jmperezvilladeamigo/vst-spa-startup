import React from 'react'
import AppNavBar from './AppNavBar';

export default class AppMainLayout extends React.Component {

  render() {
    return (
      <div>
        <AppNavBar {...this.props} />

	    <div className="container">
	      {this.props.children}
	    </div>
	    
	  </div>
    );
  }

}
