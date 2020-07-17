import React, { Component } from "react";

class Counter extends Component {
  state = {  
    count: 0,
    /*imageUrl: 'https://picsum.photos/200'*/
  }

// its good practice to make class for styling keeping in the view 
// maintainbility and performance but sometimes we may want to break the rules so,
  styles = {
    fontSize: 15,
    fontWeight: "bold"
  }

  render() {
    // Using a let variable instead of const because we cannot change the state of const variable
    // but we can change the field of const object e.g 
    // const obj={ name:'Ali'};
    // obj.name="Numan";

    // Rendering class properties dynamically 
    let classes = "badge m-2 badge-";
    classes += (this.state.count===0) ? "warning" : "primary";
    
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt=""/ > */} 
        {/* <span style={this.styles} className="badge badge-primary m-2">{this.state.count } </span> */}
        {/* for inline styling style={{ fontSize: 20}} */}
        {/*<span className="badge badge-primary m-2">{this.state.count } </span> */}
        
        <span className={classes}>{this.state.count } </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
  formatCount() {
    //   const { count} = this.state;
    //   return count === 0? "Zero" : count;
  }
}

export default Counter;
