import React, { Component } from 'react'
import ReactLifeCycle from './component/reatclifecycle';

export default class ReactLifeCycleParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showComponent: false
        };
      }
    
    
      toggleComponent(){
        this.setState(prevState => ({
          showComponent: !prevState.showComponent
        }));
      }
    
      render() {
        return (
          <div>
            {/* before es6 */}
            {/* <button onClick={this.toggleComponent.bind(this)}> */}

            {/* after es6 */}
            <button onClick={()=>{this.toggleComponent()}}>
              {this.state.showComponent ? 'Unmount Component' : 'Mount Component'}
            </button>
            {this.state.showComponent && <ReactLifeCycle />}
            {/* <ReactLifeCycle /> */}
          </div>
        );
      }
    
}
