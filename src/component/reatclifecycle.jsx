// Their is three phase under react life cycle of component
// 1.mouting: First loading component phase (render,constructor,compoenentDidMount)
// 2.updateing: update in component (compoenentDidUpdate)
// 3.unmounting: removing the component (compoentWillUnmount)

// method is react component life cycle

// important
// constructor()
// render() to render the html or xml of component
//compoenentDidMount() when render method run then this method is run
//componentDidUpdate() it invoked as soon as the updating  happerns. it happen when their is state or props changes
//componentWillUnmount() this method call when when compoenent is unmounted or destroyed

//less important
// shouldComponentUpdate(nextProps, nextState):
// This method is called before rendering when new props or state are received.
// It allows you to control whether the component should re-render or not.
// By default, it returns true, but you can implement custom logic to optimize
//  performance by preventing unnecessary re-renders.

// getDerivedStateFromProps(nextProps, prevState):
//  This static method is called every time the component
//   is re-rendered, before rendering it. It allows the component
//   to update its internal state based on changes in props.
//    It should return an object to update the state, or null to indicate no change.

// getSnapshotBeforeUpdate(prevProps, prevState):
//  This method is called right before the changes from the
//  virtual DOM are to be reflected in the DOM. It allows the
//  component to capture some information from the
//  DOM (e.g., scroll position) before it is potentially changed.
//  The value returned by this method will be passed as the third parameter to componentDidUpdate().

// if you want to initiallized some variable befor mounting or loading
// then you have to pass it in constructor

import React, { Component } from "react";

class ReactLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      status: false,
    };
    // console.log('Constructor called');
  }

  componentDidMount() {
    // console.log('Component did mount');
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('Component did update');
  }

  componentWillUnmount() {
    // console.log('Component will unmount');
    clearInterval(this.timerId);
  }

  render() {
    // console.log('Render called');
    return (
      <div>
        <button
          onClick={() => {
            this.handleStatus();
          }}
        >
          Change Status
        </button>
        {/* <h1>Count: {this.state.count}</h1> */}
      </div>
    );
  }
}

export default ReactLifeCycle;
