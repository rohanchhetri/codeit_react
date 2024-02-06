// Their is three phase under react life cycle
// 1.mouting: First loading component phase  
// 2.updateing: update in component 
// 3.unmounting: removing the component

// if you want to initiallized some variable befor mounting or loading 
// then you have to pass it in constructor

import React, { Component } from 'react'

export default class ReactLifeCycle extends Component {
    // constructor(){

    // }
    componentDidMount(){
        console.log("when component render first time")
    }
    render() {
    return (
      <div>reatclifecycle</div>
    )
  }
}
